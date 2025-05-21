<script setup>
import { ref } from 'vue'
import SearchContacs from './components/SearchContacs.vue'
import ListContacts from './components/ListContacts.vue'

import { getAllContacts } from './servicies/ApiContacts'

//import {contactList} from './composables/useListContacs';
import { useListContacts } from './composables/useListContacs';

const {contactList} = useListContacts()

  //const listContacts = ref(getAllContacts())
  const title = "Mi agenda Listaa"
  
  const clearList = (newList) => {
      contactList.value = newList
      //console.log("Limpiar")
  }

  const filterListContact = (kword) => {
    if(kword.trim() === "") {
      contactList.value = getAllContacts()
    }  
    contactList.value = contactList.value.filter(
      (contact) => {
        return contact.name.toLowerCase().includes(kword.toLowerCase())
      }
    )
  }
</script>

<template>
  <div class="flex items-center flex-col p-5">
    <h1 class="text-xl m-4"> mi {{ title }}</h1>
    <search-contacs 
      @filterContact="filterListContact"/>

    <list-contacts 
      title="Lista de webones" />

    <div>
      <button class="bg-blue-500 py=1.5 px-5"
      @click="clearList()"
      >Limpiar</button>
    </div>
  </div>
</template>

<style scoped>


  .titulo {
    color: red;
    font-size: 18px;
  }
</style>
