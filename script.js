
const MENU = document.getElementById('menu');
const SLIDERS = document.getElementById('slider-content');
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



//header
MENU.addEventListener('click',(event => {
  MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
}))

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

//sliders
let sliderIndex = 1;
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
}))

// Portfolio

PORTFOLIO_TAGS.addEventListener('click', event => {
  if(event.target.classList.contains('tag')){
      PORTFOLIO_TAGS.querySelectorAll('.tag').forEach(el => el.classList.remove('tag_selected'));
      event.target.classList.add('tag_selected');
    
    for(i = 0; i < PORTFOLIO.children.length; i++){
      PORTFOLIO.children[i].style.order="0";
    }
    if(event.target.id == 'Web-Design')PORTFOLIO.style.flexDirection = 'row-reverse';
    if(event.target.id == 'All') PORTFOLIO.style.flexDirection = 'row';
    if(event.target.id == 'Graphic-Design'){
      for(let i = 1; i < 12; i+=2){
        PORTFOLIO.children[i].style.order="1";
      }
    }
    if(event.target.id == 'Artwork'){
      for(i = 0; i < 12; i+=2){
        PORTFOLIO.children[i].style.order='2';
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
  document.getElementById('message-block').classList.add('hidden');
}))