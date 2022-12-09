<script setup>

  import useBooks from '../../composables/books';
  import { onMounted } from 'vue';
  import { TailwindPagination } from 'laravel-vue-pagination';  
  
  const { books, getBooks, destroyBook }  = useBooks();
  
  onMounted(() => getBooks() );

</script>


<template>
  <div class="mt-12">

    <div class="flex justify-end p-2">
        <RouterLink :to="{ name: 'BooksCreate'}" class="px-4 py-2 bg-indigo-600 hover:bg-indigo-800 rounded text-white" >
          Add New Book
        </RouterLink>
    </div>  

    <div class="overflow-x-auto relative">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" class="py-3 px-6">
                      Title
                  </th>
                  <th scope="col" class="py-3 px-6">
                      Author
                  </th>

                  <th scope="col" class="py-3 px-6">
                    Description
                  </th>

                  <th scope="col" class="py-3 px-6">
                      Price
                  </th>
                  <th scope="col" class="py-3 px-6">
                      Action
                  </th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="book in books" :key="book.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td class="py-4 px-6">
                      {{ book.title }}
                  </td>

                  <td class="py-4 px-6">
                    {{ book.author }}
                  </td>

                  <td class="py-4 px-6">
                    {{ book.description.substring(0,30)+" .."  }}
                  </td>                  

                  <td class="py-4 px-6">
                    {{ book.price }}
                  </td>

                <td class="py-4 px-6 space-x-2">
                  <RouterLink :to="{name: 'BooksEdit', params: {id: book.id} }" class="px-4 py-2 bg-green-500 hover:bg-green-700 rounded text-white" >
                    Edit
                  </RouterLink>

                  <button @click="destroyBook(book.id)"  class="px-4 py-2 bg-red-500 hover:bg-red-700 rounded text-white" >
                    Delete
                  </button>

                </td>                  
              </tr>
          </tbody>        
      </table>

      <div class="mt-4 p-5  bg-red-500 text-white" style="border:1px solid red">
        <TailwindPagination
          :data="books"
          @pagination-change-page="getBooks"
        />
      </div>

  </div>
  

  </div>
</template>
