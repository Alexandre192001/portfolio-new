const darkLigth = document.querySelector(".bi-moon-stars-fill")

var navbar = document.querySelector(".navbar-portfolio")
var header = document.querySelector(".container-header")
var about = document.querySelector(".container-about")
var skill = document.querySelector(".container-skills")
var portfolio = document.querySelector(".container-portfolio")
var contato = document.querySelector(".container-contact")
var footer = document.querySelector(".container-footer")

darkLigth.addEventListener("click", function () {

    const removeMenu = document.querySelector(".navigation")
    removeMenu.classList.remove("menuspeed")
    document.querySelector(".menu").classList.remove("bi-x-lg")
    document.querySelector(".menu").classList.add("bi-list")

    if (this.classList.toggle("bi-brightness-high-fill")) {

        this.classList.remove("bi-moon-stars-fill")
        header.classList.add("dark")
        navbar.classList.add("dark")
        about.classList.add("dark")
        skill.classList.add("dark")
        portfolio.classList.add("dark")
        contato.classList.add("dark")
        
    } else if (this.classList.toggle("bi-moon-stars-fill")) {
        
        this.classList.remove("bi-brightness-high-fill")
        header.classList.remove("dark")
        navbar.classList.remove("dark")
        about.classList.remove("dark")
        skill.classList.remove("dark")
        portfolio.classList.remove("dark")
        contato.classList.remove("dark")
       
    }

})

const btnArrowHeigthCard = document.querySelectorAll(".bi-arrow-down-square")
btnArrowHeigthCard.forEach((btnArrow) => {
    btnArrow.addEventListener("click", HeigthCard)
})

function HeigthCard(element) {
    const cardElemento = element.target
    let cardHeigth = cardElemento.closest(".card-skill")

    if (this.classList.toggle("bi-x-circle")) {
        this.classList.remove("bi-arrow-down-square")
        cardHeigth.classList.add("heigthCard")

    } else if (this.classList.toggle("bi-arrow-down-square")) {
        this.classList.remove("bi-x-circle")
        cardHeigth.classList.remove("heigthCard")
    }

}


const menu = document.querySelector(".bi-list")
menu.addEventListener("click", menuSpeed)

function menuSpeed() {
    if (this.classList.toggle("bi-x-lg")) {
        this.classList.remove("bi-list")
        document.querySelector(".navigation").classList.add("menuspeed")
    } else if (this.classList.toggle("bi-list")) {
        this.classList.remove("bi-x-lg")
        document.querySelector(".navigation").classList.remove("menuspeed")
    }
}

const navigations = document.querySelectorAll(".navigation a")
navigations.forEach((a) => {
    a.addEventListener("click", removeMenuClick)
})

function removeMenuClick(e) {
    const removeMenu = e.target
    const remove = removeMenu.closest(".navigation")
    remove.classList.remove("menuspeed")
    document.querySelector(".menu").classList.remove("bi-x-lg")
    document.querySelector(".menu").classList.add("bi-list")
}

let carouselItems = document.querySelectorAll(".carousel-items")
const rightCarousel = document.querySelector(".bi-arrow-right-circle-fill")
const leftCarousel = document.querySelector(".bi-arrow-left-circle-fill")
let currentIndexCarousel = 0

rightCarousel.addEventListener("click", function () {
    if (currentIndexCarousel === carouselItems.length - 1) {
        currentIndexCarousel = 0
    } else {
        currentIndexCarousel++
    }
    carouselItems.forEach((elemento) => {
        elemento.classList.remove("hidden")
    })
    carouselItems[currentIndexCarousel].classList.add("hidden")
})

leftCarousel.addEventListener("click", function () {
    if (currentIndexCarousel === 0) {
        currentIndexCarousel = carouselItems.length - 1
    } else {
        currentIndexCarousel--
    }
    carouselItems.forEach((elemento) => {
        elemento.classList.remove("hidden")
    })
    carouselItems[currentIndexCarousel].classList.add("hidden")
})