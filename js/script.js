let currentSlide = 1;
showSlides(currentSlide);

function currentLink(elem) {
    let tagA = document.getElementsByTagName('a');
    
    for (let i = 0; i < tagA.length; i++) {
        tagA[i].classList.remove('currentPage')
    }
    elem.classList.add('currentPage');
}

function currentPage(x) {
    showSlides(x);
}


function changeSlide(x) {
    showSlides(currentSlide + x);
}

function showSlides(x) {
    let slide = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");

    if (x > slide.length) {
        currentSlide = 1;
    }else if (x < 1) {
        currentSlide = slide.length;
    }else {
        currentSlide = x;
    }

    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slide[currentSlide-1].style.display = "inline";
    dots[currentSlide-1].className += " active";
}

function toggleMenu() {
    let menu = document.querySelector(".menu");

    if(menu.style.display === "block") {
        menu.style.display = "none";
      } else {
        menu.style.display = "block";
      }
}

