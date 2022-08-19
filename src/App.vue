<script setup>
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
import LayerComp from './components/LayerComp.vue';
import Courses from './components/Courses.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  
  <HeaderComp/>
<MainComp></MainComp>
<LayerComp/>
<Courses></Courses>
<Footer></Footer>
</template>

<style lang="scss" >

*{
  margin: 0;
  padding: 0;
 
  }

body{
      background: rgb(248,249,255) !important ; 
}

::-webkit-scrollbar {
  width: 15px   ;
}

::-webkit-scrollbar-track {
  background-color: #e4e4e4 ;
  border-radius: 100px ;
}

::-webkit-scrollbar-thumb {
  border-radius: 100px ;
  border: 5px solid transparent  ;
  background-clip: content-box ;
  background-color: #210a92;
}

</style>
