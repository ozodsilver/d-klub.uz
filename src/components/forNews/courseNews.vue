<template>
    <div id="courseNews">
<div class="container-fluid p-0">
    <nav class="navbar navbar-light bg-light position-fixed w-100" style="top:0; z-index:33">
  <div class="container-fluid">
    <a class="navbar-brand btn btn-warning rounded-9 text-light d-flex gap-2" @click.once="back('https://www.soundjay.com/buttons/button-30.wav')"> <i class="fas fa-arrow-left"></i>  DK Home</a>
    <form class="d-flex input-group w-auto">
      <input
        type="search"
        class="form-control rounded"
        placeholder="Qidiruv"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <span class="input-group-text border-0" id="search-addon">
        <i class="fas fa-search"></i>
      </span>
    </form>
  </div>
</nav>




</div>

<div class="container-fluid mt-5  position-relative">
    <div class="row">
        <div class="col-8">
            <div class="container">
    <div class="cards mt-4">
        <div class="card my-5 shadow-lg " v-for="item in news" :key = 'item.id'>
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
        <h5 class="card-title text-dark">{{item.title}}</h5>
        <p class="card-text text-dark">
          {{item.text}}
        </p>
        <p class="card-text">
          <small class="text-muted">{{item.update}}</small>
        </p>

        <button class="btn btn-primary">batafsil..</button>
      </div>
    </div>
  </div>
</div>

</div>
</div>
        </div>

        <div class="col-4 position-fixed bg-light shadow-lg " style="right:0; top:8%; height:100vh">

        </div>
    </div>
</div>

    </div>
</template>

<script setup>

import {ref} from 'vue'
import {useRouter} from 'vue-router'

let route = useRouter()

let back = (sound)=> {
    let voice = new Audio(sound)
    voice.play()
    route.go(-1)
}




let news = ref([
    {
        id:0,
        title:'New1',
        update:'17.09.2022',
        text:'lorem impsum1 lorem loere lorem lorem llore lore lore lroelore lo re lreo lreo rleom'

    },

    {
        id:1,
        title:'New2',
        update:'17.09.2022',
        text:'lorem2 impsum1 lorem loere lorem lorem llore lore lore lroelore lo re lreo lreo rleom2'

    },



    {
        id:3,
        title:'New3',
        update:'17.09.2022',
        text:'lorem3 impsum1 lorem loere lorem lorem llore lore lore lroelore lo re lreo lreo rleom3'

    },

    {
        id:4,
        title:'New4',
        update:'17.09.2022',
        text:'lorem4 impsum1 lorem loere lorem lorem llore lore lore lroelore lo re lreo lreo rleom3'

    },



    {
        id:5,
        title:'New5',
        update:'17.09.2022',
        text:'lorem5 impsum1 lorem loere lorem lorem llore lore lore lroelore lo re lreo lreo rleom3'

    },


])
   
</script>

<style lang="scss" scoped>
#courseNews{
  
}
</style>