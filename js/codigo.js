for (let i = 0; i < 10; i++) {
	// document.write(i + `<br>`)
}

let array1 = ["Denilson", "Andres", "Meliza", "Juan"];
let array2 = ["Prescott", "Medina", "Paba", array1];


for (let array in array2) {
	if(array == 3) {
		for(let array of array1) {
			// document.write(array + `<br>`);
		}
	}else{
		// document.write(array2[array] + `<br>`);
	}
}

function saludar(){
	respuesta = prompt("Hola! Como estas?");
	if (respuesta == "bien") {
		alert("Me alegra mucho");
	}else{
		alert("Lo siento :(");
	}
}

// saludar();

// function suma(num1, num2){
// 	let result = num1 + num2;
// 	document.write(result);
// }

// Funcion flecha
const suma =(num1, num2)=>{
	let result = num1 + num2;
	document.write(result);	
}

// suma(14, 26);

//Relacion a objectos

class animal {
	constructor(especie, edad, color) {
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.info = `Soy ${this.especie}, tengo ${this.edad} años
							y soy de color ${this.color}`;
	}
	verInfo(){
		document.write(this.info + `<br>`);
	}
}

//Herencias
class dog extends animal{
	constructor(especie, edad, color, raza){
		super(especie, edad, color);
		this.raza = raza;
	}
	//Metodo static
	static ladrar(){
		alert("¡WAW!");
	}
	//Getters y Setters
	set setRaza(newName){
		this.raza = newName;
	}

	get getRaza(){
		return this.raza;
	}
}

const gato = new animal("Gato", 4, "Gris");
const perro = new dog("Perro", 3, "Negro", "Pincher");
const ave = new animal("Ave", 5, "Blanco");

perro.setRaza = "Cocker";
// document.write(perro.getRaza);
// gato.verInfo();
// perro.ladrar();
// ave.verInfo();

// Metodos de cadenas
let cadena = "primera cadena prueba prueba prueba";
let cadena2 = "segunda cadena ";
let cadena3 = "   primera   ";
let cadena4 = "prueba";
let cadena5 = "ABCDEFGHIJKLMNÑOPQRSUVXYZ";
let numero = "123456789";
//concat
// resultado = cadena.concat(cadena2);
//startsWith
// resultado = cadena.startsWith(cadena3);
//endsWith
// resultado = cadena.endsWith(cadena4);
//includes
// resultado = cadena.includes(cadena3);
//indexOf
// resultado = cadena.indexOf(cadena3);
//lastIndexOf
// resultado = cadena.lastIndexOf(cadena4);
//padStart
// resultado = cadena3.padStart(15, "D");
//padEnd
// resultado = cadena3.padEnd(15, "D");
//repeat
// resultado = cadena2.repeat(3);
//split
// resultado = cadena.split(" ");
//substring
// resultado = cadena5.substring(0, 30);
//toLowerCase
// resultado = cadena5.toLowerCase();
//toUpperCase
// resultado = cadena.toUpperCase();
//toString
// resultado = numero.toString();
//trim
// resultado = cadena3.trim();
//trimStart
// resultado = cadena3.trimStart();
//trimEnd
// resultado = cadena3.trimEnd();
// document.write(resultado);
// document.write(resultado.length);
// document.write(resultado + 33);

