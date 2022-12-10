import { ref } from "vue";
import axios  from 'axios';
import { useRouter } from 'vue-router';

export default function useBooks() {

    const books  = ref([]);
    const book  = ref([]);
    const errors  = ref([]);    
    const router = useRouter();
    
    const getBooks = async(page = 1) => {
        const response = await axios.get(`v1/books?page=${page}`)
                        .then( response => {
                            books.value = response.data.data; 
                        })
             
                          
        console.log('getBook token >>> ' + localStorage.getItem('token'));
        return {books, getBooks}
    }    

    const getBook = async(id) => {
        const response = await axios.get("v1/books/" + id);
        book.value = response.data.data;                
    }    

    const storeBook = async(data) => {
        try {
            await axios.post("v1/books", data);
            await router.push({name: "BooksIndex"});
        } catch(error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }

        }
    }    

    const updateBook = async(id) => {
        try {
            await axios.put("v1/books/"+id, book.value);
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
        await axios.delete("v1/books/"+id);
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
