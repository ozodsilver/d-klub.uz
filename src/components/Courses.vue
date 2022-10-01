<template >
  <div id="courses">
    <div class="container">
      <h1 class="mt-5 py-5 opacity-75">
        'Dasturchilar klubi' da mavjud kurslar
      </h1>

      <div class="cards">
        <div
          class="p-3 mt-5 carta"
          v-for="carta in studentData"
          :key="carta.ID"
          @click="batafsil(carta.ID)"
        >
          <img :src="carta.image" alt="" class="card-img-top w-25" />
          <h4 class="mt-2 float-end">{{ carta.Name }}</h4>
          <p class="float-end">
            {{ carta.Course }}
          </p>
          <p></p>
        </div>
      </div>

  <div class="black" v-show="modals">
    <Transition name="bounce">
    <div class="w-75 bg-light p-3 shadow mod rounded-7" style="height: 300px;" v-show="modals" v-on-click-outside="closeModal">
        <h4 class="fw-bold" id="modal"></h4>
        <p id="info"></p>
      </div>
    </Transition>
    
  </div>
      
    </div>
  </div>
</template>

<script setup>
import { vOnClickOutside } from '@vueuse/components'
import { ref, onMounted, onUnmounted } from "vue";

const modals = ref(false)

function closeModal() {
  modals.value = false
}





let handleScroll = () => {
  let vid = document.querySelector("#vid");

  let quti = document.querySelector("#quti");

  console.log(window.scrollY);
};

let show = ref(false)


onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const studentData = ref([
  {
    ID: 1,
    Name: "Mobile dasturlash",
    Course: "7 oy",
    image:
      "https://i.pinimg.com/originals/99/b1/74/99b17456234f6ac5a33f2e2276ec5fcc.png",

    Gender: "java, kotlin",
    Age: "17",
  },
  {
    ID: 2,
    Name: "Robert V. Kratz",
    Course: "Philosophy",
    image:
      "https://www.mishdroid.ru/images/virtuemart/product/frontend_itproger_profession.png",
    Gender: "Male",
    Age: "19",
  },
  {
    ID: 3,
    Name: "Kristen Anderson",
    Course: "Economics",
    image:
      "https://www.mishdroid.ru/images/virtuemart/product/backend_itproger_profession.png",
    Gender: "Female",
    Age: "20",
  },
  {
    ID: 4,
    Name: "Adam Simon",
    Course: "Food science",
    image:
      "https://avatars.mds.yandex.net/i?id=4351a03bd1d7092d944f97a78c8039a6-4444125-images-thumbs&n=13",
    Gender: "Male",
    Age: "21",
  },
  {
    ID: 5,
    Name: "Daisy Katherine",
    Course: "Business studies",
    image: "https://app.svgator.com/assets/svgator.webapp/log-in-girl.svg",
    Gender: "Female",
    Age: "22",
  },
]);

let batafsil = (id) => {
  show.value = true
  modals.value = true
  let modal = document.querySelector('#modal')
  let info = document.querySelector('#info')
 
  studentData.value.forEach((el) => {
    
    if (el.ID == id) {
   modal.innerHTML = el.Name
   info.innerHTML = el.Course

    }

  
    
    
   
  });
};
</script>

<style lang="scss" scoped>
#courses {
  .modal {
    color: rgb(21, 14, 14) !important;
  }

  .wall {
    height: 600px;

    img {
      transform: scale(0);
    }
  }

  .carta {
    border-radius: 6px;
    box-shadow: -15px -15px 1px rgba(174, 171, 171, 0.4),
      15px 15px 1px rgba(230, 226, 226, 0.8);
    transition: 0.3s;
    cursor: pointer;
    width: 100%;
    &:hover {
      box-shadow: 0px 0px 1px rgba(212, 203, 203, 0.4),
        0px 0px 1px rgba(205, 197, 197, 0.8);
    }
  }

  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 35px 67px;
    grid-template-areas:
      ". . ."
      ". . ."
      ". . ."
      ". . ."
      ". . .";
  }

  .mod {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  
  }


  .black {
    width: 100%;
    top: 0;
    left: 0;
    height: 100vh;
    position: fixed;
    background-color: rgba(0,0,0,0.6);
  }
}







</style>