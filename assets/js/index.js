const darkLigth = document.querySelector(".bi-moon-stars-fill")

var navbar = document.querySelector(".navbar-portfolio")
var header = document.querySelector(".container-header")
var about = document.querySelector(".container-about")
var skill = document.querySelector(".container-skills")
var portfolio = document.querySelector(".container-portfolio")
var contato = document.querySelector(".container-contact")
var footer = document.querySelector(".container-footer")


darkLigth.addEventListener("click", function(){
    if(this.classList.toggle("bi-brightness-high-fill")){
        this.classList.remove("bi-moon-stars-fill")
        header.classList.add("dark")
        navbar.classList.add("dark")
        about.classList.add("dark")
        skill.classList.add("dark")
        portfolio.classList.add("dark")
        contato.classList.add("dark")
       
    } else if(this.classList.toggle("bi-moon-stars-fill")){
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
btnArrowHeigthCard.forEach((btnArrow)=>{
    btnArrow.addEventListener("click", HeigthCard)
})
function HeigthCard(element){
    const cardElemento = element.target
    let cardHeigth = cardElemento.closest(".card-skill")

    if(this.classList.toggle("bi-x-circle")){
        this.classList.remove("bi-arrow-down-square")
        cardHeigth.classList.add("heigthCard")

    } else if(this.classList.toggle("bi-arrow-down-square")) {
        this.classList.remove("bi-x-circle")
        cardHeigth.classList.remove("heigthCard")
    }
    
}