

<script setup>

</script>

<template>

    <div id="footer" class="pt-4">
<h1 class="text-white text-center fw-bold pt-5 mt-2 w-50 m-auto" style="position: relative; z-index: 515; transform:rotate(-4.5deg)">Pricing Plans</h1>
<p class="opacity-65 w-50 text-center m-auto text-white mt-5 pt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum architecto veniam totam error minima doloribus nulla ipsum? Sit unde esse tempora dolorem illo cum similique officiis! Sunt labore veritatis repellendus.</p>

<div class="container position-relative mt-5 footerCards" style="z-index:88">
    <div class="row pt-5 pb-5 justify-content-sm-around" style="border-bottom:1px solid gray">
        <div class="col-3 offset-0 ">
<div class="card text-center  shadow-lg shadow-6-strong ">
  <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    <img src="https://mdbootstrap.com/img/new/standard/nature/111.webp" class="img-fluid" />
    <a href="#!">
      <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
    </a>
  </div>

  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of the
      card's content.
    </p>

    <button type="button" class="btn btn-primary d-block w-100">Button</button>
  </div>
  
</div>
        </div>

         <div class="col-3 offset-1">
            <div class="card text-center shadow-lg">
  <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    <img src="https://mdbootstrap.com/img/new/standard/nature/111.webp" class="img-fluid" />
    <a href="#!">
      <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
    </a>
  </div>
 
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of the
      card's content.
    </p>

    <button type="button" class="btn btn-primary d-block w-100">Button</button>
  </div>

</div>
        </div>


         <div class="col-3 offset-1">
            <div class="card text-center  shadow-lg ">
  <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    <img src="https://mdbootstrap.com/img/new/standard/nature/111.webp" class="img-fluid" />
    <a href="#!">
      <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
    </a>
  </div>

  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of the
      card's content.
    </p>

    <button type="button" class="btn btn-primary d-block w-100">Button</button>
  </div>

</div>
        </div>  
    </div>


<div class="row py-5">
    <div class="col-4 d-flex justify-content-around  align-items-center">
<img src="../assets/dk1.png" alt=""  class="img w-25">
<h5 class="text-white">Dasturchilar Klubi</h5>
    </div>

     <div class="col-4 d-flex justify-content-sm-evenly align-items-center ">
        <a href="" class="nav-link text-white">product</a>
         <a href="" class="nav-link text-white">pricing Plans</a>
          <a href="" class="nav-link text-white">Faq</a>
           <a href="" class="nav-link text-white">blog</a>
    </div>


     <div class="col-4 d-flex justify-content-evenly align-items-center">
       <a href="" class="fab fa-facebook text-white"></a>
        <a href="" class="fab fa-twitter text-white"></a>
         <a href="" class="fab fa-youtube text-white"></a>
          <a href="" class="fab fa-instagram text-white"></a>
    </div>

</div>




</div>
    </div>
</template>


<style lang="scss" scoped>
#footer{
    width: 100%;
  
    background: rgb(205, 13, 86);
clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 16%);
position: relative;
&:before{
    content: '';
    width: 100%;
    height: 100%;
   background: rgb(23, 39, 85);
    position: absolute;
    top:3%;
    left: 0;
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 16%);

}

&:after{
    content: '';
    width: 90%;
    height: 90%;
   background: url('../assets/dk1.png');
   background-size: 40%;
   background-position: right 50px;
   background-repeat: no-repeat;
    position: absolute;
    top:3%;
    right: 0;
    opacity: 0.1;
   

}

.footerCards{
    transition: 0.5s;
   .card{
   transition: 0.2s;
   &:hover{
     transform: translate(-20px, -20px);
     box-shadow: 15px 15px 1px rgb(227, 227, 230) !important;
   }
   }
}
}
</style>