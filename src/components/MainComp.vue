<template>
    <div id="main">
<div class="container">

<h1 class="text-center fw-bold" id="feature">Yangiliklar</h1>
<p class="text-center opacity-70 my-4 fs-6"><kbd class="text-white">"Dasturchilar Klubi"</kbd> da kurs yangiliklari, Firmadagi ish o'rinlari, va IT olamidagi yangiliklarini o'qishingiz mumkin</p>
<div class="row  mt-5">


  <router-link :to="{name:'courses'}"   @click.prevent = "playSound('https://www.soundjay.com/buttons/button-30.wav')"   class="btn btn-primary bg-gradient w-75 m-auto rounded-9 ">Kurs yangiliklari</router-link >
  <router-link :to="{name:'dkNews'}" class="btn btn-primary bg-gradient w-75 m-auto rounded-9 mt-4 "  @click.prevent = "playSound('https://www.soundjay.com/buttons/button-30.wav')">DK yangiliklari</router-link >
  <router-link :to="{name:'ITnews'}" class="btn btn-primary bg-gradient w-75 m-auto rounded-9 mt-4 "  @click.prevent = "playSound('https://www.soundjay.com/buttons/button-30.wav')">Vakansiya  </router-link >
  <router-link :to="{name:'vakansynews'}" class="btn btn-primary bg-gradient w-75 m-auto rounded-9 mt-4 "  @click.prevent = "playSound('https://www.soundjay.com/buttons/button-30.wav')">IT yangiliklari</router-link >
</div>

</div>

    </div>
</template>

<script>



  export default {
   data(){

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

<style lang="scss" scoped>
#main{
  p{
    font-family: 'Jost', sans-serif;
  }
  
#feature{
    font-family: 'Bungee Inline', cursive;
}
}

@import url('https://fonts.googleapis.com/css2?family=Bungee+Inline&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap');
</style>