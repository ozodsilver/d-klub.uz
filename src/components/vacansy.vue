<template>
    <div id="vacansy">
      <div class="container">
        <h1 class="mt-5">Vakansiya</h1>
      </div>
<div class="container mt-5 position-relative" style="height:75vh">

   <div class="d-flex"> 
    <div class="card  mb-3 shadow-lg" style="width: 540px;">
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
        <p class="card-text">
          <small class="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</div>
   </div>





</div>

<div class="salom">

</div>

    </div>
</template>

<script>
    import { ref, onMounted } from 'vue'
export default {
    setup () {
        
        let card1 = ref(null)
      let cards = [
        {
name:'ss',
age:44
      }]


     let clickHover = ()=>{
       card1.value.classList.toggle('anim')
       setTimeout(() => {
        card1.value.classList.toggle('wait')
        card1.value.classList.toggle('anim2')
        
       }, 1000);
     
     }



        return {card1, clickHover, }
    }
}


onMounted(()=>{
    console.log(card1.value)
})


</script>

<style lang="scss" scoped>
    #vacansy{
      
       .card{
        transition:all 1s;
       }

     
.anim{
  transition:all 1s;
  transform:  translateY(-70px);

}

.anim2{
  transition:all 1s;
  transform:  translateY(0px);
}
.wait{
  transition:all 1s;
  z-index: 33333;
}
   .card:nth-child(1){
position: absolute !important;
left:-20px !important;
   }

   .card:nth-child(2n){
position: absolute !important;
left:200px !important;
   }

    }

</style>