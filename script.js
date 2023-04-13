/*var i = 0;

var elemento = document.getElementById('Titulo1');
elemento.addEventListener('click', function () {
  //alert('click en titulo');
  elemento.innerHTML = i;
});

elemento.addEventListener('mouseover', function () {
  i = i + 1;
  console.log(i);
});

var menu = document.getElementById('menu');
var listas = document.getElementsByTagName('li');
console.log(listas);

var list2 = document.querySelectorAll('aside li:nth-child(old)');
console.log(lista2);*/

/*function addLink() {
  console.log('add Link 1');
}*/
// Obtén una referencia al botón y al contenedor de enlaces
/*const botonAgregar = document.getElementById('botonAgregar');
const contenedorEnlaces = document.getElementById('contenedorEnlaces');

// Función para crear y añadir enlaces al contenedor
function agregarEnlace() {
  const nuevoEnlace = document.createElement('a');
  nuevoEnlace.textContent = 'Enlace de ejemplo';
  nuevoEnlace.href = 'https://www.ejemplo.com';
  nuevoEnlace.target = '_blank'; // Hace que el enlace se abra en una nueva pestaña

  const saltoDeLinea = document.createElement('br'); // Para separar los enlaces en diferentes líneas

  contenedorEnlaces.appendChild(nuevoEnlace);
  contenedorEnlaces.appendChild(saltoDeLinea);
}

// Asigna la función agregarEnlace al evento 'click' del botón
botonAgregar.addEventListener('click', agregarEnlace);
*/
function addLink() {
  console.log('add Link 1');
  var link = document.createElement('li');
  link.innerHTML = "<a href='https://google.com'>google</a>";
  var ul = document.querySelector('aside ul');
  ul.appendChild(link);

  var list2 = document.querySelectorAll('aside li');
  for (let li of list2) {
    li.classList.add('desplazar');
  }
  setTimeout(function () {
    for (let li of list2) {
      li.classList.remove('desplazar');
    }
  }, 100);
}

var elemento = document.getElementById('addLink');
elemento.addEventListener('click', function () {
  addLink();
});

elemento.classList.add('new_size');
