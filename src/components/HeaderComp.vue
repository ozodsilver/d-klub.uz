

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    let lord = ref(null);
    const docState = ref("saved");
    let vid = ref(true);
    const store = useStore();

    const addVideo = () => {
      vid.value = !vid.value;
      console.log("nexty");
    };

    // dark mode

    let darkMode = (e) => {
      document.body.classList.toggle("dark");
e.target.classList.toggle('day')
e.target.classList.add('far')
      store.state.show = !store.state.show;
    };

    let playSound = (sound) => {
      var audio = new Audio(sound);

      if (sound) {
        audio.play();
        lord.value.trigger = "loop";
      }
    };

    let cursor = (event) => {
      let cursorr = document.querySelector("#cursor");
      let x = event.screenX + "px";
      let y = event.screenY - 80 + "px";

      cursorr.style.cssText = `transform:translate(${x}, ${y} )`;
    };

    return { vid, addVideo, docState, darkMode, cursor, playSound, lord };
  },
};
</script>

<template>
  <div class="w-100">
    <div id="home" @mousemove="cursor">
      <div id="cursor"></div>
      <i class="fas fa-moon fa text-white p-2  rounded" @click="darkMode" style="position:fixed; transition:1s; cursor:pointer; left:10px;z-index:88888; top:10px; background:rgb(117,149,255)"></i>
      <lord-icon
                src="https://cdn.lordicon.com/pgbyoxin.json"
                trigger="morph"
                class="p-1  rounded"
                colors="primary:#4be1ec,secondary:#cb5eee"
                style="width: 30px; height: 30px; position:absolute; left:10px; top:60px; background:#3b5998; cursor:pointer"
                @click.once="
                  playSound(
                    'https://new.muzikavsem.org/dl/993730849/Michael_Vignola_-_Knowing_(new.muzikavsem.org).mp3'
                  )
                "
                ref="lord"
              >
              </lord-icon>


              <a
                class="btn btn-primary  bg-primary bg-danger"
                href="#!"
                role="button"
                style="position:absolute; right:10px; top:10px; z-index:99999"
              >
                <i class="fab fa-instagram  text-light"></i>
              </a>

              

              <a
                class="btn btn-primary"
                style="position:absolute; right:10px; top:60px; z-index:99999"
                href="#!"
                role="button"
                
              >
                <i class="fa fa-telegram "></i>
              </a>

              <a
                class="btn btn-primary"
                style="background-color: #3b5998; position:absolute; right:10px; top:110px; z-index:99999"
                href="#!"
                role="button"
                
              >
                <i class="fab fa-facebook-f"></i>
              </a>

              <a
                class="btn btn-primary"
                style="background-color: #3b5998; position:absolute; right:10px; top:160px; z-index:99999"
                href="#!"
                role="button"
                
              >
                <i class="fa fa-linkedin"></i>
              </a>
          
      <div class="container">
        <nav class="navbar navbar-expand-lg shadow-0 py-4">
          <!-- Container wrapper -->
          <div class="container-fluid">
            <!-- Toggle button -->
            <button
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>

            <!-- Collapsible wrapper -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <!-- Left links -->
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">DK home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="#">Kurslar</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="#">Yangiliklar</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link text-light" href="#">Vakansiya</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link text-light" href="#">Biz haqimizda</a>
                </li>

                <!-- <li class="nav-item">
                  <a class="nav-link text-light" href="#">Tafsiyalar</a>
                </li> -->
              </ul>
              <!-- Left links -->
            </div>

            <!-- Right elements -->
          </div>
          <!-- Container wrapper -->
        </nav>
        <Transition name="bounce">
          <div
            class="row py-5 vidText"
            style="position: relative; z-index: 55"
            v-if="vid"
          >
            <div class="col-md-6 col-sm-12 text-white mt-4 py-5">
              <h1 class="homeText">
                Dasturchilar klubi, IT olamini biz bilan zabt et!
              </h1>
              <p class="opacity-75">
                Dasturchilar klubi, IT ga ixtisoslashgan o'quv markazi, va IT
                firmasi bo'lib, hozirgi kunda zamonaviy va yoqimli kasblardan
                biri bo'lgan dasturlashni o'zbek yoshlariga o'rgatib
                kelmoqda.Siz o'z kelajagingizni IT sohasida ko'rayotgan
                bo'lsangiz "Dasturchilar klubi aynan siz uchun!
              </p>
              <button
                class="btn btn-danger rounded-9 px-5"
                style="
                  background: rgb(255, 113, 41);
                  background: linear-gradient(
                    90deg,
                    rgba(255, 113, 41, 1) 0%,
                    rgba(250, 65, 19, 1) 32%
                  );
                "
              >
                Ro'yxatdan o'tish
              </button>
            </div>

            <div class="col-md-6">
              <img
                src="../assets/dkk.png"
                alt=""
                class="w-100 d-block m-auto opacity-75"
                style="position: relative; top: -20px"
                id="dk"
              />
            </div>
          </div>
        </Transition>

        <Transition>
          <div
            class="w-50 position-absolute"
            style="z-index: 444; top: 25%"
            v-if="!vid"
          >
            <iframe
              width="600"
              height="350"
              src="https://www.youtube.com/embed/TcMBFSGVi1c?enablejsapi=1&autoplay=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="rounded-4 shadow-lg"
              autoplay
            ></iframe>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
