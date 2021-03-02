

const slides = document.getElementsByClassName('carousel-item')
let slidePosition = 0

const totalSlides = slides.length

const nextButton = document.getElementById('carousel-button-next')
nextButton.addEventListener('click', function moveToNextSlide(){
  console.log('next')
})

const prevButton = document.getElementById('carousel-button-prev')
prevButton.addEventListener('click', function moveToPrevSlide(){
  console.log('prev')
})  