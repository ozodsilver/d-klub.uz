

<script>
import {ref} from 'vue'
export default {
  setup(){
    const docState = ref('saved')
let vid = ref(true)

const addVideo = () => {
vid.value = !vid.value
console.log('nexty')
}

// dark mode

let darkMode = () => {
document.body.classList.toggle('dark')
}


return {vid, addVideo,docState,darkMode}

  }
}


</script>

<template>
  <div class="w-100">
    <div id="home">
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
                  <a class="nav-link text-white" href="#">Dashboard</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="#">Team</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="#">Projects</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link text-light" href="#">Projects</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link text-light" href="#">Projects</a>
                </li>
              </ul>
              <!-- Left links -->
            </div>

            <div class="d-flex align-items-center gap-3">
              <button class="btn btn-outline-danger rounded-9 px-5">
                sign up
              </button>
              <a
                class="btn btn-primary"
                style="background-color: #3b5998"
                href="#!"
                role="button"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
              <a
                class="btn btn-primary bg-primary fs-5"
                href="#!"
                role="button"
              >
                <i class="fab fa-telegram"></i>
              </a>
              <a
                class="btn btn-primary bg-primary bg-danger"
                href="#!"
                role="button"
              >
                <i class="fab fa-instagram text-light"></i>
              </a>

              <div class="form-check form-switch" @change="darkMode">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label class="form-check-label text-white" for="flexSwitchCheckDefault">Qora rejim</label>
</div>
            </div>
            <!-- Right elements -->
          </div>
          <!-- Container wrapper -->
        </nav>
<Transition name="bounce">
        <div class="row py-5 vidText" style="position: relative; z-index: 55" v-if="vid">
          <div class="col-md-6 col-sm-12 text-white mt-5 py-5">
            <h1 class="homeText">
              Monitor your business on real-time Dashboard
            </h1>
            <p class="opacity-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              pariatur nesciunt molestiae enim sunt recusandae ad vel est!
              Commodi pariatur mollitia obcaecati omnis quas perspiciatis
              voluptas asperiores fuga repellat accusantium!
            </p>
            <button class="btn btn-danger rounded-9 px-5">try for free</button>
          </div>
        </div>


</Transition>

<Transition>
<div class="w-50 position-absolute " style="z-index:444; top:25%"  v-if="!vid" >
<iframe width="600" height="350" src="https://www.youtube.com/embed/TcMBFSGVi1c?enablejsapi=1&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="rounded-4 shadow-lg" autoplay></iframe>
</div>
</Transition>

      </div>
    </div>

    <div
      class="homeRek hover-shadow position-absolute rounded-top rounded-bottom"
      style="right: 0; top: 25%; width: 35%"
    >
      <img
        data-v-6530002c=""
        class="d-block m-auto"
        src="https://app.svgator.com/assets/svgator.webapp/log-in-girl.svg"
        width="530"
        height="420.6666666666667"
      />

      <div
        class="
          video
         
          w-50
          rounded-9
          position-absolute
          shadow-lg
          d-flex
          justify-content-center
          align-items-center
        "
        style="height: 200px; top: 25%; left: -25%; background:rgb(255,0,0)"
         @click="addVideo"
      >
      <Transition name="slide-up">
        <i
          class="fas fa-play"
          style="
            font-size: 5em;
            cursor: pointer;
            position: absolute;
            z-index: 667;
            color: #fff;
          "
          v-if="docState === 'saved'"
           @click="docState = 'edited'"
       ></i>

         <i
          class="fas fa-pause"
          style="
            font-size: 5em;
            cursor: pointer;
            position: absolute;
            z-index: 667;
            color: #fff;
          "
          v-else-if="docState === 'edited'"
             @click="docState = 'saved'"
       ></i>

</Transition>

      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
#home {
  width: 100%;
  height: 82vh;
  background: rgb(23, 39, 85);
  background: linear-gradient(
    0deg,
    rgba(23, 39, 85, 1) 35%,
    rgba(23, 39, 85, 1) 35%
  );
  clip-path: polygon(0 0, 100% 0%, 100% 84%, 0 100%);

  position: relative;
  &:before {
    content: "";
    width: 100%;
    height: 6%;
    position: absolute;
    background: rgb(239, 42, 130);
    bottom: 40px;
    left: 0;
    transform: rotate(-4deg);
  }

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    background: url("../assets/dk2.png");
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
    z-index: 1111;
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
        transition: all 0.3s linear;
        width: 0;
      }

      &:hover:before {
        content: "";
        width: 100%;
        height: 2px;
        border-right: 2px solid white;
        border-radius: 20px;
        position: absolute;
        bottom: 0;
        background: white;
        box-shadow: 0 0 10px white, 0 0 10px white, 0 0 10px white;
      }
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
  box-shadow: 30px 30px 50px rgb(255, 255, 255);
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

.dark{
  background: rgb(16, 25, 43) !important;
}


@import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");
</style>