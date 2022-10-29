// Metodos de cadenas
let cadena = "primera cadena prueba prueba prueba";
let cadena2 = "segunda cadena ";
let cadena3 = "   primera   ";
let cadena4 = "prueba";
let cadena5 = "ABCDEFGHIJKLMNÑOPQRSUVXYZ";
let numero = "123456789";
//concat
resultado = cadena.concat(cadena2);
//startsWith
resultado = cadena.startsWith(cadena3);
//endsWith
resultado = cadena.endsWith(cadena4);
//includes
resultado = cadena.includes(cadena3);
//indexOf
resultado = cadena.indexOf(cadena3);
//lastIndexOf
resultado = cadena.lastIndexOf(cadena4);
//padStart
resultado = cadena3.padStart(15, "D");
//padEnd
resultado = cadena3.padEnd(15, "D");
//repeat
resultado = cadena2.repeat(3);
//split
resultado = cadena.split(" ");
//substring
resultado = cadena5.substring(0, 30);
//toLowerCase
resultado = cadena5.toLowerCase();
//toUpperCase
resultado = cadena.toUpperCase();
//toString
resultado = numero.toString();
//trim
resultado = cadena3.trim();
//trimStart
resultado = cadena3.trimStart();
//trimEnd
resultado = cadena3.trimEnd();
document.write(resultado);
document.write(resultado.length);
document.write(resultado + 33);

//Metodos de Array
//------------------------Transformadores-------------------------------------
//pop()
const miArray = ["Andres", "Denilson", "Meliza", "Juan"];
const miNumeros = [2,4,6,7,1,3,9,8,5];
document.write(`Array original: <b>${miArray}</b><br>`);
let total = miArray.pop();
document.write(`Elemento removido: <b style="color: red">${total}</b><br>`);
document.write(`Resultado: <b>${miArray}</b>`);
//shift()
document.write(`Array original: <b>${miArray}</b><br>`);
let total = miArray.shift();
document.write(`Elemento removido: <b style="color: red">${total}</b><br>`);
document.write(`Resultado: <b>${miArray}</b>`);
//push()
document.write(`Array original: <b>${miArray}</b><br>`);
let total = miArray.push("Yesmin");
document.write(`Elemento Agregado: <b style="color: green">${total}</b><br>`);
document.write(`Resultado: <b>${miArray}</b>`);
//reverse()
document.write(`Array original: <b>${miArray}</b><br>`);
let total = miArray.reverse();
document.write(`Orden de elementos: <b style="color: blue">${total}</b><br>`);
//unshift()
document.write(`Array original: <b>${miArray}</b><br>`);
let total = miArray.unshift("Guissep");
document.write(`Elemento agregado: <b style="color: green">${total}</b><br>`);
document.write(`Resultado: <b>${miArray}</b>`);
//sort()
document.write(`Array original: <b>${miNumeros}</b><br>`);
let total = miNumeros.sort();
document.write(`Ordenando elementos: <b style="color: blue">${total}</b><br>`);

//---------------Eleminado elementos--------------------
//splice()
document.write(`Array original: <b>${miArray}</b><br>`);
let total = miArray.splice(1,2);
document.write(`Elemento removido: <b style="color: red">${total}</b><br>`);
document.write(`Resultado: <b>${miArray}</b><br>`);

//---------------Agregando elementos---------------------
let agregar = miArray.splice(0, 0, "Maria", "Anyely");
document.write(`Elemento agregado: <b style="color: green">${agregar}</b><br>`);
document.write(`Resultado: <b>${miArray}</b><br>`);

//------------------------Accesores-------------------------------------
//join()
document.write(`${miArray} <br>`);
let total = miArray.join(" / ");
document.write(`Convirtiendo en una cadena de texto: <b>${total}</b>`);
//slice()
document.write(`Mi arrray original: <b>${miArray}</b><br>`);
let total = miArray.slice(0, -1);
document.write(`Mostrando elementos: <b>${total}</b>`);

//------------------------De Repetición-------------------------------------
//filter() - Blucles de un array y su parametro sera una funcion
miArray.filter(array => {
	document.write(`${array} <br>`);
});

//---------------------filter con condicionales------------------------
total = miArray.filter(array => array.length > 4);
document.write(`${total}<br>`);
forEach() - Bucle de un array muy similar a filter 
 miArray.forEach(array => {
	document.write(`${array} <br>`);
});

