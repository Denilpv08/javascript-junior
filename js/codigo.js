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
