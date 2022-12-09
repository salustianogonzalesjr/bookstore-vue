import { ref } from "vue";
import axios  from 'axios';
import { useRouter } from 'vue-router';

axios.defaults.baseURL = "http://bookstore.test/api/v1/";


export default function useBooks() {

    const books  = ref([]);
    const book  = ref([]);
    const errors  = ref([]);    
    const router = useRouter();
    
    const getBooks = async(page = 1) => {
        const response = await axios.get(`books?page=${page}`)
                        .then( response => {
                            books.value = response.data.data; 
                        })
                                
        return {books, getBooks}
    }    

    const getBook = async(id) => {
        const response = await axios.get("books/" + id);
        book.value = response.data.data;        
    }    

    const storeBook = async(data) => {
        try {
            await axios.post("books", data);
            await router.push({name: "BooksIndex"});
        } catch(error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }

        }
    }    

    const updateBook = async(id) => {
        try {
            await axios.put("books/"+id, book.value);
            await router.push({name: "BooksIndex"});
        } catch(error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }

        }
    }        

    const destroyBook = async(id) => {

        if (! window.confirm("Are you Sure?") ) {
            return;
        }
        await axios.delete("books/"+id);
        return getBooks();
            
    }  

    return {
        book,
        books,
        getBook,
        getBooks,
        storeBook,
        updateBook,
        destroyBook,
        errors
    }


}
