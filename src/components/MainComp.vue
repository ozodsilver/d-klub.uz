<template>
    <div id="main">
<div class="container">

<h1 class="text-center fw-bold" id="feature">Yangiliklar</h1>
<p class="text-center opacity-70">Dasturchilar Klubida, kurs yangiliklari, Firmada ishga qabul, va boshqa yangiliklarni o'qishingiz mumkin</p>
<div class="row mt-5">


<div class="col-md-12">
    <!-- Carousel wrapper -->
<div id="carouselMaterialStyle" class="carousel slide carousel-fade" data-mdb-ride="carousel">
  <!-- Indicators -->
  <div class="carousel-indicators">
    <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="0" class="active" aria-current="true"
      aria-label="Slide 1"></button>
    <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="2" aria-label="Slide 3"></button>
  </div>

  <!-- Inner -->
  <div class="carousel-inner rounded-5 shadow-4-strong">
    <!-- Single item -->
    <div class="carousel-item active">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp" class="d-block w-100"
        alt="Sunset Over the City" />
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>

    <!-- Single item -->
    <div class="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" class="d-block w-100"
        alt="Canyon at Nigh" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>

    <!-- Single item -->
    <div class="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp" class="d-block w-100"
        alt="Cliff Above a Stormy Sea" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </div>
  </div>
  <!-- Inner -->

  <!-- Controls -->
  <button class="carousel-control-prev" type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<!-- Carousel wrapper -->
</div>


    <div class="col-md-6 mt-sm-5 text-justify" >

<div class="card mb-3 text-dark w-100" >
  <div class="row g-0">
    <div class="col-md-4">
      <img
        src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
        alt="Trendy Pants and Shoes"
        class="img-fluid rounded-start"
      />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </p>
     
      </div>
    </div>
  </div>
</div>
    </div>

    
    <div class="col-md-6 mt-sm-5 ">

<i class="far fa-newspaper  fs-1 d-block text-center text-danger"></i>

<p class=" opacity-80   " style="text-align:justify !important">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id incidunt enim minima et aspernatur facere deleniti repudiandae recusandae alias sequi, temporibus optio explicabo ducimus beatae maxime quis possimus voluptates assumenda.</p>
    </div>
</div>

</div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
#main{
#feature{
    font-family: 'Bungee Inline', cursive;
}
}

@import url('https://fonts.googleapis.com/css2?family=Bungee+Inline&display=swap');
</style>