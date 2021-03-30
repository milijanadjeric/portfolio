const nav = document.querySelector('#nav');
const menu = document.querySelector('#menu');
const menuToggle = document.querySelector('.nav__toggle');
let isMenuOpen = false;


// TOGGLE MENU ACTIVE STATE
menuToggle.addEventListener('click', e => {
  e.preventDefault();
  isMenuOpen = !isMenuOpen;

  // toggle a11y attributes and active class
  menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
  menu.hidden = !isMenuOpen;
  nav.classList.toggle('nav--open');
});


// TRAP TAB INSIDE NAV WHEN OPEN
nav.addEventListener('keydown', e => {
  // abort if menu isn't open or modifier keys are pressed
  if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
    return;
  }

  // listen for tab press and move focus
  // if we're on either end of the navigation
  const menuLinks = menu.querySelectorAll('.nav__link');
  if (e.keyCode === 9) {
    if (e.shiftKey) {
      if (document.activeElement === menuLinks[0]) {
        menuToggle.focus();
        e.preventDefault();
      }
    } else if (document.activeElement === menuToggle) {
      menuLinks[0].focus();
      e.preventDefault();
    }
  }
});




//CONTACT FORM VALIDATION - ONEMOGUCAVANJE SUBMITOVANJA FORME BEZ PRETHODNO POPUNJENIH SVIH TRAZENIH POLJA


function validateForm() {

  let x=document.forms["myForm"]["name"].value;
  let y=document.forms["myForm"]["email"].value;
  let z=document.forms["myForm"]["message"].value;
  let emailID = document.myForm.email.value;
  atpos = emailID.indexOf("@");
  dotpos = emailID.lastIndexOf(".");
  
  

  if (x==null || x=="")
    {
    alert("name must be filled out");
    return false;
    }
    if (y==null || y=="")
    {                                             
    alert("email must be filled out");
    return false;
    }
    if (z==null || z=="")
    {
    alert("message must be filled out");
    return false;
    }

    if (atpos < 1 || ( dotpos - atpos < 2 )) {
      alert("Please enter correct email")
      document.myForm.email.focus() ;
      return false;
   }
      return( true );

    
   
}

  //   + u <form> u contact.html kucamo sledece:    name="myForm" onsubmit="return validateForm()

