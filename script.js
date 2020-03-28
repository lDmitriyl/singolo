
const MENU = document.getElementById('menu');
const PREV_BTN = document.getElementById('prev-btn');
const NEXT_BTN = document.getElementById('next-btn');
const iphone1 = document.getElementById('iphone-btn1');
const iphone2 = document.getElementById('iphone-btn2');
const DISPLAY_OFF1 = document.getElementById('display-off1');
const DISPLAY_OFF2 = document.getElementById('display-off2');
const PORTFOLIO = document.getElementById('portfolio-images');
const PORTFOLIO_TAGS = document.getElementById('portfolio-tags');
const SUBMIT = document.getElementById('contact-btn');
const CLOSE_SUBMIT = document.getElementById('close-contact-btn');


//document scroll
document.addEventListener('scroll', scroll)

function scroll(e){
  const position = window.scrollY;
  const links = document.querySelectorAll('#menu a')
  document.querySelectorAll('header,section').forEach(el => {
    if(el.offsetTop <= position && (el.offsetTop + el.offsetHeight) > position){
      links.forEach(link => {
        link.classList.remove('active');
        if(el.getAttribute('id') === link.getAttribute('href').substring(1)){
          link.classList.add('active');
        }
      })
    }
  })
}

//header
MENU.addEventListener('click',event => {
  MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
})

//mobile-display
let displayOff1 = false;
let displayOff2 = false;
iphone1.addEventListener('click', (e) => {
  displayOff1 = !displayOff1;
  displayOff1 ? DISPLAY_OFF1.style.display = 'block' : DISPLAY_OFF1.style.display = 'none';
});

iphone2.addEventListener('click', (e) => {
  displayOff2 = !displayOff2;
  displayOff2 ? DISPLAY_OFF2.style.display = 'block' : DISPLAY_OFF2.style.display = 'none';
});

function displayOff(){
  DISPLAY_OFF1.style.display = 'none';
    displayOff1 = false;
    DISPLAY_OFF2.style.display = 'none';
    displayOff2 = false;
}

//sliders

let sliderContent = document.querySelector('.slider__content');
let slides = document.querySelectorAll('.slider__item');
let pos = 0;
let slideWidth =document.querySelector('body').clientWidth;
console.dir(document.querySelector('body'));

PREV_BTN.addEventListener('click',event=>{
  pos--;
  if (pos < 0) {
    let children = sliderContent.children;
    console.log(children);
    sliderContent.style.transition = null;
    sliderContent.style.left = -(pos + 2) * slideWidth + 'px';
    sliderContent.prepend(children[slides.length - 1]);
    children[0].offsetParent;
    pos++;
  }
  sliderContent.style.left = -(slideWidth * pos) + 'px';
  sliderContent.style.transition = 'left 0.6s ease-in-out';
  displayOff();
})

NEXT_BTN.addEventListener('click',event=>{
  pos++;
  if (pos > slides.length -1) {
    let children = sliderContent.children;
    sliderContent.style.transition = null;
    sliderContent.style.left = -(pos - 2) * slideWidth + 'px';
    console.log(sliderContent.style.left);
    sliderContent.append(children[0]);
    children[0].offsetParent;
    pos--;
  }
  sliderContent.style.left = -(slideWidth * pos) + 'px';
  console.log(sliderContent.style.left);
  sliderContent.style.transition = 'left 0.6s ease-in-out';
  displayOff();
})
/*let sliderIndex = 1;
showSlides(sliderIndex);
function showSlides(n){
  let slider=SLIDERS.querySelectorAll('.slider__item')
  if(n < 1){
    sliderIndex = slider.length;
  }else if(n > slider.length){
    sliderIndex = 1;
  }
  for(i = 0; i < slider.length; i++){
    slider[i].style.display = 'none';
  }
  slider[sliderIndex-1].style.display = 'block';
}
function plusSlider(n){
    DISPLAY_OFF1.style.display = 'none';
    displayOff1 = false;
    DISPLAY_OFF2.style.display = 'none';
    displayOff2 = false;
  showSlides(sliderIndex += n)
}
PREV_BTN.addEventListener('click',(event=>{
  plusSlider(-1);
  showSlides(slideIndex += n);
}))
NEXT_BTN.addEventListener('click',(event=>{
  plusSlider(1);
  showSlides(slideIndex += n);
}))*/

// Portfolio