#home {
  width: 100%;
  height: 90vh;
  background-color: rgba(0, 0, 0, 0.8);
  background-blend-mode: color-burn;
  background-image: url("https://www.cxoinsightme.com/wp-content/uploads/2020/04/shutterstock_1139124146-scaled.jpg");
  background-size: cover;
  background-attachment: fixed;

  clip-path: polygon(0 0, 100% 0%, 100% 84%, 0 100%);

  position: relative;
  &:before {
    content: "";
    width: 100%;
    height: 5%;
    position: absolute;
    background: rgb(5,124,112);
background: linear-gradient(11deg, rgba(5,124,112,1) 24%, rgba(8,126,159,1) 92%);
    bottom: 40px;
    left: 0;
    transform: rotate(-4deg);
  }

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    background: url("../assets/dk1.png");
    position: absolute;
    border: solid;
    top: 0;
    left: 0;
    background-size: 50%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: 50px 80px;
    overflow: hidden;
    filter: opacity(0.03);
  }
  nav {
    position: relative;
    z-index: 15554545454545454545454111;
  }

  .homeText {
    font-family: "Righteous", cursive;
  }

  #navbarSupportedContent {
    .nav-item {
      transition: all 0.5s;
      border-bottom-width: 0px solid white;
      position: relative;

      &:before {
        content: "";
        transition: all 0.2s ease-in;
        width: 0;
      }

      &:hover:before {
        content: "";
        width: 100%;
        height: 1px;
        border-right: 2px solid white;
        border-radius: 20px;
        position: absolute;
        bottom: 0;
        background: white;
        box-shadow: 0 0 10px white, 0 0 10px white, 0 0 20px white;
      }

      a {
        font-family: "Josefin Sans", sans-serif;
        font-size: 1.3em;
      }
    }
  }

  #dk{
    transform: scale(1) ;
    animation: dk 0.6s 1;
  }
  @keyframes dk{
    50%{
transform: scale(0.3);
    }

    100%{
transform: scale(1) ;

    }
  }
}

.homeRek {
  position: relative;
  background: rgb(233, 52, 122);
  background: linear-gradient(
    270deg,
    rgba(233, 52, 122, 0.24063392446822474) 0%,
    rgba(23, 39, 85, 0.8736871457567402) 63%
  );
  box-shadow: 10px 10px 20px rgb(20, 62, 117);
  border-top-left-radius: 20px !important;
  border-bottom-left-radius: 20px !important;
  transition: 0.2s linear;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background: url("../assets/dk1.png");
    background-size: 85%;
    position: absolute;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: -100px 300px;
    z-index: 1;
    filter: opacity(0.1);
  }

  img {
    position: relative;
    z-index: 2;
  }

  .video {
    transition: 0.5s;
    position: relative;
    // box-shadow: 0 0 20px white !important;

    &:hover {
      transform: translateY(-10px);
    }
  }

  #svgator {
    width: 430px !important;
    height: 300px;
  }
}

.day{
  background: rgb(68, 70, 70) !important;
  color:rgb(255, 255, 255) !important;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

#cursor {
  width: 10px;
  height: 10px;
  box-shadow: 0 0 10px white, 0 0 10px white, 0 0 100px white, 0 0 150px white,
    0 0 10px white, 0 0 200px white, 0 0 300px white, 0 0 100px white,
    0 0 100px white;
  background: white;
  position: relative;
  z-index: 99993333339999;
  border-radius: 50%;
  transition: 0.1s;
  transition-timing-function: comparable(300, 300);
}

@media (max-width: 1380px) {
  #home {
    #svgator {
      width: 430px !important;
      height: 300px !important   ;
    }
  }
}

@import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200&display=swap");
</style>