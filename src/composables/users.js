import { ref } from "vue";
import axios  from 'axios';
import { useRouter } from 'vue-router';

export default function useUsers() {
    
    const isLoggedIn = ref();
    const errors  = ref([]);      
    const router = useRouter();

    const getCookie = async() => {        
        await axios.get("csrf-cookie");
    }  

    const registerUser = async(data) => {
        try {
            getCookie();
            await axios.post("register", data);
            await router.push({name: "Login"});
        } catch(error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }

        }
    }    

    const loginUser = async(data) => {        
        try {
            getCookie();                
            const response = await axios.post("login", data);                    
            localStorage.setItem("token", response.data.data.token);   
            hasToken();
            router.push({name: "BooksIndex"});
        } catch(error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
                await router.push({name: "BooksIndex"});
            }

        }
    }    
    
    const logoutUser = async() => {   
        localStorage.removeItem('token');     
        localStorage.removeItem('auth');     
        hasToken();
        router.push({name: "Login"});
    }     

    const hasToken = async () => {
        const storeToken = localStorage.getItem('token');    
        if (storeToken) {
            isLoggedIn.value = true;            
        }
        isLoggedIn.value = false;

        return isLoggedIn;
    }    

    return {
        registerUser,        
        loginUser,
        logoutUser,        
        hasToken,
        isLoggedIn,
        errors        
    }


}
