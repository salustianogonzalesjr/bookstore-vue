import { ref } from "vue";
import axios  from 'axios';
import { useRouter } from 'vue-router';

axios.defaults.baseURL = "http://bookstore.test/api/";

export default function useUsers() {

    const errors  = ref([]);    
    const router = useRouter();


    const registerUser = async(data) => {
        try {
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
            await axios.post("login", data);
            await router.push({name: "BooksIndex"});
        } catch(error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }

        }
    }     

    return {
        registerUser,        
        loginUser,
        errors
    }


}