PORTFOLIO_TAGS.addEventListener('click', event => {
  if(event.target.classList.contains('tag')){
      PORTFOLIO_TAGS.querySelectorAll('.tag').forEach(el => el.classList.remove('tag_selected'));
      event.target.classList.add('tag_selected');
    console.dir(PORTFOLIO);
    let children = PORTFOLIO.children;
    console.dir(children);
    if(event.target.id == 'Web-Design'){
      for(let i = 0; i < children.length; i++){
        PORTFOLIO.append(children[0 + i]);
      }
    }
    if(event.target.id == 'All'){
      for(let i = 1; i < children.length; i += 2){
        PORTFOLIO.prepend(children[0 + i]);
      }
    }
    if(event.target.id == 'Graphic-Design'){
      for(let i = 0; i < children.length; i += 2){
        PORTFOLIO.prepend(children[0 + i]);
      }
    }
    if(event.target.id == 'Artwork'){
      for(let i = 1; i < children.length; i += 2){
        PORTFOLIO.append(children[0 + i]);
      }
    }
  }
})

PORTFOLIO.addEventListener('click', (event =>{
  if(event.target.parentNode.classList.contains('portfolio__image')){
    if(event.target.parentNode.classList.contains('portfolio__image-bordered')){
      event.target.parentNode.classList.remove('portfolio__image-bordered');
    }else{
    PORTFOLIO.querySelectorAll('.portfolio__image').forEach(el => el.classList.remove('portfolio__image-bordered'));
    event.target.parentNode.classList.add('portfolio__image-bordered');
    }
  }
}))

//Contact-us
document.querySelector('form').addEventListener('click', (e) =>{
  event.preventDefault();
})

SUBMIT.addEventListener('click', event =>{
  const SUBJECT = document.getElementById('subject').value.toString();
  const PROJECT = document.getElementById('project').value.toString();
  const NAME = document.getElementById('name').value;
  const EMAIL = document.getElementById('email').value;
  const VALID_NAME = validName(NAME);
  const VALID_EMAIL = validEmail(EMAIL);
  let theme = document.getElementById('subj-text');
  let description = document.getElementById('proj-text');

  if(VALID_NAME == true && VALID_EMAIL == true){
    SUBJECT != "" ? theme.innerHTML = 'Тема: ' + SUBJECT : theme.innerHTML = 'Без темы';
    PROJECT != "" ? description.innerHTML = 'Описание: ' + PROJECT : description.innerHTML ='Без описания';
    document.getElementById('message-block').classList.remove('hidden');
  }else{
    if(VALID_NAME == false){
      alert('Enter the NAME field correctly (NAME must start with a letter)');
      return;
    }
    if(VALID_EMAIL == false) alert('Enter the EMAIL field correctly(Example: web@mail.com)');
  }
})
function validName(name){
 return /^[a-zA-Z]+[a-zA-Z0-9]+/.test(name);
}
function validEmail(email){
  return /.+@[a-zA-Z1-9]+\.+[a-z]/.test(email);
 }
CLOSE_SUBMIT.addEventListener('click',(event => {
  document.querySelector('form').reset();
  document.getElementById('message-block').classList.add('hidden');
}))

/*burger*/

const BURGER = document.querySelector('.burger-menu');
const NAVBAR = document.querySelector('.header__navigation');
const OVERLAY = document.querySelector('.overlay-mobile');
let countOfClicks = 0;


BURGER.addEventListener('click', (event) => {
    countOfClicks = (countOfClicks+1)%2;
    if (countOfClicks === 1) {
        BURGER.classList.add('active');
        OVERLAY.classList.add('active');
        NAVBAR.classList.add('mobile-active-menu');
        document.removeEventListener ('scroll', scroll);

    } else {
        BURGER.classList.remove('active');
        NAVBAR.classList.remove('mobile-active-menu');
        OVERLAY.classList.remove('active');
        document.addEventListener ('scroll', scroll);
    }
});

const MOBILEMENU = document.querySelector('#menu');

MOBILEMENU.addEventListener('click', (event) => {
    if (event.target.closest('ul li a')){
        countOfClicks = (countOfClicks+1)%2;
        NAVBAR.classList.remove('mobile-active-menu');
        BURGER.classList.remove('active');
        OVERLAY.classList.remove('active');
        document.addEventListener('scroll', scroll);
    }  else { 
        event.target.stopPropagation();
    }
})