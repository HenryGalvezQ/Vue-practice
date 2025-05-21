<script setup>
import {reactive, ref} from 'vue'
//import { contactList } from '../composables/useListContacs'

import { useListContacts } from '../composables/useListContacs'


  // const props = defineProps({
  //     listContact: Array,
  // })
  const emit = defineEmits(['filterContact',])

  const bgBton = ref("blue")

  const kword = ref('')
  
  const { msjEmpty, showEmpty} = useListContacts()
  const isFocus= () => {
      //bgBton.value = "red"
      stylesBtn.background = "red"
      stylesBtn.color = "white"
  }

  const stylesBtn = reactive({
      background: "blue",
      color: "blank",
  })

  const filtrarDatos =() => {
    showEmpty('Pruebe otra palabra')
    emit('filterContact', kword.value)
  }

</script>

<template>
    <div class="flex items-center ">
      <input type="text"
      class="block flex-1 border-0 bgray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
      placeholder="Buscar contacto"
      @focus="isFocus"
      @input="filtrarDatos()"
      v-model="kword">
      
      <button class="bg-blue-500 py=1.5 px-5"
      :style="stylesBtn"
      @click ="$emit('searchContacts')"
      >Buscar</button>

      <h3>{{ kword }}</h3>
    </div>

    <p class = "text-red-500">
      {{ msjEmpty }} </p>
</template>



<style lang="scss" scoped>

</style>