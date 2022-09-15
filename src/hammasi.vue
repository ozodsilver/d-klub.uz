<template>
    	<HeaderComp  @click.once = "playSound('https://new.muzikavsem.org/dl/993730849/Michael_Vignola_-_Knowing_(new.muzikavsem.org).mp3')"> </HeaderComp>
<MainComp></MainComp>
<LayerComp/>
<Courses></Courses>
<Xodimlar></Xodimlar>
<Vacansy></Vacansy>
<Footer></Footer>
</template>

<script >
  import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
import LayerComp from './components/LayerComp.vue';
import Courses from './components/Courses.vue'
import Footer from './components/Footer.vue'
import Xodimlar from './components/Xodimlar.vue';
import Vacansy from './components/vacansy.vue'

export default {
    components:{
        HeaderComp,
        MainComp,
        LayerComp,
        Courses,
        Footer,
        Xodimlar,
        Vacansy

    },

    methods:{
      playSound (sound) {
      if(sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    }
    }
}

</script>

<style scoped>

</style>