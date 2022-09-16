<template>
  <div id="layer" class="mt-5">
    <div class="container">
      <h1 class="text-end">Tavsiyalar</h1>
      <div class="row">
        <div class="col-md-6 ">
          <h3>Men dasturchi bo'lmoqchiman!</h3>
          <p class="mt-4 opacity-60">
            Dasturchi bo'lishni maqsad qildingmi? Dasturlashda - <kbd class="text-warning">Sabr</kbd>,
            <kbd class="text-warning">intiluvchanlik</kbd>,<kbd class="text-warning">Qiziqish</kbd> eng muhum hisoblanadi!
          </p>
        </div>

        <div
          class="col-md-5 offset-md-1 shadow-lg rounded-9 ani"
          style="height: 300px; background-image: url('https://i.pinimg.com/originals/21/bf/35/21bf35b9592308adefdca931fc0f8bc4.jpg'); background-size: cover; "
        >
       </div>
      </div>



          <div class="row mt-5 pt-5">

        <div
          class="col-md-5 offset-md-0    shadow-lg rounded-9 ani"
          style="height: 300px"
        >
     
      </div>

   <div class="col-md-5 offset-md-2 ">
          <h1>Automated Reports widgets</h1>
          <p class="mt-4 opacity-65">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            inventore minima, cum eaque similique, accusantium quos quasi
            officiis error adipisci aut at provident, odit quas excepturi.
            Exercitationem fuga amet molestias.
          </p>
        </div>


      </div>


          <div class="row mt-5 pt-5">
        <div class="col-md-6 ">
          <h1>Automated Reports widgets</h1>
          <p class="mt-4 opacity-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            inventore minima, cum eaque similique, accusantium quos quasi
            officiis error adipisci aut at provident, odit quas excepturi.
            Exercitationem fuga amet molestias.
          </p>
        </div>

        <div
          class="col-md-5 offset-md-1 shadow-lg rounded-9 ani"
          style="height: 300px"
        ></div>
      </div>

    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
#layer {
  margin-top: 130px !important;


  .ani{
    animation: animate 2s infinite ease-in-out alternate;
  }

  @keyframes animate{
    100%{
      transform: translateX(-10px) translateY(10px) scale(1.001);
    }
   
  }
}
</style>