//Objecto Math - Básico
//------------------------Metodos------------------------------------------
//sqrt()
numeros = Math.sqrt(25);
console.log(numeros);
//cbrt()
numeros = Math.cbrt(25);
console.log(numeros);
//max()
numeros = Math.max(25, 34, 56, 1, 567 ,322, 3092);
console.log(numeros);
//min()
numeros = Math.min(25, 34, 56, 1, 567 ,322, 3092);
console.log(numeros);
//random()
numeros = Math.random() * 100;
numeros = numeros.toString();
num = numeros[0] + numeros[1];
if (numeros[1] == ".") {
	num = numeros[0];
}
console.log(num);
//round()
let numeros = Math.random() * 100;
numeros = Math.round(numeros);
document.write(numeros);
//floor()
numeros = Math.floor(4.657);
document.write(numeros);
for (let i = 0; i < 100; i++) {
	let numeros = Math.random() * 99;
	numeros = Math.floor(numeros + 1);
	document.write(numeros + "<br>");
}
//fround()
numeros = Math.fround(4.9999999999);
document.write(numeros);
//trunc()
numeros = Math.trunc(4.957);
document.write(numeros);

//---------------------------Propiedades-----------------------------------
//PI
let numeros = Math.PI;
document.write(numeros);
//SQRT1_2
let numeros = Math.SQRT1_2;
document.write(numeros);
//SQRT2
let numeros = Math.SQRT2;
document.write(numeros);
//E
let numeros = Math.E;
document.write(numeros);
//LN2
let numeros = Math.LN2;
document.write(numeros);
//LN10
let numeros = Math.LN10;
document.write(numeros);
//LOG2E
let numeros = Math.LOG2E;
document.write(numeros);
//LOG10E
let numeros = Math.LOG10E;
document.write(numeros);

//Ejercicio

class Calculadora{
	constructor(){

	}
	suma(num1, num2){
	return parseInt(num1) + parseInt(num2);
	}

	resta(num1, num2){
	return parseInt(num1) - parseInt(num2);
	}

	multiplicacion(num1, num2){
	return parseInt(num1) * parseInt(num2);
	}

	divicion(num1, num2){
	return parseInt(num1) / parseInt(num2);	
	}

	potencia(num, exp){
		let numero = num;
		for (let i = 1; i < exp; i++) {
			numero = numero * num;
		}
		return numero;
	}

	raizCuadrada(num){
		return Math.sqrt(num);
	}

	raizCubica(num){
		return Math.cbrt(num);
	}	
}
const calculadora = new Calculadora();
alert("¿Que operacion desea realizar?");
let operacion = prompt(`1: Suma, 2: Resta, 3: Multiplicacion, 4: Divicion, 5: Potencia, 6: Raiz Cuadrada 7: Raiz Cúbica`);

if(operacion == 1){
	let numero1 = prompt("Digite primer numero para la suma");
	let numero2 = prompt("Digite el segundo numero para la suma");
	let resultado = calculadora.suma(numero1, numero2);
	alert(`El resultado de la suma es: ${resultado}`);
}else if(operacion == 2){
	let numero1 = prompt("Digite primer numero para la resta");
	let numero2 = prompt("Digite el segundo numero para la resta");
	let resultado = calculadora.resta(numero1, numero2);
	alert(`El resultado de la suma es: ${resultado}`);
}else if(operacion == 3){
	let numero1 = prompt("Digite primer numero para la multiplicacion");
	let numero2 = prompt("Digite el segundo numero para la multiplicacion");
	let resultado = calculadora.multiplicacion(numero1, numero2);
	alert(`El resultado de la suma es: ${resultado}`);
}else if(operacion == 4){
	let numero1 = prompt("Digite primer numero para la divicion");
	let numero2 = prompt("Digite el segundo numero para la divicion");
	let resultado = calculadora.divicion(numero1, numero2);
	alert(`El resultado de la suma es: ${resultado}`);
}else if(operacion == 5){
	let numero1 = prompt("Numero a potenciar");
	let numero2 = prompt("Exponente");
	let resultado = calculadora.potencia(numero1, numero2);
	alert(`El resultado de la potencia es: ${resultado}`);
 }else if(operacion == 6){
	let numero1 = prompt("Conocer la raiz cuadrade de un numero");
	let resultado = calculadora.raizCuadrada(numero1);
	alert(`El resultado de la raiz cuadrada es: ${resultado}`);
}else if(operacion == 7){
	let numero1 = prompt("Conocer la raiz cúbica de un numero");
	let resultado = calculadora.raizCubica(numero1);
	alert(`El resultado de la raiz cúbica es: ${resultado}`);
}else{
	alert("Esa operacion no se encuentra");
}

