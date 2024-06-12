
$(document).ready(function(){
    $(".modal").modal();
    $(".parallax").parallax();
    $('.sidenav').sidenav();
});
       




var slideImage = document.getElementById('slideImage');

var images = new Array(
    
    "static/images/backgorund1.jpg",
    "static/images/backgorund2.jpg",
    "static/images/backgorund3.jpg",
    "static/images/room.jpg"
);

var len = images.length;
var i = 0;

function slider() {
    if(i > len-1){
        i = 0;
    }
    slideImage.src = images[i];
    i++;
    setTimeout('slider()', 3000);
}




// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.sidenav');
//     var instances = M.Sidenav.init(elems, options);
//   });

//   $(document).ready(function(){
//     $('.sidenav').sidenav();
//   });

// const navLink = document.getElementById('nav-mobile');
// const mobileBtn = document.getElementById('mobile-menu');
// const mobileclose = document.getElementById('mobile-close');

// mobileBtn.addEventListener('click',()=>{
//     navLink.classList.toggle('showing')
//     mobileclose.classList.toggle('trigger-close');
// })

// mobileclose.addEventListener('click',()=>{
//     navLink.classList.toggle('trigger-close');
// })




