const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Déclaration des variables globales
let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");
let dotsContainer = document.querySelector(".dots");
let bannerImg = document.querySelector(".banner-img");
let bannerTagLine = document.querySelector("#banner p");
let currentIndex = 0;

// Ajout des bullet points dans le html
for (let i = 0; i < slides.length; i++) {

    // Création d'un nouvel élément de type "span"
    let dot = document.createElement("span");

    // Ajout de la classe "dot" à l'élément
    dot.classList.add("dot");

    // Insertion du nouvel élément "span" dans le conteneur "dotsContainer"
    dotsContainer.appendChild(dot);
}

// Récupération de tous les bullet points après leur création
let dots = dotsContainer.querySelectorAll(".dot");

// Mise à jour du point sélectionné
updateActiveDot();

// Gère le clic sur la flèche gauche pour reculer dans le carrousel
arrowLeft.addEventListener("click", () => {

    // Debug
    console.log(arrowLeft);

    // Recule dans le carrousel
    changeSlide(-1);

});

// Gère le clic sur la flèche droite pour avancer dans le carrousel
arrowRight.addEventListener("click", () => {

    // Debug
    console.log(arrowRight); 

    // Avance dans le carrousel
    changeSlide(1);

});

// Mise à jour du point sélectionné
function updateActiveDot() {

    // Retire la classe "dot_selected" de tous les points
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("dot_selected");
    }

    // Ajoute la classe "dot_selected" au point correspondant à l'index actuel
    dots[currentIndex].classList.add("dot_selected");
    
}

// Mise à jour du carrousel en fonction de la direction
function changeSlide(direction) {

    // Changement du bullet point actif au suivant
    currentIndex = currentIndex + direction;

    // Si dépassement de la dernière image, retour à la première
    if (currentIndex > 3) {
        currentIndex = 0;
    }

    // Si dépassement de la première image, retour à la dernière
    if (currentIndex < 0) {
        currentIndex = 3;
    }

    updateActiveDot();

    // Changement de l’image
    bannerImg.src = "./assets/images/slideshow/" + slides[currentIndex].image;

    // Changement du texte correspondant à l’image
    bannerTagLine.innerHTML = slides[currentIndex].tagLine;

}
