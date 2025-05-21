<script setup>
import { computed , watch, watchEffect} from 'vue';
import BtnDelete from './BtnDelete.vue';
//import { contactList } from '../composables/useListContacs';
import { useListContacts } from '../composables/useListContacs';

 const props = defineProps({
    title: {
        type: String,
        default: "Mi awenda",
    },

    // listContact: {
    //     type: Array,
    //     default: []
    // }
  })
  const { contactList, msjEmpty,showEmpty} = useListContacts()

  // watch(contactList, (newValue, oldValue) => {
  //   console.log("Cambio", newValue, oldValue)
  //   showEmpty('No hay contactos')
  // })
    watchEffect(() => {
      console.log("Cambio", contactList.value)
      showEmpty('No se encontraron contactos')
    })


  const totalRecompensa = computed(() => {
    return contactList.value.reduce(
      (accumulator, contact) => accumulator + contact.recompensa, 0
    )
  })
  // const totalRecompensas =() => {
  //   return props.listContact.reduce((accumulator, contact) => 
  //       accumulator + contact.recompensa, 0
  //   )
  // }
</script>

<template>
    <div class="m-6">
      <h3 class="text-3xl">{{title}} - {{ totalRecompensa}} </h3>
      <table class="table-fixed">
        <thead>
          <th>Numero</th>
          <th>Nombre</th>
          <th>Celular</th>
          <th>Correo</th>
          <th>Estado</th>
        </thead>
        <tbody>
          <tr v-for="contact in contactList">
            <td class="p-3 border-b-2"> {{ contact.id }}</td>
            <td class="p-3 border-b-2">{{contact.name}}</td>
            <td class="p-3 border-b-2"> {{contact.phone}}</td>
            <td class="p-3 border-b-2">{{contact.email}}</td>
            <td class="flex items-center">
              <a href="#" class="py-2 px-4 mx-2 bg-purple-800 rounded-full">Editar</a>
              <BtnDelete/>
            </td>
          </tr>
        </tbody>
      </table>
      <p class="text-red-800">
        {{ msjEmpty }} </p>
    </div>
</template>



<style lang="scss" scoped>

</style>