<script setup>
  import { onMounted, onUnmounted } from 'vue';
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
import LayerComp from './components/LayerComp.vue';
import Courses from './components/Courses.vue'
import Footer from './components/Footer.vue'
import Xodimlar from './components/Xodimlar.vue';




</script>

<template >
<div style="height: 100vh;" class="bg-grayish">
<h2 class="pt-3 p-5 text-light">The site will be launched soon...</h2>
<img src="./assets/dk1.png" alt="" class="w-50 float-end">
</div>
<div id="vremenna">
  <HeaderComp  />
<MainComp></MainComp>
<LayerComp/>
<Courses></Courses>
<Xodimlar></Xodimlar>
<Footer></Footer>
</div>
  


</template>


<style lang="scss" >




*{
  margin: 0;
  padding: 0;
 
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


.dark{
  background: rgb(44, 43, 43) !important;
  color: white !important;
}



#vremenna{
display: none;
}

</style>
