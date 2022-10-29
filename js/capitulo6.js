//---------------------------------DOM-----------------------------------------------------
//getElementById()
parrafo = document.getElementById("parrafo");
//getElementsByTagName()
texto = document.getElementsByTagName("p");
//querySelector() - . / #
salu = document.querySelector(".saludar");
app = document.querySelector("#app");
//querySelectorAll() 
salu = document.querySelectorAll(".saludar");
app = document.querySelectorAll("#app");
//setAttribute() - Modificar atributos y agregar atributos
rango = document.querySelector(".rango");
rango.setAttribute("type", "text");
//getAttribute() - Obtiene el valor de un atributo
rango.getAttribute("type");
//removeAttribute() - Eliminar un atributo
rango.removeAttribute("type");
const h1 = document.querySelector(".texto");

//------------------------------------------classList----------------------------------------------
//add() 'Para agregar una clase'
h1.classList.add("grande");
//remove() 'Para eliminar una clase'
h1.classList.remove("grande");
//item() 'Busca la clase por su indice'
let verif = h1.classList.item(1);
//contains() 'Es para verificar si la clase que buscas si está'
let valor = h1.classList.contains("color");
//replace() 'Replaza una clase por otra clase'
let modi = h1.classList.replace("color", "carro");
//toggle() 'Para verificar si esta la clase y si esta la elimina o sino te la agrega'
let agreg = h1.classList.toggle("grande");

//---------------------------------Obtencion y Modificacion de elementos----------------------------
const parra = document.querySelector(".saludo");
//textContent() - Muestra el texto que deseas modificar 'Pero no muestra las modificaciones de HTML'
parra.textContent;
//innerText() - Mustra solamente el texto que esta visible 'No es recomendable usar'
parra.innerText;
//outerText() - Mustra el texto e incluidad las etiquetas que se encuentra en ella 'Esto ya no se usa'
parra.outerText;
//innerHTML() - Mustra todo el contenido del html
parra.innerHTML;
//outerHTML() - Este te mustra todo el codigo de html 
parra.outerHTML;

//---------------------------------Creacion de elementos----------------------------------------------
//createElement() - Creacion de elementos
const container = document.querySelector(".div-3");
const item = document.createElement("LI");
//createTextNode() - Sirve para crear un nodo de texto
const textItem = document.createTextNode("Holaaa!");
//createDocumentFragment() - Nos ayuda agragar elementos sin consumir tanto
const fragment = document.createDocumentFragment();
//appendChild() - Crea un elemento hijo

for (let i = 0; i < 10; i++) {
	const item = document.createElement("LI");
	item.innerHTML = "Holaaaa!";
	fragment.appendChild(item);
}
container.appendChild(fragment);
console.log(container);
//firstChild - Mostrar el primer nodo hijo
const primeHijo = container.firstChild;
//lastChild - Mostrar el ultimo nodo hijo
const ultimoHijo = container.lastChild;
//firstElementChild - Una forma mas eficiente de mostrar el primer elemento
const primerElemento = container.firstElementChild;
//lastElementChild - Muestra el ultimo elemento de una forma más eficiente
const ultimoElemento = container.lastElementChild;
//childNodes - Muestra todos los nodos hijos
const hijos = container.childNodes;
//children - te muestra todos lo elemento de una forma más eficiente
const todos = container.children;
//replaceChild() - Para remplazar un elemento
const parrafo = document.createElement("P").innerHTML = "Parrafo";
const tituloNuevo = document.createElement("H1");
tituloNuevo.innerHTML = "Titulo #2"
const tituloAntiguo = document.querySelector(".titulo");	
container.replaceChild(tituloNuevo, tituloAntiguo);
//removeChild() - Para eliminar un elemento
container.removeChild(tituloAntiguo);
//hasChildNodes() - Para verificar sin el elemento tienes hijos
let respues = container.hasChildNodes();

if (respues) {
	document.write("Si tiene elementos hijos");
} else{
	document.write("No tiene elemento hijos");
}
//parentElement - Muestra el elemento padre de ese nodo de manera más especifica
const padre = tituloAntiguo.parentElement;
//parentNode - Muestra el elemento padre d ese nodo
const padreNodo = tituloAntiguo.parentNode;
//nextSibling - Muestra el elemento hermano siguiente
console.log(tituloAntiguo.nextSibling);
//previousSibling - Muestra el elemento hermano anterior
console.log(tituloAntiguo.previousSibling);
// nextElementSibling - Muestra el elemento hermano siguiente de una forma más eficiente
console.log(tituloAntiguo.nextElementSibling);
// previousElementSibling - Muestra el elemento hermano anterior de una forma eficiente
console.log(tituloAntiguo.previousElementSibling);
//closest()
console.log(container.closest(".container"));