//Ejercicio 2

const obtenerInformacion = (materia) =>{
	materias = {
		fisica: ["Campo", "Denilson", "Andres", "Maria", "Juan", "Meliza"],
		programacion: ["Carmen", "Denilson", "Andres", "Meliza"],
		matematicas: ["Pinto", "Denilson", "Andres", "Maria", "Juan", "Meliza"],
		deportes: ["Poncho", "Denilson", "Maria", "Juan", "Meliza"]
	}
	if (materias[materia] !== undefined) {
		return [materias[materia], materia, materias];
	}else{
		return materias;
	}
}

const mostrarInformacion = (materia) =>{
	let informacion = obtenerInformacion(materia);
	if (informacion !== false) {
		let profesor = informacion[0][0];
		let alumnos = informacion[0];
		alumnos.shift();
		document.write(`El profesor de <b>${informacion[1]}</b> es: 
					<b style="color: green">${profesor}</b><br>
					Los alumnos son: <b style="color:blue">${alumnos}</b><br><br>`);
	}
}

const cantidadAlumnos = (alumnos) =>{
	let informacion = obtenerInformacion();
	let clasesPresente = [];
	let cantidadTotal = 0;
	for(info in informacion){
		if (informacion[info].includes(alumnos)) {
			cantidadTotal++;
			clasesPresente.push(" " + info);
		}
	}
	return `<b style="color:blue">${alumnos}</b>
	 		está en <b>${cantidadTotal}</b> clases: <b>${clasesPresente}</b><br><br>`;
}

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("matematicas");
mostrarInformacion("deportes");
document.write(cantidadAlumnos(`Denilson`));
document.write(cantidadAlumnos(`Andres`));
document.write(cantidadAlumnos(`Maria`));
document.write(cantidadAlumnos(`Juan`));
document.write(cantidadAlumnos(`Meliza`));

//Ejercicio 3

materias = {
		fisica: ["Campo", "Denilson", "Andres", "Maria", "Juan", "Meliza"],
		programacion: ["Carmen", "Denilson", "Andres", "Meliza"],
		matematicas: ["Pinto", "Denilson", "Andres", "Maria", "Juan", "Meliza"],
		deportes: ["Poncho", "Denilson", "Maria", "Juan", "Meliza"]
	}

const inscribir = (alumno, materia) => {
	personas = materias[materia];
	if (personas.length >= 21) {
		document.write(`Lo siento ${alumno}, las clases de ${materia} ya estan llenas <br><br>`);
	} else {
		personas.push(alumno);
		if(materia == "fisica"){
			materias = {
				fisica: personas,
				programacion: materias['programacion'],
				matematicas: materias['matematicas'],
				deportes: materias['deportes']
			}
		}else if(materia == "programacion"){
			materias = {
				fisica: materias['fisica'],
				programacion: personas,
				matematicas: materias['matematicas'],
				deportes: materias['deportes']
			}
		}else if(materia == "matematicas"){
			materias = {
				fisica: materias['fisica'],
				programacion: materias['programacion'],
				matematicas: personas,
				deportes: materias['deportes']
			}
		}else if(materia == "deportes"){
			materias = {
				fisica: materias['fisica'],
				programacion: materias['programacion'],
				matematicas: materias['matematicas'],
				deportes: personas
			}
		}
		document.write(`¡Felicidades ${alumno}! te has inscrito a ${materia} correctamente <br>`);
	}
}
document.write(materias['fisica'] + "<br>");
inscribir("Yesmin", "fisica");
inscribir("Carlos", "fisica");
inscribir("Miguel", "fisica");
inscribir("Andrea", "fisica");
inscribir("Fernanda", "fisica");
inscribir("Elena", "fisica");
inscribir("Daniel", "fisica");
inscribir("Daniela", "fisica");
inscribir("Ana", "fisica");
inscribir("Pipe", "fisica");
inscribir("Camila", "fisica");
inscribir("Camilo", "fisica");
inscribir("Cofla", "fisica");
inscribir("Wendy", "fisica");
inscribir("Angie", "fisica");
inscribir("Fabian", "fisica");
document.write("<br>" + materias['fisica']);