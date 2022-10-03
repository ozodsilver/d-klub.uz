<template>
  <div id="main">
    <div class="container">
      <h1 class="text-center fw-bold" id="feature">Yangiliklar</h1>
      <p class="text-center opacity-70 my-4 fs-6">
        <kbd class="text-white">"Dasturchilar Klubi"</kbd> da kurs yangiliklari,
        Firmadagi ish o'rinlari, va IT olamidagi yangiliklarini o'qishingiz
        mumkin
      </p>
      <div class="row mt-5 position-relative">
        <div class="row align-content-between" style="height: 250px">
          <div class="col-6">

<img src="../assets/dk1.png" alt="" class="w-25 position-absolute" style="left:36.5%">

            <router-link
              :to="{ name: 'courses' }"
              @click.prevent="
                playSound('https://www.soundjay.com/buttons/button-30.wav')
              "
              class="btn bg-gradient w-75 m-auto rounded-9 d-flex justify-content-center align-items-center gap-3 link1"
              >
              Kurs yangiliklari
              <img src="https://static.tildacdn.com/tild6566-3865-4232-a238-366462323638/la-manca-de-talent-d.jpeg" alt="" class="w-25 rounded-6 ">
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
  }

  .link1 {
    clip-path: polygon(25% 0, 100% 0, 75% 100%, 0 100%);
    height: 100px;
    background: rgb(14,129,131);
    color: white;
  }

  .link2 {
    clip-path: polygon(0 0, 75% 0, 100% 100%, 25% 100%);
    height: 100px;
    background: rgb(14,129,131);
    color: white;
  }

  .link3 {
    clip-path: polygon(0 0, 75% 0, 100% 100%, 25% 100%);
    height: 100px;
    background: rgb(14,129,131);
    color: white;
  }

  .link4 {
    height: 100px;
    clip-path: polygon(25% 0, 100% 0, 75% 100%, 0 100%);
    background: rgb(14,129,131);
    color: white;
  }
}

@import url("https://fonts.googleapis.com/css2?family=Bungee+Inline&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap");
</style>