
let student = {
    firstName:"Aishat",
    lastName:"King",
    email: "aishat@mail.com"
}

let age = "77"

let age2 = age 

age2 = "iii"

let student2 = student

//student2.email ="james@mail.com"

console.log(student2);
console.log(student)

console.log(age, age2 )

// How to copy an Object 
// Shallow Clone 

let student3 = Object.assign({},student)

student3.email= "ziggy@mail.com"
student3.lastName="Rocky"
student3.firstName = "Ziggy"

console.log(student3,student)

let lines=[2,3,4,5]

let [a,b,_,c] = lines

console.log(a,b,c)

// Copy by Object Rest   or Spread Destructuring 
let [...d]= lines
d[0]=100
console.log(d,lines)