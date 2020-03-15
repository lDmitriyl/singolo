
const MENU = document.getElementById('menu');
const SLIDERS = document.getElementById('slider-content');
const PREV_BTN = document.getElementById('prev-btn');
const NEXT_BTN = document.getElementById('next-btn');
const iphone1 = document.getElementById("iphone1");
const iphone2 = document.getElementById("iphone2");
const DISPLAY_OFF1 = document.getElementById("display-off1");
const DISPLAY_OFF2 = document.getElementById("display-off2");
const PORTFOLIO = document.querySelector('.portfolio__container');
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
  displayOff1 ? DISPLAY_OFF1.style.display = "block" : DISPLAY_OFF1.style.display = "none";
});

iphone2.addEventListener('click', (e) => {
  displayOff2 = !displayOff2;
  displayOff2 ? DISPLAY_OFF2.style.display = "block" : DISPLAY_OFF2.style.display = "none";
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
  DISPLAY_OFF1.style.display = "none";
    displayOff1 = false;
    DISPLAY_OFF2.style.display = "none";
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

PORTFOLIO_TAGS.addEventListener('click', (event => {
  PORTFOLIO_TAGS.querySelectorAll('.tag').forEach(el => el.classList.remove('tag_selected'));
  if(event.target.id != "portfolio-tags"){
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
}))

PORTFOLIO.addEventListener('click', (event =>{
PORTFOLIO.querySelectorAll('.portfolio__image').forEach(el => el.classList.remove('portfolio__image-bordered'))
if(event.target.id != "portfolio-images")
event.target.parentNode.classList.add('portfolio__image-bordered');
}))

//Contact-us

SUBMIT.addEventListener('click', (event =>{
  const SUBJECT = document.getElementById('subject').value;
  const PROJECT = document.getElementById('project').value;
  const NAME = document.getElementById('name').value;
  const EMAIL = document.getElementById('email').value;
  const VALID_NAME = /^[a-zA-Z]+[a-zA-Z0-9]+/.test(NAME);
  const VALID_EMAIL = /.+@[a-zA-Z1-9]+\.+[a-z]/.test(EMAIL);

  if(VALID_NAME == true && VALID_EMAIL == true){
    if(SUBJECT != "") document.getElementById('subj-text').innerHTML = "Тема: " + SUBJECT;
    if(PROJECT != "") document.getElementById('proj-text').innerHTML = "Описание: " + PROJECT;
    event.preventDefault();
    document.getElementById('message-block').classList.remove('hidden');
  }else{
    if(VALID_NAME == false){
      alert("Enter the NAME field correctly (NAME must start with a letter)");
      return;
    }
    if(VALID_EMAIL == false) alert("Enter the EMAIL field correctly(Example: web@mail.com)");
    event.preventDefault();
  }
}))

CLOSE_SUBMIT.addEventListener('click',(event => {
  document.getElementById('message-block').classList.add('hidden');
}))