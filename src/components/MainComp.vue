<template>
  <div id="main">
    <div class="container">
      <h1 class="text-center fw-bold " id="feature">Yangiliklar</h1>
      
      <div class="row mt-5 position-relative">
        <div class="row align-content-between" style="height: 250px">
          <div class="col-6">

<img src="../assets/dk1.png" alt="" class="w-25 position-absolute" style="left:36.5%">

            <router-link
              :to="{ name: 'courses' }"
              @click.prevent="
                playSound('https://www.soundjay.com/buttons/button-30.wav')
              "
              class="btn fw-bold text-white bg-gradient w-75 m-auto rounded-9 position-relative d-flex justify-content-between text-dark align-items-center gap-3 link1"
          >
            <h5 class="p-0 m-0">  Kurs yangiliklari</h5>
          
            </router-link>
          </div>

          <div class="col-6">
            <router-link
              :to="{ name: 'dkNews' }"
              class="btn bg-gradient w-75 m-auto rounded-9 d-flex justify-content-center align-items-center gap-3 link2"
              @click.prevent="
                playSound('https://www.soundjay.com/buttons/button-30.wav')
              "
              >DK yangiliklari
              <img src="../assets/dk1.png" alt="" class="w-25 rounded-6 ">
              </router-link
            >
          </div>

          <div class="col-6">
            <router-link
              :to="{ name: 'ITnews' }"
              class="btn bg-gradient w-75 m-auto rounded-9 d-flex justify-content-center align-items-center gap-3 link3"
              @click.prevent="
                playSound('https://www.soundjay.com/buttons/button-30.wav')
              "
              >Vakansiya
              <img src="../assets/jobs.png" alt="" class="w-25 rounded-6 ">
            </router-link>
          </div>

          <div class="col-6">
            <router-link
              :to="{ name: 'vakansynews' }"
              class="btn bg-gradient w-75 m-auto rounded-9 d-flex justify-content-center align-items-center gap-3 link4"
              @click.prevent="
                playSound('https://www.soundjay.com/buttons/button-30.wav')
              "
              >IT yangiliklari
              <img src="../assets/IT.png" alt="" class="w-25 rounded-6 "></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {},

  methods: {
    playSound(sound) {
      if (sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#main {
  p {
    font-family: "Jost", sans-serif;
  }

  #feature {
    font-family: "Bungee Inline", cursive;
    color: rgb(78,95,111);
  }

  .link1 {
   
    height: 100px;
    background: rgb(14,129,131);
    background-image: url('https://static.tildacdn.com/tild6566-3865-4232-a238-366462323638/la-manca-de-talent-d.jpeg') !important;
    background-size: cover;
    background-position: center;
  
    background-blend-mode: multiply;

 
    color: white;

  
  }

  .link2 {
   
    height: 100px;
    background: rgb(14,129,131);
    color: white;
  }

  .link3 {
   
    height: 100px;
    background: rgb(14,129,131);
    color: white;
  }

  .link4 {
    height: 100px;
   
    background: rgb(14,129,131);
    color: white;
  }
}

@import url("https://fonts.googleapis.com/css2?family=Bungee+Inline&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap");
</style>