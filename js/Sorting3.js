
let students = [
    {firstName:"James",lastName:"Bond",age:25,allowance: 20000, gender:"Male",regDate:'4/12/2020'},
    {firstName:"Adebayo",lastName:"Ben",age:20,allowance: 15000, gender:"Male",regDate:'4/22/2020'},
    {firstName:"Jade",lastName:"KIng",age:22,allowance: 30000, gender:"Male",regDate:'4/07/2020'},
    {firstName:"Aishat",lastName:"Larry",age:28,allowance: 50000, gender:"Female",regDate:'4/19/2020'},
    {firstName:"Wale",lastName:"Henry",age:27,allowance: 10000, gender:"Male",regDate:'4/30/2020'},
    {firstName:"Mary",lastName:"Felix",age:21,allowance: 45000, gender:"Female",regDate:'4/8/2020'}
]

let studentTableBody = document.getElementById("studentTableBody")



let studentData = generateStudentData()

studentTableBody.innerHTML = studentData.join(" ")

function sortByFName(){
    students.sort((a,b)=>{
        return a.firstName.localeCompare(b.firstName)
    })

    studentData = generateStudentData()
    studentTableBody.innerHTML = studentData.join(" ")

}

function sortByLName(){


    students.sort((a,b)=>{
        return a.lastName.localeCompare(b.lastName)
    })

    studentData = generateStudentData()
    studentTableBody.innerHTML = studentData.join(" ")

}

function generateStudentData(){
  return  students.map((student)=>{
        let dateOptions= {
            month:'short',
            day:'numeric',
            year:'numeric'
        }
    
        let date = new Date(student.regDate).toLocaleDateString([],dateOptions)
        return `<tr>
                  <td>${student.firstName}</td>
                  <td>${student.lastName}</td>
                  <td>${student.age}</td>
                  <td>${student.allowance}</td>
                  <td>${student.gender}</td>
                  <td>${date}</td>
                  <td> 
                  <button class="btn btn-success btn-sm">Edit</button>
                  <button class="btn btn-primary btn-sm">View</button>
                  <button class="btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>`
    })
}


//  let studentData= students.map((student)=>{
//     let dateOptions= {
//         month:'short',
//         day:'numeric',
//         year:'numeric'
//     }

//     let date = new Date(student.regDate).toLocaleDateString([],dateOptions)
//     return `<tr>
//               <td>${student.firstName}</td>
//               <td>${student.lastName}</td>
//               <td>${student.age}</td>
//               <td>${student.allowance}</td>
//               <td>${student.gender}</td>
//               <td>${date}</td>
//               <td> 
//               <button class="btn btn-success btn-sm">Edit</button>
//               <button class="btn btn-primary btn-sm">View</button>
//               <button class="btn btn-danger btn-sm">Delete</button>
//                 </td>
//             </tr>`
// })