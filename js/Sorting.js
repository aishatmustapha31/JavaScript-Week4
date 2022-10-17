
let say ="I i LOVE love  mango MANGO";

let list = [];
let charCodeList =[];

for(let c of say){
  list.push(c)
}

list.sort()

for(let c of list){
    charCodeList.push(c.charCodeAt())
  }

console.log(list.join(" "))

console.log(charCodeList.join("-"))

