import {settings} from "./settings.js";
//Constantes
const burgerMenuElement = document.getElementById(settings.idBurgerMenu);
const navBurgerMenuElement = document.getElementById(settings.idNavBurgerMenu);
const closeBrugerMenuElement = document.getElementById(settings.idCloseBurgerMenu);
const sectionPrimaryMenuElements = document.querySelectorAll(settings.classSectionPrimaryMenu);
const navReseauxElement = document.getElementById(settings.idNavReseaux);
const buttonReseauxElement = document.getElementById(settings.idBoutonReseaux);
const closeReseauxMenuElement = document.getElementById(settings.idCloseReseauxMenu);
const cardCompetenceElements = document.querySelectorAll(settings.classCompetence);
const infoCompetenceElements = document.querySelectorAll(settings.classInfoCompetence);
const logoCapaciteElements = document.querySelectorAll(settings.classCapaciteLogo);
const infoCapaciteElements = document.querySelectorAll(settings.classCapaciteText);
const videoCapaciteElements = document.querySelectorAll(settings.classCapaciteVideo);

//Variables

//Fonctions
function handleClickCompetence() {
    for (const cardCompetence of cardCompetenceElements) {
        cardCompetence.addEventListener('click', () => {
            for (const cardCompetence of cardCompetenceElements) {
                cardCompetence.classList.remove(settings.classActive);
            }
            if (cardCompetence.classList.contains(settings.classActive)) {
                cardCompetence.classList.remove(settings.classActive);
            } else {
                cardCompetence.classList.add(settings.classActive);
            }
            for (const infoComptence of infoCompetenceElements) {
                infoComptence.classList.remove(settings.classActive);
            }
            for (const infoCompetence of infoCompetenceElements) {

                if (cardCompetence.classList.contains('html') && infoCompetence.classList.contains('html')) {
                    infoCompetence.classList.add(settings.classActive);
                } else if (cardCompetence.classList.contains('css') && infoCompetence.classList.contains('css')){
                    infoCompetence.classList.add(settings.classActive);
                } else if (cardCompetence.classList.contains('js') && infoCompetence.classList.contains('js')) {
                    infoCompetence.classList.add(settings.classActive);
                } else if(cardCompetence.classList.contains('figma') && infoCompetence.classList.contains('figma')){
                    infoCompetence.classList.add(settings.classActive);
                } else if (cardCompetence.classList.contains('php') && infoCompetence.classList.contains('php')) {
                    infoCompetence.classList.add(settings.classActive);
                }

            }
        })
    }
}

function handleClickCapacite() {
    for (const logoCapacite of logoCapaciteElements) {
        logoCapacite.addEventListener('click', () => {
            for (const logoCapacite of logoCapaciteElements) {
                logoCapacite.classList.remove(settings.classActive);
            }
            if (logoCapacite.classList.contains(settings.classActive)) {
                logoCapacite.classList.remove(settings.classActive);
            } else {
                logoCapacite.classList.add(settings.classActive);
            }
            for (const infoCapacite of infoCapaciteElements) {
                infoCapacite.classList.remove(settings.classActive);
            }
            for (const infoCapacite of infoCapaciteElements) {

                if (logoCapacite.classList.contains('programmation') && infoCapacite.classList.contains('programmation')) {
                    infoCapacite.classList.add(settings.classActive);
                } else if (logoCapacite.classList.contains('sql') && infoCapacite.classList.contains('sql')){
                    infoCapacite.classList.add(settings.classActive);
                } else if (logoCapacite.classList.contains('montage') && infoCapacite.classList.contains('montage')) {
                    infoCapacite.classList.add(settings.classActive);
                } else if(logoCapacite.classList.contains('ux') && infoCapacite.classList.contains('ux')){
                    infoCapacite.classList.add(settings.classActive);
                }
            }
            for (const videoCapacite of videoCapaciteElements) {
                videoCapacite.classList.remove(settings.classActive);
            }
            for (const videoCapacite of videoCapaciteElements) {
                if (logoCapacite.classList.contains('programmation') && videoCapacite.classList.contains('programmation')) {
                    videoCapacite.classList.add(settings.classActive);
                } else if (logoCapacite.classList.contains('sql') && videoCapacite.classList.contains('sql')){
                    videoCapacite.classList.add(settings.classActive);
                } else if (logoCapacite.classList.contains('montage') && videoCapacite.classList.contains('montage')) {
                    videoCapacite.classList.add(settings.classActive);
                } else if(logoCapacite.classList.contains('ux') && videoCapacite.classList.contains('ux')){
                    videoCapacite.classList.add(settings.classActive);
                }
            }
        })
    }
}


function closeBurgerMenu() {
    for (const sectionPrimaryMenuElement of sectionPrimaryMenuElements) {
        sectionPrimaryMenuElement.addEventListener('click', () => {
            navBurgerMenuElement.classList.remove(settings.classActive);
        })
    }
    closeBrugerMenuElement.addEventListener('click', () => {
        navBurgerMenuElement.classList.remove(settings.classActive);
    });
    closeReseauxMenuElement.addEventListener('click', () => {
        navReseauxElement.classList.remove(settings.classActive);
    })
}

function activateBurgerMenu() {
    burgerMenuElement.addEventListener("click", () => {
        navBurgerMenuElement.classList.add(settings.classActive);
    })
    buttonReseauxElement.addEventListener("click", () => {
        navReseauxElement.classList.toggle(settings.classActive);
    })
}


//Instructions
activateBurgerMenu();
closeBurgerMenu();
handleClickCompetence();
handleClickCapacite();