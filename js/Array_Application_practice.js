

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

   }, 2000)

}

generateSlide()