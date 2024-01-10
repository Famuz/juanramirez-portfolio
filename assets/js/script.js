/* Menu mobile */
let menu = document.querySelector(".menu-icon");
let line1 = document.querySelector(".line-1");
let line2 = document.querySelector(".line-2");
let line3 = document.querySelector(".line-3");
let asideNav = document.querySelector('.nav__list__mobile');

/* My Journey Tabs */
let journeyTabs = document.querySelectorAll('.journey__tabs button')

menu.addEventListener('click', ()=> {
  line1.classList.toggle('line-top');
  line2.classList.toggle('line-center');
  line3.classList.toggle('line-buttom');
  asideNav.classList.toggle('nav__list__mobile--visible');
})

journeyTabs.forEach((tab) => {
  tab.addEventListener('click', () => {  
    const experience = document.querySelector('.tab__experience');
    const education = document.querySelector('.tab__education');
    const experienceContainer = document.querySelector('.experience__container');
    const educationContainer = document.querySelector('.education__container');

    if(tab.classList.contains('tab__experience')) {
      if(!tab.classList.contains('journey__button--active')) {
        experience.classList.add('journey__button--active');
        education.classList.remove('journey__button--active');
        experienceContainer.classList.remove('hidden');
        educationContainer.classList.add('hidden');
      }
    } else {
      if(!tab.classList.contains('journey__button--active')) {
        education.classList.add('journey__button--active');
        experience.classList.remove('journey__button--active');
        experienceContainer.classList.add('hidden');
        educationContainer.classList.remove('hidden'); 
      }
    }
  })
});