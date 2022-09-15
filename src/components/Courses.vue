<template >
  <div id="courses" >
    <div class="container">
      <h1 class="mt-5 opacity-75">'Dasturchilar klubi' da mavjud kurslar</h1>
      <section class="pb-4 mt-5 ">
        <div class="border rounded-5">
          <section class="w-100 p-4">
            <div class="datatable">
              <div
                class="datatable-inner table-responsive ps"
                style="overflow: auto; position: relative"
              >
           
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       dds
      </div>
      <div class="modal-footer">
       
      
      </div>
    </div>
  </div>
</div>



  <div class="table-responsive table-responsive-sm position-relative">

                <table
                  class="table  table-striped datatable-table table-hover mt-4"
                  :class="{ 'table-dark': $store.state.show }"
                >
                  <thead class="datatable-header">
                    <tr class="fw-bold">


                      
                      <th style="cursor: pointer" scope="col">
                        <i
                          data-mdb-sort="field_0"
                          class="datatable-sort-icon fas fa-arrow-up active"
                          style="transform: rotate(0deg)"
                        ></i>
                        Kurs nomi
                      </th>
                    
                      <th style="cursor: pointer" scope="col">
                        <i
                          data-mdb-sort="field_2"
                          class="datatable-sort-icon fas fa-arrow-up"
                          style="transform: rotate(0deg)"
                        ></i>
                        Muddati
                      </th>

                      <th style="cursor: pointer" scope="col">
                        <i
                          data-mdb-sort="field_1"
                          class="datatable-sort-icon fas fa-arrow-up"
                          style="transform: rotate(0deg)"
                        ></i>
                        Texnologiya
                      </th>
                  
                    </tr>
                  </thead>
                  <tbody class="datatable-body">
                    <tr
                      scope="row"
                      data-mdb-index="4"
                      v-for="student in studentData"
                      :key="student.ID"
                    >
                      <td>
                        {{ student.Name }}
                      </td>
                      <td>
                        {{ student.Course }}
                      </td>

                      <td>
                        {{ student.Gender }}
                      </td>
                      <td class="d-block text-center">
                        <button
                          class="btn btn-primary mod"
                          @click="batafsil(student.ID)"
                          href="#exampleModalToggle1"
                          role="button"
                           data-mdb-toggle="modal" data-mdb-target="#exampleModal"
                        >
                          batafsil ...
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

             
      
            </div>
            </div>
          </section>
        </div>
      </section>
    </div>






  </div>

</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

let handleScroll = ()=>{

let vid = document.querySelector('#vid')

let quti = document.querySelector('#quti')


console.log(window.scrollY)



}
onMounted(()=>{
  window.addEventListener('scroll', handleScroll);
})

onUnmounted(()=>{
  window.removeEventListener('scroll', handleScroll);
})






const studentData = ref([
  {
    ID: 1,
    Name: "Mobile dasturlash",
    Course: "7 oy",
    Gender: "java, kotlin",
    Age: "17",
  },
  {
    ID: 2,
    Name: "Robert V. Kratz",
    Course: "Philosophy",
    Gender: "Male",
    Age: "19",
  },
  {
    ID: 3,
    Name: "Kristen Anderson",
    Course: "Economics",
    Gender: "Female",
    Age: "20",
  },  
  {
    ID: 4,
    Name: "Adam Simon",
    Course: "Food science",
    Gender: "Male",
    Age: "21",
  },
  {
    ID: 5,
    Name: "Daisy Katherine",
    Course: "Business studies",
    Gender: "Female",
    Age: "22",
  },
]);


let batafsil = (id) => {
  let modalTitle = document.querySelector('.modal-title')
  let mBody = document.querySelector('.modal-body')
  studentData.value.forEach((el) => {
    if (el.ID == id) {
      modalTitle.innerHTML = el.Name;
      mBody.innerHTML = el.Course
    }
  });
};



</script>

<style lang="scss" scoped>
#courses{
  .modal{
    color:rgb(21, 14, 14) !important; 
  }


 .wall{
  height: 600px;

  img{
    transform: scale(0);
  }
 }




}
</style>