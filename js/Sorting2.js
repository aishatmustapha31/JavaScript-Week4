
let listOfFruits = ["Mango","Banana","Apple","Lemon","Grape","Lime","Pea"]


// String Compare 
listOfFruits.sort((a,b)=>{
      return a.localeCompare(b)
})

console.log(listOfFruits.join(" -- "))

// Sort based on the charater length

listOfFruits.sort((a,b)=>{
    return a.length - b.length
})

console.log(listOfFruits.join(" "))

// Sorting Numbers
let age =[23,77,55,90,12,89,34,42,88,11,104]

age.sort((a,b)=>{
    return b - a 
})

console.log(age.join(" "));


// Sorting Objects 

let people = [
    { name: 'James Bond', age: 22, phone: '09087655', salary: 65000 },
    { name: 'Mike Tyson', age: 45, phone: '090876554', salary: 34000 },
    { name: 'Mary Jones', age: 32, phone: '09087655', salary: 76000 },
    { name: 'Fred Milles', age: 29, phone: '090876554', salary: 87000 },
]

// Extracting Value from Array
let names = people.map((person)=>{
    return person.name
})

console.log(names.join(" - "))


// Sorting Object by String 
let sortedPeople = people.sort((a,b)=>{
    return a.name.localeCompare(b.name)
})

// for(let p of people){
//     console.log(p)
// }

// Sorting Object by Number 
let sortedPeople2 = people.sort((a,b)=>{
    return a - b 
})

for(let p of people){
    console.log(p)
}


// Sorting Date 

let workingDays = [new Date(1998,7,20),new Date(1981,5,15),new Date(2020,7,8),new Date(1981,05,14)]

workingDays.sort((a,b)=>{
    if(a > b) return -1
    if(a < b)  return 1
    else return 0 
})

console.log( workingDays.join("   "))
// let name1= "jame"
// let name2 = "JAmes"

// console.log(name1.localeCompare(name2))