slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000);
}

showImg(slideIndex);
function side_slide(e){
  showImg(slideIndex +=e);
}

// function showImg(e)
// {
//   var i;
//   const img = document.querySelectorAll("img");
//   if(e>img.length)
//   {
//     slideIndex = 1
//   }

//   if(e<1)
//   {
//     slideIndex = img.length
//   }

//   for(i=0;i<img.length;i++)
//   {
//     img[i].style.display = "none";
//   }

//   img[slideIndex - 1].style.display="block";
// }
////html
{/* <div class="slide left">
      <span onclick="side_slide(-1)" class="fas fa-angle-left"></span>
    </div>
    <div class="slide right">
      <span onclick="side_slide(1)" class="fas fa-angle-right"></span>
    </div>  */}