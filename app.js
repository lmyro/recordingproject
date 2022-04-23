const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu in portions of page
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const clientMenu = document.querySelector('#client-page');

  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1900) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    clientMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 3500) {
    clientMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

function checkForm(){
    var myform = document.getElementById("formValid");
    return check(myform.elements);
  }
  function check(eles){
    var ele;
    for(var i = 0;i<eles.length;i++){
      ele = eles[i];
      if(ele.nodeName == "SELECT"){
        if(!ele.selectedIndex){
          alert(" Please select province ");
          return false;
        }
      }else if(ele.name){
        if(!ele.checkValidity()){
          ele.focus();
          return false;
        }
      }
    }
    return true;
  }
  var img = document.getElementsByTagName("img");
  var intros = document.getElementsByClassName("intros");
  
  for(var i = 0; i < img.length; i++) {
      (function(i) {
          img[i].onclick = function() {
              reset();
              intros[i].style.display = "block"; 
          }
      })(i);
  }
  

