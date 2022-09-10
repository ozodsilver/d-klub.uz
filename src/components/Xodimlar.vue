<template>
    <div id="xodimlar">
<div class="container">
    <h1 class="text-center mt-5" style="font-family: 'Bungee Inline', cursive;">Xodimlar</h1>

    <div class="row">
        <div class="col-6 mt-5">
<h3 class="text-start"> Rabbanaqulov Ozodxon  </h3>
<p class="text-start">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ducimus corrupti nostrum quo enim eius ullam libero esse magni. At quam consequatur hic explicabo iure laudantium ut reprehenderit voluptas recusandae!</p>
    </div>

    <div class="col-6 ">
<img src="../assets/vue.svg" alt="" class="w-50 m-auto d-block" id="xodim1">
    </div>


    </div>

 
    <div class="row mt-5">
        <div class="col-6 ">
<img src="../assets/vue.svg" alt="" class="w-50 m-auto d-block" id="xodim2">

    </div>


    <div class="col-6 ">
<h3 class="text-start"> Rabbanaqulov Ozodxon  </h3>
<p class="text-start">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ducimus corrupti nostrum quo enim eius ullam libero esse magni. At quam consequatur hic explicabo iure laudantium ut reprehenderit voluptas recusandae!</p>
    </div>
    </div>
  
</div>
    </div>
</template>

<script setup>
    import { onMounted, onUnmounted } from 'vue';


    let handleScroll = ()=>{
        let xodim1 = document.querySelector('#xodim1')
        let xodim2 =  document.querySelector('#xodim2')
        let scrollY = window.scrollY/300 - 9
        console.log(scrollY)
        console.log(window.scrollY)
if(window.scrollY > 2900 && window.scrollY < 3300){
    xodim1.style.cssText = `transform:scale(${scrollY-0.9})`

}

else if(window.scrollY > 3301 && window.scrollY < 3800){
    xodim2.style.cssText = `opacity:${scrollY-1.7}`
}

// if(window.scrollY < 2770){
// xodim1.style.cssText = `transform:scale(1)`
// }

    }

onMounted(()=>{
    window.addEventListener('scroll', handleScroll);
})

onUnmounted(()=>{
    window.addEventListener('scroll', handleScroll);
})

    
</script>

<style lang="scss" scoped>
    #xodimlar{

#xodim1{
    transform: scale(0);
}

    }


    @import url('https://fonts.googleapis.com/css2?family=Bungee+Inline&display=swap');
</style>