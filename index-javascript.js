
const navMenuButton = document.getElementById("nav-menu-button");
const navMenuExitButton = document.getElementById("nav-menu-exit-button");
const navMenu = document.getElementById("nav-menu");


navMenuButton.addEventListener('click', () => {
    if (navMenu.style.display ===
        'none') {
            navMenu.style.display = 'grid'
        } else {
            navMenu.style.display = 'none'
        } 
});

navMenuExitButton.addEventListener('click', () => {
    if (navMenu.style.display ===
        'grid') {
            navMenu.style.display = 'none'
        } else {
            navMenu.style.display = 'grid'
        } 
});




const navMenuDropDownButton1 = document.getElementById("nav-menu-dropdown-button1");
const dropLinkWrapper1 = document.getElementById("dropdown-link-wrapper1");

navMenuDropDownButton1.addEventListener('click', () => {
    if (dropLinkWrapper1.style.display ===
        'none') {
            dropLinkWrapper1.style.display = 'block'
        } else {
            dropLinkWrapper1.style.display = 'none'
        } 
});


const navMenuDropDownButton2 = document.getElementById("nav-menu-dropdown-button2");
const dropLinkWrapper2 = document.getElementById("dropdown-link-wrapper2");

navMenuDropDownButton2.addEventListener('click', () => {
    if (dropLinkWrapper2.style.display ===
        'none') {
            dropLinkWrapper2.style.display = 'block'
        } else {
            dropLinkWrapper2.style.display = 'none'
        } 
});



const dropDownButton = document.getElementById("footer-button");

const dropDownMenu = document.getElementById("footer-menu-links-container");




dropDownButton.addEventListener('click', () => {
    if (dropDownMenu.style.display ===
        'none') {
            dropDownMenu.style.display = 'grid'
        } else {
            dropDownMenu.style.display = 'none'
        } 
});

const dropDownButton2 = document.getElementById("footer-button2");

const dropDownMenu2 = document.getElementById("footer-menu-links-container2");


dropDownButton2.addEventListener('click', () => {
    if (dropDownMenu2.style.display ===
        'none') {
            dropDownMenu2.style.display = 'grid'
        } else {
            dropDownMenu2.style.display = 'none'
        } 
});


const dropDownButton3 = document.getElementById("footer-button3");

const dropDownMenu3 = document.getElementById("footer-menu-links-container3");


dropDownButton3.addEventListener('click', () => {
    if (dropDownMenu3.style.display ===
        'none') {
            dropDownMenu3.style.display = 'grid'
        } else {
            dropDownMenu3.style.display = 'none'
        } 
});


const dropDownButton4 = document.getElementById("footer-button4");

const dropDownMenu4 = document.getElementById("footer-menu-links-container4");


dropDownButton4.addEventListener('click', () => {
    if (dropDownMenu4.style.display ===
        'none') {
            dropDownMenu4.style.display = 'grid'
        } else {
            dropDownMenu4.style.display = 'none'
        } 
});

const dropDownButton5 = document.getElementById("footer-button5");

const dropDownMenu5 = document.getElementById("footer-menu-links-container5");


dropDownButton5.addEventListener('click', () => {
    if (dropDownMenu5.style.display ===
        'none') {
            dropDownMenu5.style.display = 'grid'
        } else {
            dropDownMenu5.style.display = 'none'
        } 
});



const startedButton = document.getElementById("started-dropdown-button");

const listMenu = document.getElementById("started-dropdown-list");

startedButton.addEventListener('click', () => {
    if (listMenu.style.display ===
        'none') {
            listMenu.style.display = 'block'
        } else {
            listMenu.style.display = 'none'
        } 
});

const startedButton2 = document.getElementById("started-dropdown-button2");

const listMenu2 = document.getElementById("started-dropdown-list2");

startedButton2.addEventListener('click', () => {
    if (listMenu2.style.display ===
        'none') {
            listMenu2.style.display = 'block'
        } else {
            listMenu2.style.display = 'none'
        } 
});

const startedButton3 = document.getElementById("started-dropdown-button3");

const listMenu3 = document.getElementById("started-dropdown-list3");

startedButton3.addEventListener('click', () => {
    if (listMenu3.style.display ===
        'none') {
            listMenu3.style.display = 'block'
        } else {
            listMenu3.style.display = 'none'
        } 
});


const solutionsSlideContainer = document.getElementById("solutions-slide-container-2");
const solutionsSlides = document.getElementById("solutions-slide");
const prevButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");

nextButton.addEventListener("click", (event) =>{
    const slideWidth = solutionsSlides.clientWidth;
    solutionsSlideContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", (event) =>{
    const slideWidth = solutionsSlides.clientWidth;
    solutionsSlideContainer.scrollLeft -= slideWidth;
});

const entreSlideContainer= document.getElementById("entrepreneur-wrapper");
const entreSlides = document.getElementById("entrepreneur-slide");
const entrePrevButton = document.getElementById("entrepreneur-previous-button");
const entreNextButton = document.getElementById("entrepreneur-next-button");

entreNextButton.addEventListener("click", (event) =>{
    const entreWidth = entreSlides.clientWidth;
    entreSlideContainer.scrollLeft += entreWidth;
});

entrePrevButton.addEventListener("click", (event) =>{
    const entreWidth = entreSlides.clientWidth;
    entreSlideContainer.scrollLeft -= entreWidth;
});

