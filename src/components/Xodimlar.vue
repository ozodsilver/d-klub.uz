<template>
  <div id="xodimlar">
    <div class="container position-relative">
      <h1
        class="text-center mt-5"
        style="font-family: 'Bungee Inline', cursive"
      >
        Xodimlar
      </h1>

      
        <div class="employe rounded-6" id="xodim1">

        </div>
   

    </div>
  </div>
</template>

<script setup>
import { onMounted, ref,   onUnmounted } from "vue";




</script>

<style lang="scss" scoped>
#xodimlar {
  height: 400px;

  .employe {
    width: 300px;
    height: 200px;
 
    border: solid;
    transition: 1s;
  }
}

@import url("https://fonts.googleapis.com/css2?family=Bungee+Inline&display=swap");
</style>