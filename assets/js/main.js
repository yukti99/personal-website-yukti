/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
} 

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
} 

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')
function closeMenuAction(){
    const navMenu = document.getElementById('nav-menu')
    // On clicking on each nav__link, show-menu class should be removed
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', closeMenuAction))

/*==================== AUTOMATING SKILL PERCENTAGE ====================*/
var skills = {
    html: '90%',
    css: '90%',
    js: '70%',
    react: '50%',
    python: '90%',
    ruby: '80%',
    java: '75%',
    node: '60%',
    firebase: '70%',
    scikit: '70%',
    pandas: '80%',
    numpy: '75%',
    tensorflow: '60%'
}

for (const skill in skills) {
    const skill_name = "skills__" + String(skill)
    const skill_div =  document.getElementById(skill_name)
    skill_div.style.width = skills[skill]
}

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className
    //console.log(itemClass)
    // close all the skills first
    for(i=0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }

    // open the toggled skill
    if (itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
        console.log(this.parentNode.className)
    }
}

skillsHeader.forEach((el) => { 
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')
        
        tabs.forEach(tab=>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 