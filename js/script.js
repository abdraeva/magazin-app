const students = [
  {
    name: "Asel",
    age: 15,
    grade: "10A",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxQrAW8SCRFXOcHVcFGSqOFFuufBIhoHkKUw&usqp=CAU"
  },
  {
    name: "Adil",
    age: 16,
    grade: "10B",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxQrAW8SCRFXOcHVcFGSqOFFuufBIhoHkKUw&usqp=CAU"

  },
  {
    name: "Vika",
    age: 15,
    grade: "10C",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxQrAW8SCRFXOcHVcFGSqOFFuufBIhoHkKUw&usqp=CAU"

  },
  {
    name: "Asel",
    age: 15,
    grade: "10A",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxQrAW8SCRFXOcHVcFGSqOFFuufBIhoHkKUw&usqp=CAU"

  },
  {
    name: "Alim",
    age: 15,
    grade: "10B",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxQrAW8SCRFXOcHVcFGSqOFFuufBIhoHkKUw&usqp=CAU"

  },
  {
    name: "Tom",
    age: 15,
    grade: "10C",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxQrAW8SCRFXOcHVcFGSqOFFuufBIhoHkKUw&usqp=CAU"

  },

]

const select = document.querySelector(".select")
const search = document.querySelector(".search")
const container = document.querySelector(".row")



window.addEventListener("load", () => {
  if(!localStorage.getItem("students")){
    localStorage.setItem("students", JSON.stringify(students))
  }else {
    const students = JSON.parse(localStorage.getItem("students"))
    const addIDToStudents = students.map((item, index) => {
      return {...item, id:index}
    })

    localStorage.setItem("students", JSON.stringify(addIDToStudents))

    const getStudents = JSON.parse(localStorage.getItem("students"))
    card(getStudents)

  }
})


function card (base){
  const template = base.map(({name, age, grade, image})=> {
    return `
    <div class="card">
    <h2>${name}</h2>
    <img ${image}/>
    <p>AGE:${age}</p>
    <p>GRADE:${grade}</p>
    

    
    </div>
    
    `
  })

  container.innerHTML = template

}


select.addEventListener("change", (e) => {
  const event = e.target.value;

  if(event === "name"){
    search.setAttribute("placeholder", "Search by Name...")
  }else if(event === "age"){
    search.setAttribute("placeholder", "Search by Age...")
  }else {
    search.setAttribute("placeholder", "Search by Grade...")
  }

})

search.addEventListener("input", (e) => {
  const event = e.target.value.toLowerCase();
  const selectValue = select.value;

  if(selectValue === "name"){
    const filtered = students.filter(item => item.name.toLowerCase().includes(event))
    card(filtered)
  }else if(selectValue === "age"){
    // const students = parseInt(localStorage.getItem("students"))
    // const setAge = localStorage.setItem("studentAge", JSON.stringify([]))
    const filtered = students.filter(item => item.age.includes(event))
    card(filtered)
  }else{
    const filtered = students.filter(item => item.grade.toLowerCase().includes(event))
    card(filtered)
  }
})

const sidebar = document.querySelector(".sideBar");
const bars = document.querySelector(".bars");

bars.addEventListener("click", e => {
  e.preventDefault()

  bars.classList.toggle("activeBars")

  sidebar.classList.toggle("active")
})


