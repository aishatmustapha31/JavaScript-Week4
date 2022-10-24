
let student = {
    firstName: "Aishat",
    lastName: "King",
    email: "aishat@mail.com"
}


Object.freeze(student)

student.age = 2000

console.log(student)

delete student.firstName
delete student.lastName

console.log(student)

// Local Storage 

// window.localStorage.setItem("studentName","Aishat")


let numberOfStudents = 0
let studentList = []

ReadRecord()

function addStudent() {
    let input = prompt("Enter Number of Students")
    numberOfStudents = Number(input)
    //console.log(numberOfStudents, typeof numberOfStudents)
    regStudent()
}

function regStudent() {
    //  while(numberOfStudents >  0){
    //     --numberOfStudents   
    //  }

    for (let index = 0; index < numberOfStudents; index++) {

        let _firstName = prompt(`Enter Student Number ${index + 1} First Name`)
        let _lastName = prompt(`Enter Student Number ${index + 1} Last Name`)

        let s = {
            firstName: _firstName,
            lastName: _lastName
        }

        studentList.push(s)

    }

    let tableBody = document.getElementById("tableBody")
    let studentListPadded = studentList.map((s) => {
        let stu = `<tr>
           <td>${s.firstName}</td>
           <td> ${s.lastName}</td>
          </tr>`

          return stu
    })

    tableBody.innerHTML = studentListPadded.join("")

    SaveRecord(studentList)

}

function SaveRecord(stuList){
    let jsonResult = JSON.stringify(stuList)
    localStorage.setItem("student-data",jsonResult)

}

function ReadRecord(){
     let studentListStringJson = localStorage.getItem("student-data")
     if(studentListStringJson != null){
         studentList = JSON.parse(studentListStringJson)
     }

     let tableBody = document.getElementById("tableBody")
     let studentListPadded = studentList.map((s) => {
         let stu = `<tr>
            <td>${s.firstName}</td>
            <td> ${s.lastName}</td>
           </tr>`
 
           return stu
     })
 
     tableBody.innerHTML = studentListPadded.join("")
}