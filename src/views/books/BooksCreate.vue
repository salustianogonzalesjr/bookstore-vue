<script setup>
  import { reactive } from 'vue';
  import useBooks from '../../composables/books';

  const { storeBook, errors } = useBooks();

  const form = reactive({
    title: "",
    author:"",
    description:"",
    price:""
  }); 

</script>

<template>
  <div class="mt-20">
    <form action="" class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" @submit.prevent="storeBook(form)">
      <div class="space-y-6">

        <div class="mb-6">
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
            <input type="text" v-model="form.title" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <div v-if="errors.title">
              <span class="text-sm text-red-400">{{ errors.title[0] }}</span>
            </div>
        </div>    
      
        <div class="mb-6">
          <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
          <input type="text" v-model="form.description" id="description" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <div v-if="errors.description">
            <span class="text-sm text-red-400">{{ errors.description[0] }}</span>
          </div>          
        </div>   

        <div class="mb-6">
          <label for="author" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author</label>
          <input type="text" v-model="form.author" id="author" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <div v-if="errors.author">
            <span class="text-sm text-red-400">{{ errors.author[0] }}</span>
          </div>          
        </div>           

        <div class="mb-6">
          <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
          <input type="text" v-model="form.price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <div v-if="errors.price">
            <span class="text-sm text-red-400">{{ errors.price[0] }}</span>
          </div>          
        </div>   

        <div class="mt-4" >
          <button type="submit" class="px-4 py-2 bg-indigo-600 hover:bg-indigo-800 rounded text-white">Save</button>
        </div>

      </div>
    </form>
  </div>
</template>
