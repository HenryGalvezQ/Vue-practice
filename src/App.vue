<script setup>
import SearchContacs from './components/SearchContacs.vue'
import ListContacs from './components/ListContacs.vue'
 const title = "Mi agenda Listaa"
 const buscarContacto = () => {
   console.log("buscando contacto")
 }
</script>

<template>
  <div class="flex items-center flex-col p-5">
    <h1 class="text-xl m-4"> mi {{ title }}</h1>
    <SearchContacs />
    <ListContacs title="Lista de webones"/>
  </div>
</template>

<style scoped>


  .titulo {
    color: red;
    font-size: 18px;
  }
</style>
