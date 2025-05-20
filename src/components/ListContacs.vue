<script setup>
 const props = defineProps({
    title: {
        type: String,
        default: "Mi awenda",
    }
    })
</script>

<template>
    <div class="m-6">
        <h3 class="text-3xl">{{title}}</h3>
      <table class="table-fixed">
        <thead>
          <th>Foto</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Numero</th>
          <th>Correo</th>
        </thead>
        <tbody>
          <tr v-for="n in 20">
            <td class="p-3 border-b-2"> {{ n }}</td>
            <td class="p-3 border-b-2">Goku</td>
            <td class="p-3 border-b-2"> 021516551</td>
            <td class="p-3 border-b-2">reypirata@gmial.com</td>
            <td>
              <a href="#" class="py-2 px-4 bg-purple-800 rounded-bl-full">Editar</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>



<style lang="scss" scoped>

</style>