
let ring = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let images = ['p1.jpg','p2.jpg','p3.jpg','p4.jpg','p5.jpg',
   'p6.jpg','p7.jpg','p8.jpg','p9.jpg','p10.jpg']

function Rotate(input, shiftCount) {
    let output = []
    for (let index = 0; index < input.length; index++) {
        output[(index + input.length + shiftCount % input.length) % input.length] = input[index]
    }

    return output
}






function generateRandomNumber() {
    let max = 9
    let randomNumber = Math.random() * max

    let number = Math.floor(randomNumber)

    return number
}

function generateSlide(){
    let slider = document.getElementById("slider")
   setInterval(()=>{
    let shift = generateRandomNumber();
    let rotatedImages = Rotate(images,shift)
   let sliderImages = rotatedImages.map((img)=>{
    let paddedImage = `<div class="box" style="background-image:url('./images/${img}')"></div>`
    return paddedImage
     })

slider.innerHTML = sliderImages.join(" ")

   }, 5000)

}

generateSlide()