//Metodos de Array
//------------------------Transformadores-------------------------------------
//pop()
const miArray = ["Andres", "Denilson", "Meliza", "Juan"];
const miNumeros = [2,4,6,7,1,3,9,8,5];
// document.write(`Array original: <b>${miArray}</b><br>`);
// let total = miArray.pop();
// document.write(`Elemento removido: <b style="color: red">${total}</b><br>`);
// document.write(`Resultado: <b>${miArray}</b>`);
//shift()
// document.write(`Array original: <b>${miArray}</b><br>`);
// let total = miArray.shift();
// document.write(`Elemento removido: <b style="color: red">${total}</b><br>`);
// document.write(`Resultado: <b>${miArray}</b>`);
//push()
// document.write(`Array original: <b>${miArray}</b><br>`);
// let total = miArray.push("Yesmin");
// document.write(`Elemento Agregado: <b style="color: green">${total}</b><br>`);
// document.write(`Resultado: <b>${miArray}</b>`);
//reverse()
// document.write(`Array original: <b>${miArray}</b><br>`);
// let total = miArray.reverse();
// document.write(`Orden de elementos: <b style="color: blue">${total}</b><br>`);
//unshift()
// document.write(`Array original: <b>${miArray}</b><br>`);
// let total = miArray.unshift("Guissep");
// document.write(`Elemento agregado: <b style="color: green">${total}</b><br>`);
// document.write(`Resultado: <b>${miArray}</b>`);
//sort()
// document.write(`Array original: <b>${miNumeros}</b><br>`);
// let total = miNumeros.sort();
// document.write(`Ordenando elementos: <b style="color: blue">${total}</b><br>`);
//splice()
//---------------Eleminado elementos--------------------
// document.write(`Array original: <b>${miArray}</b><br>`);
// let total = miArray.splice(1,2);
// document.write(`Elemento removido: <b style="color: red">${total}</b><br>`);
// document.write(`Resultado: <b>${miArray}</b><br>`);
//---------------Agregando elementos---------------------
// let agregar = miArray.splice(0, 0, "Maria", "Anyely");
// document.write(`Elemento agregado: <b style="color: green">${agregar}</b><br>`);
// document.write(`Resultado: <b>${miArray}</b><br>`);

//------------------------Accesores-------------------------------------
//join()
// document.write(`${miArray} <br>`);
// let total = miArray.join(" / ");
// document.write(`Convirtiendo en una cadena de texto: <b>${total}</b>`);
//slice()
// document.write(`Mi arrray original: <b>${miArray}</b><br>`);
// let total = miArray.slice(0, -1);
// document.write(`Mostrando elementos: <b>${total}</b>`);

//------------------------De Repetición-------------------------------------
//filter() - Blucles de un array y su parametro sera una funcion
// miArray.filter(array => {
// 	document.write(`${array} <br>`);
// });
//---------------------filter con condicionales------------------------
// total = miArray.filter(array => array.length > 4);
// document.write(`${total}<br>`);
//forEach() - Bucle de un array muy similar a filter 
//  miArray.forEach(array => {
// 	document.write(`${array} <br>`);
// });

//Objecto Math - Básico
//------------------------Metodos------------------------------------------
//sqrt()
// numeros = Math.sqrt(25);
// console.log(numeros);
//cbrt()
// numeros = Math.cbrt(25);
// console.log(numeros);
//max()
// numeros = Math.max(25, 34, 56, 1, 567 ,322, 3092);
// console.log(numeros);
//min()
// numeros = Math.min(25, 34, 56, 1, 567 ,322, 3092);
// console.log(numeros);
//random()
// numeros = Math.random() * 100;
// numeros = numeros.toString();
// num = numeros[0] + numeros[1];
// if (numeros[1] == ".") {
// 	num = numeros[0];
// }
// console.log(num);
//round()
// let numeros = Math.random() * 100;
// numeros = Math.round(numeros);
// document.write(numeros);
//floor()
// numeros = Math.floor(4.657);
// document.write(numeros);
// for (let i = 0; i < 100; i++) {
// 	let numeros = Math.random() * 99;
// 	numeros = Math.floor(numeros + 1);
// 	document.write(numeros + "<br>");
// }
//fround()
// numeros = Math.fround(4.9999999999);
// document.write(numeros);
//trunc()
// numeros = Math.trunc(4.957);
// document.write(numeros);

//---------------------------Propiedades-----------------------------------
//PI
// let numeros = Math.PI;
// document.write(numeros);
//SQRT1_2
// let numeros = Math.SQRT1_2;
// document.write(numeros);
//SQRT2
// let numeros = Math.SQRT2;
// document.write(numeros);
//E
// let numeros = Math.E;
// document.write(numeros);
//LN2
// let numeros = Math.LN2;
// document.write(numeros);
//LN10
// let numeros = Math.LN10;
// document.write(numeros);
//LOG2E
// let numeros = Math.LOG2E;
// document.write(numeros);
//LOG10E
// let numeros = Math.LOG10E;
// document.write(numeros);

//Ejercicio 3
