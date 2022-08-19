<template>
  <div id="courses">
    <div class="container">
      <section class="pb-4 mt-5">
        <div class="bg-white border rounded-5">
          <section class="w-100 p-4">
            <div class="datatable">
              <div
                class="datatable-inner table-responsive ps"
                style="overflow: auto; position: relative"
              >
                <table class="table table-striped datatable-table table-hover">
                  <thead class="datatable-header">
                    <tr>
                      <th style="cursor: pointer" scope="col">
                        <i
                          data-mdb-sort="field_0"
                          class="datatable-sort-icon fas fa-arrow-up active"
                          style="transform: rotate(0deg)"
                        ></i>
                        Name
                      </th>
                      <th style="cursor: pointer" scope="col">
                        <i
                          data-mdb-sort="field_1"
                          class="datatable-sort-icon fas fa-arrow-up"
                          style="transform: rotate(0deg)"
                        ></i>
                        Course
                      </th>
                      <th style="cursor: pointer" scope="col">
                        <i
                          data-mdb-sort="field_2"
                          class="datatable-sort-icon fas fa-arrow-up"
                          style="transform: rotate(0deg)"
                        ></i>
                        Gender
                      </th>
                      <th style="cursor: pointer" scope="col">
                        <i
                          data-mdb-sort="field_3"
                          class="datatable-sort-icon fas fa-arrow-up"
                          style="transform: rotate(0deg)"
                        ></i>
                        Age
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

{{student.Gender}}
                      </td>
                      <td>
                        {{student.Age}}
                      </td>



                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const studentData = [
  {
    ID: "01",
    Name: "Abiola Esther",
    Course: "Computer Science",
    Gender: "Female",
    Age: "17",
  },
  {
    ID: "02",
    Name: "Robert V. Kratz",
    Course: "Philosophy",
    Gender: "Male",
    Age: "19",
  },
  {
    ID: "03",
    Name: "Kristen Anderson",
    Course: "Economics",
    Gender: "Female",
    Age: "20",
  },
  {
    ID: "04",
    Name: "Adam Simon",
    Course: "Food science",
    Gender: "Male",
    Age: "21",
  },
  {
    ID: "05",
    Name: "Daisy Katherine",
    Course: "Business studies",
    Gender: "Female",
    Age: "22",
  },
];
</script>

<style lang="scss" scoped>
</style>