
let students = [
    { firstName: "James", lastName: "Bond", age: 25, allowance: 20000, gender: "Male", regDate: '4/12/2020' },
    { firstName: "Adebayo", lastName: "Ben", age: 20, allowance: 15000, gender: "Male", regDate: '4/22/2020' },
    { firstName: "Jade", lastName: "KIng", age: 22, allowance: 30000, gender: "Male", regDate: '4/07/2020' },
    { firstName: "Aishat", lastName: "Larry", age: 28, allowance: 50000, gender: "Female", regDate: '4/19/2020' },
    { firstName: "Wale", lastName: "Henry", age: 27, allowance: 10000, gender: "Male", regDate: '4/30/2020' },
    { firstName: "Mary", lastName: "Felix", age: 21, allowance: 45000, gender: "Female", regDate: '4/8/2020' }
]

let studentTableBody = document.getElementById("studentTableBody")



let studentData = generateStudentData()

studentTableBody.innerHTML = studentData.join(" ")


let isAscending = true;

function _Sort(_sortField) {

    let obj1 = students[0]

    let objField = obj1[_sortField]
    let fieldType = typeof objField


    if (fieldType === 'string') {
      
        students.sort((a, b) => {
            if (isAscending) {
                isAscending = false
                return a[_sortField].localeCompare(b[_sortField])
            } else {
                isAscending = true
                return b[_sortField].localeCompare(a[_sortField])
            }

        })
    } else {
      
        students.sort((a, b) => {
            if (isAscending) {
                isAscending = false
                return Number(a[_sortField]) - Number(b[_sortField])
            } else {
                isAscending = true
                return Number(b[_sortField]) - Number(a[_sortField])
            }
        
        })

    }




    studentData = generateStudentData()
    studentTableBody.innerHTML = studentData.join(" ")

}

// function sortByFName(){
//     students.sort((a,b)=>{
//         return a.firstName.localeCompare(b.firstName)
//     })

//     studentData = generateStudentData()
//     studentTableBody.innerHTML = studentData.join(" ")

// }

// function sortByLName(){


//     students.sort((a,b)=>{
//         return a.lastName.localeCompare(b.lastName)
//     })

//     studentData = generateStudentData()
//     studentTableBody.innerHTML = studentData.join(" ")

// }


// function sortByAge(){
//     students.sort((a,b)=>{
//         return a.age - b.age
//     })


//     studentData = generateStudentData()
//     studentTableBody.innerHTML = studentData.join(" ")

// }



function _SortByNumber(_sortField) {
    students.sort((a, b) => {
        return a[_sortField] - b[_sortField]
    })

    studentData = generateStudentData()
    studentTableBody.innerHTML = studentData.join(" ")

}


function sortByAllowance() {


    students.sort((a, b) => {
        return a.allowance - b.allowance
    })

    studentData = generateStudentData()
    studentTableBody.innerHTML = studentData.join(" ")

}


function sortByGender() {


    students.sort((a, b) => {
        return a.gender.localeCompare(b.gender)
    })

    studentData = generateStudentData()
    studentTableBody.innerHTML = studentData.join(" ")

}

function sortByRegDate() {


    students.sort((a, b) => {
        return a.regDate.localeCompare(b.regDate)
    })

    studentData = generateStudentData()
    studentTableBody.innerHTML = studentData.join(" ")

}


function generateStudentData() {
    return students.map((student) => {
        let dateOptions = {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        }

        let date = new Date(student.regDate).toLocaleDateString([], dateOptions)
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