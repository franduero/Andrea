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

  quitar1.style.display = "none"
  fondoo.style.display= 'none'

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