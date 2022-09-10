<script setup>
  import { onMounted, onUnmounted } from 'vue';
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
import LayerComp from './components/LayerComp.vue';
import Courses from './components/Courses.vue'
import Footer from './components/Footer.vue'
import Xodimlar from './components/Xodimlar.vue';
import Vacansy from './components/vacansy.vue'




</script>

<template >

<div class="dd" style="display: none !important;">


  <HeaderComp  />
<MainComp></MainComp>
<LayerComp/>
<Courses></Courses>
<Xodimlar></Xodimlar>
<Vacansy></Vacansy>
<Footer></Footer>

</div>
  

<div class="containerr">
			<div class="wrapper">
				<div class="content">
					<h1>Tez kunda</h1>
					<p>Dasturchilar klubidan "Mega yangilik"<br>Bizga qo'shiling, kelajagingizni IT bilan quring</p>
					<!-- <a href="#" class="btn1">Subscribe</a> -->
					<a  href="https://t.me/dasturchilarklubi" class="btn2">Telegram</a>
				</div> <!-- content ends -->
			</div> <!-- wrapper ends -->
		</div> <!-- container ends -->


</template>


<style lang="scss" >




*{
  margin: 0;
  padding: 0;
 
  }



::-webkit-scrollbar {
  width: 15px   ;
}

::-webkit-scrollbar-track {
  background-color: #e4e4e4 ;
  border-radius: 100px ;
}

::-webkit-scrollbar-thumb {
  border-radius: 100px ;
  border: 5px solid transparent  ;
  background-clip: content-box ;
  background-color: #210a92;
}


.dark{
  background: rgb(44, 43, 43) !important;

  color: white !important;

 
}



#vremenna{
display: none;
}

@import url('https://fonts.googleapis.com/css2?family=Titan+One&display=swap');












// cominf aoo






@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700");
*{
	font-family: 'Open Sans', sans-serif;
	font-weight: 400;
}
body{
	margin: 0;
	padding: 0;
	font-size: 16px;
}
img{
	max-width: 100%;
}
.containerr{
	height: 100vh;
	width: 100%;
	background-image:url("./assets/dk1.png");
//	background-image:url("");
	background-size: cover;
	background-position: 50% 0%;
	/*overflow: hidden;*/
}
.wrapper{
	width: 100%;
    height: 100%;
	opacity: 0.7;
	background: linear-gradient(-55deg, transparent 25%, #16181E 25%, #16181E 75%, transparent 75%, transparent 100%);
	/*background: linear-gradient(-210deg, transparent 0%, #16181E 0%, #16181E 70%, transparent 50%, transparent 100%);*/
	transition: all 0.5s cubic-bezier(0.67, 0, 0.3, 1) 1s;
	display: flex;
	justify-content:center;
	align-items:center;
	text-align: center;



  &:after{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url('./assets/dk1.png') !important;
    background-size:  50%;
    background-position: -30% 80%;
    background-repeat: no-repeat;
  }
}
.content{
	/*transform:rotate(50deg);*/
	padding: 1rem;
	color:rgba(255,255,255,1);
  position: relative;
  z-index: 999999;
}
.content h1{
	font-size: 3rem;
	color:rgba(255,255,255,1);
}
.content p{
	font-size: 1.1rem;
	color:rgba(255,255,255,1);
}
.content a{
	color:rgba(255,255,255,1);
	display: inline-block;
	padding: 2.1% 4%;
    overflow: hidden;
    border-radius: 0;
    text-decoration: none;
    
}
.btn1{
	border: 1px solid rgba(255,255,255,1);;
	transition: .2s ease-in-out;
}
.btn1:hover{
	border: 1px solid rgba(255,255,255,1);;
	background-color:rgba(255,255,255,1);;
	color: black;
	transition: .2s ease-in-out;
}
.btn2{
	margin-left: 3%;
    background: linear-gradient(to right, #252AFF 0%, #25FFED 100%);
    border-image: linear-gradient(to bottom right, #252AFF 0%, #25FFED 100%);
	border-image-slice: 1;
	border-width: 1px;
    border-style: solid;
    transition: .2s ease-in-out
}
.btn2:hover{
	background: none;
	border-image: linear-gradient(to bottom right, #252AFF 0%, #25FFED 100%);
	border-image-slice: 1;
	border-width: 1px;
    border-style: solid;
    transition: .2s ease-in-out
}

@media screen and (max-width: 355px){
	.content{
		/*transform:rotate(50deg);*/
		padding: 1rem 1.4rem;
	}
	.content h1{
		font-size: 2.5rem;
		/*margin: 5px 0px;*/
		/*line-height: 1.2;*/
	}
	.wrapper{
		background: linear-gradient(-210deg, transparent 0%, #16181E 0%, #16181E 70%, transparent 50%, transparent 100%);
		transition: all 0.5s cubic-bezier(0.67, 0, 0.3, 1) 1s;
		display: flex;
		justify-content:center;
		align-items:flex-start;
		text-align: left;
	}
}

@media screen and (min-width: 356px) and (max-width: 650px){
	.content{
		/*transform:rotate(50deg);*/
		padding: 1rem 1.4rem;
	}
	.wrapper{
		background: linear-gradient(-210deg, transparent 0%, #16181E 0%, #16181E 70%, transparent 50%, transparent 100%);
		transition: all 0.5s cubic-bezier(0.67, 0, 0.3, 1) 1s;
		display: flex;
		justify-content:center;
		align-items:flex-start;
		text-align: left;
	}
}
</style>
