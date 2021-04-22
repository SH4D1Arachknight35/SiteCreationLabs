var modal = document.getElementById("myModal");// Get the modal
var btn1 = document.getElementById("myBtn1");// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");
// var span = document.getElementsByClassName("close")[0];// Get the <span> element that closes the modal
btn1.onclick = function() {// When the user clicks on the button, open the modal
  modal.style.display = "block";
}
btn2.onclick = function() {
    modal.style.display = "block";
}
// span.onclick = function() {// When the user clicks on <span> (x), close the modal
//   modal.style.display = "none";
// }
window.onclick = function(event) {// When the user clicks anywhere outside of the modal, close it
  if (event.target == modal) {
    modal.style.display = "none";
    var myScope = document.getElementById('myModal'); 
    var iframes = myScope.getElementsByTagName("iframe");
    if (iframes != null) {
        for (var i = 0; i < iframes.length; i++) {
            iframes[i].src = iframes[i].src; //causes a reload so it stops playing, music, video, etc.
        }
    }
  }
}

var modal2 = document.getElementById("myModal2");// Get the modal
var btn3 = document.getElementById("myBtn3");// Get the button that opens the modal
var span = document.getElementsByClassName("close")[0];// Get the <span> element that closes the modal
btn3.onclick = function() {// When the user clicks on the button, open the modal
  modal2.style.display = "block";
}

span.onclick = function() {// When the user clicks on <span> (x), close the modal
   modal2.style.display = "none";
}
// window.onclick = function(event) {// When the user clicks anywhere outside of the modal, close it
//   if (event.target == modal2) {
//     modal2.style.display = "none";
//   }
// }

var swiper = new Swiper('.swiper-container1', {
  direction: 'horizontal',
  //loop: true,
  slidesPerView: 4,
  spaceBetween: 20,

  breakpoints:{
    1230:{
      slidesPerView: 4,
    },
    600:{
      slidesPerView: 2,
    },
    375:{
      slidesPerView: 1,
    }

  },

  pagination: {
      el: '.swiper-pagination1',
      clickable: true,

  },
  navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
  },
  debugger: true,

});




let select1 = document.querySelector('.select__actors');
let select2 = document.querySelector('.select__creators');

function func(){
  if (select1.classList.contains('select__active') ) {
    select2.onclick = function() {
      select2.classList.add('select__active');
      select1.classList.remove('select__active');
      document.querySelector('.list__actors').classList.add('people_hidden');
      document.querySelector('.list__creators').classList.remove('people_hidden');
    }
  }

  if (select2.classList.contains('select__active') ) {
    select1.onclick = function() {
      select2.classList.remove('select__active');
      select1.classList.add('select__active');
      document.querySelector('.list__actors').classList.remove('people_hidden');
      document.querySelector('.list__creators').classList.add('people_hidden');
    }
  }
}