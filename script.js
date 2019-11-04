//Smooth scroll
function smoothScroll() {
    $('.scrollTo').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
        return false;
    });
}

function toggleMenuElements() {
  $('header .menu').toggle();
  $('.navbar-toggler').toggleClass('menu-animation');
  $('body').toggleClass('fixed-body');
}

//Despliega el menú mobile
function mobileMenu() {
  $('.navbar-toggler').click(function(){
    toggleMenuElements();
  });
}

//Cierra el menu en el click del boton en mobile
function closeMenuOnAnchor() {
  if ($(window).width() < 769){
    $('header nav li a').each(function() {
      $(this).click(function(){
        toggleMenuElements();
      });
    });
  }
}

//Funciones que se llaman en el document ready
$(document).ready(function() {
    smoothScroll();
    mobileMenu();
    closeMenuOnAnchor();
    sectionHeight();
});

//Funciones que se llaman en el windows resize
$(window).on('resize', function(){
  closeMenuOnAnchor();
});

//Fija el header en el scroll
// window.onscroll = function() {fixHeaderOnScroll()};
// var header = document.querySelector('header');
// var sticky = header.offsetTop;
//
// function fixHeaderOnScroll() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("stickyHeader");
//   } else {
//     header.classList.remove("stickyHeader");
//   }
// }

// Botones del slider
(function() {
  var sliderBoton = document.querySelectorAll('.slider button');
  var sliderParrafo = document.querySelectorAll('.slider p');

  sliderBoton.forEach(function(boton, index) {
    boton.addEventListener('click', function() {

      var siblings = this.parentNode.children;
      var array = Array.from(siblings);
      array.forEach(function(hermano) {
        hermano.classList.remove('active');
      });

      this.classList.add('active');

      var siblingText = this.parentNode.previousElementSibling.children[2];
      siblingText.innerText = elementosSlider[index].texto;
    })
  });

  var elementosSlider = [
    {
      texto: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      texto: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing'
    }, {
      texto: 'Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      texto: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing'
    },
    {
      texto: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      texto: 'And more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
    }
  ]
})();
