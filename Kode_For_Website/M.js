var gear1 = document.querySelector(".gear1").style;
   var  gear2 = document.querySelector(".gear2").style;
   var gear3 = document.querySelector(".gear3").style;
window.onscroll= function rotateGear () {
  gear1.transform = "rotate(" + (window.scrollY * 2.5) + "deg)";
  gear2.transform = "rotate(" + (window.scrollY * 2.5) + "deg)";
    gear3.transform = "rotate(-" + (window.scrollY * 2.5) + "deg)";
}