<script >
import { onMounted } from "vue";
import Hammasi from "./hammasi.vue";
</script>

<template id = 'app' >
  <Router-view> </Router-view>
</template>




<style lang="scss" >
* {
  margin: 0;
  padding: 0;
}

@media (max-width: 800px) {
  #app {
    display: none !important;
  }
}

::-webkit-scrollbar {
  width: 15px;
}

::-webkit-scrollbar-track {
  background-color: #e4e4e4;
  border-radius: 100px;
}

::-webkit-scrollbar-thumb {
  border-radius: 100px;
  border: 5px solid transparent;
  background-clip: content-box;
  background-color: #210a92;
}

.dark {
  background-color: #0d2f3e !important;
  background-color: #110602;
  background-color: #004f6a;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23281D08'/%3E%3Cstop offset='1' stop-color='%23004F6A'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%23143639'/%3E%3Cstop offset='1' stop-color='%23004F6A'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg %3E%3Cg transform=''%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(-230.4 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0.5' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  background-size: cover !important;

  color: white !important;
}

#vremenna {
  display: none;
}

@import url("https://fonts.googleapis.com/css2?family=Titan+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap");

// cominf aoo

@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700");
* {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
}
body {
  margin: 0;
  padding: 0;
  font-size: 16px;
}
img {
  max-width: 100%;
}
.containerr {
  height: 100vh;
  width: 100%;
  background-image: url("./assets/dk1.png");
  //	background-image:url("");
  background-size: cover;
  background-position: 50% 0%;
  /*overflow: hidden;*/
}
.wrapper {
  width: 100%;
  height: 100%;
  opacity: 0.7;
  background: linear-gradient(
    -55deg,
    transparent 25%,
    #16181e 25%,
    #16181e 75%,
    transparent 75%,
    transparent 100%
  );
  /*background: linear-gradient(-210deg, transparent 0%, #16181E 0%, #16181E 70%, transparent 50%, transparent 100%);*/
  transition: all 0.5s cubic-bezier(0.67, 0, 0.3, 1) 1s;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url("./assets/dk1.png") !important;
    background-size: 50%;
    background-position: -30% 80%;
    background-repeat: no-repeat;
  }
}
.content {
  /*transform:rotate(50deg);*/
  padding: 1rem;
  color: rgba(255, 255, 255, 1);
  position: relative;
  z-index: 999999;
}
.content h1 {
  font-size: 3rem;
  color: rgba(255, 255, 255, 1);
}
.content p {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 1);
}
.content a {
  color: rgba(255, 255, 255, 1);
  display: inline-block;
  padding: 2.1% 4%;
  overflow: hidden;
  border-radius: 0;
  text-decoration: none;
}
.btn1 {
  border: 1px solid rgba(255, 255, 255, 1);
  transition: 0.2s ease-in-out;
}
.btn1:hover {
  border: 1px solid rgba(255, 255, 255, 1);
  background-color: rgba(255, 255, 255, 1);
  color: black;
  transition: 0.2s ease-in-out;
}
.btn2 {
  margin-left: 3%;
  background: linear-gradient(to right, #252aff 0%, #25ffed 100%);
  border-image: linear-gradient(to bottom right, #252aff 0%, #25ffed 100%);
  border-image-slice: 1;
  border-width: 1px;
  border-style: solid;
  transition: 0.2s ease-in-out;
}
.btn2:hover {
  background: none;
  border-image: linear-gradient(to bottom right, #252aff 0%, #25ffed 100%);
  border-image-slice: 1;
  border-width: 1px;
  border-style: solid;
  transition: 0.2s ease-in-out;
}

@media screen and (max-width: 355px) {
  .content {
    /*transform:rotate(50deg);*/
    padding: 1rem 1.4rem;
  }
  .content h1 {
    font-size: 2.5rem;
    /*margin: 5px 0px;*/
    /*line-height: 1.2;*/
  }
  .wrapper {
    background: linear-gradient(
      -210deg,
      transparent 0%,
      #16181e 0%,
      #16181e 70%,
      transparent 50%,
      transparent 100%
    );
    transition: all 0.5s cubic-bezier(0.67, 0, 0.3, 1) 1s;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
  }
}

@media screen and (min-width: 356px) and (max-width: 650px) {
  .content {
    /*transform:rotate(50deg);*/
    padding: 1rem 1.4rem;
  }
  .wrapper {
    background: linear-gradient(
      -210deg,
      transparent 0%,
      #16181e 0%,
      #16181e 70%,
      transparent 50%,
      transparent 100%
    );
    transition: all 0.5s cubic-bezier(0.67, 0, 0.3, 1) 1s;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
  }
}

::selection {
  background: red;
  color: white;
}
</style>
