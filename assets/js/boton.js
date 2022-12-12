document.addEventListener("DOMContentLoaded", () => {


  var button = document.getElementById("move");
  var bottones = document.getElementById('botones')
  var quieto = document.getElementById('noMove');
  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;


  var quitar = document.getElementById('header')
  var quitar1 = document.getElementById('app')
  var quitar2 = document.getElementById('footer')
  var fondoo = document.getElementById('fondo1')

  var countDownDate = new Date("Dec 31, 2022 22:00:00").getTime();

  quitar1.style.display = "none"
  fondoo.style.display= 'none'
  bottones.style.display="none"

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
    bottones.style.display=""
    document.getElementById("demo").style.display='none'
  }
}, 1000);

  button.addEventListener("click", function () {
    var randomX = Math.random() * (screenWidth - 100);
    var randomY = Math.random() * (screenHeight - 90);

    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
    button.className = 'moveer';
    
  });

  quieto.addEventListener('click', function () {
    console.log('dasd')
    bottones.style.display='none'
    quitar1.style.display = ""
    fondoo.style.display= ''
    
    limpiar();
    añadir();

  });
  function limpiar() {
    quitar.classList.remove('fuera');
    quitar1.classList.remove('fuera');
    quitar2.classList.remove('fuera');


  }
  function añadir() {
    quitar1.classList.add('App')
  }


})