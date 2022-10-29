for (let i = 0; i < 10; i++) {
	document.write(i + `<br>`);
}
let array1 = ["Denilson", "Andres", "Meliza", "Juan"];
let array2 = ["Prescott", "Medina", "Paba", array1];

for (let array in array2) {
	if(array == 3) {
		for(let array of array1) {
			document.write(array + `<br>`);
		}
	}else{
		document.write(array2[array] + `<br>`);
	}
}

function suma(num1, num2){
	let result = num1 + num2;
	document.write(result);
}

// Funcion flecha
const suma =(num1, num2)=>{
	let result = num1 + num2;
	document.write(result);	
}
suma(14, 26);


//Ejercicio 

let free = false;
const validarEntrada = (time)=>{
	let edad = prompt("¿Que edad tienes?");
	if (edad > 18) {
		if (time >= 2 && time < 7 && free == false) {
			alert("Puedes pasar gratis eres el primero en llegar despues de la 2 AM");
			free = true;
		}else{
			alert(`son las ${time}:00Hs y puedes pasar, pero debes de pagar la entrada`);
		}
	}else {
		alert("No puedes pasar eres menor de edad");
	}
}
validarEntrada(10);
validarEntrada(6);
validarEntrada(2);
validarEntrada(1);
validarEntrada(3);

//Ejercicio 2 

let cantidad = prompt("¿Cuantos alumnos son?");
let alumnosTotales = [];

for(i = 0; i < cantidad; i++){
	alumnosTotales[i] = [prompt(`Nombre del alumno ${(i + 1)}`),0];
}

const tomarAsistencia = (nombre, p) =>{
	let presencia = prompt(nombre);
	if (presencia == "P" || presencia == "p") {
		alumnosTotales[p][1]++;
	}
}

for(i = 0; i < 30; i++){
	for(alumno in alumnosTotales){
		tomarAsistencia(alumnosTotales[alumno][0], alumno);
	}
}

for(alumno in alumnosTotales){
	let resultado = `${alumnosTotales[alumno][0]}:<br>
	__________Presente: <b>${alumnosTotales[alumno][1]}</b> <br>
	__________Ausentes: <b>${30 - alumnosTotales[alumno][1]} </b>`;
	if (30 - alumnosTotales[alumno][1] > 18) {
		resultado += `<b style="color: red">REPROBADO POR INASISTENCIA</b> <br><br>`;
	}else{
		resultado += `<br><br>`;
	}
	document.write(resultado);
}

//Ejercico 3

const suma = (num1, num2) =>{
	return parseInt(num1) + parseInt(num2);
}

const resta = (num1, num2) =>{
	return parseInt(num1) - parseInt(num2);
}

const multiplicacion = (num1, num2) =>{
	return parseInt(num1) * parseInt(num2);
}

const divicion = (num1, num2) =>{
	return parseInt(num1) / parseInt(num2);
}

alert("¿Que operacion desea realizar?");
let operacion = prompt(`1: Suma, 
						2: Resta, 
						3: Multiplicacion, 
						4: Divicion`);

if(operacion == 1){
	let numero1 = prompt("Digite primer numero para la suma");
	let numero2 = prompt("Digite el segundo numero para la suma");
	let resultado = suma(numero1, numero2);
	alert(`El resultado de la suma es: ${resultado}`);
}else if(operacion == 2){
	let numero1 = prompt("Digite primer numero para la resta");
	let numero2 = prompt("Digite el segundo numero para la resta");
	let resultado = resta(numero1, numero2);
	alert(`El resultado de la suma es: ${resultado}`);
}else if(operacion == 3){
	let numero1 = prompt("Digite primer numero para la multiplicacion");
	let numero2 = prompt("Digite el segundo numero para la multiplicacion");
	let resultado = multiplicacion(numero1, numero2);
	alert(`El resultado de la suma es: ${resultado}`);
}else if(operacion == 4){
	let numero1 = prompt("Digite primer numero para la divicion");
	let numero2 = prompt("Digite el segundo numero para la divicion");
	let resultado = divicion(numero1, numero2);
	alert(`El resultado de la suma es: ${resultado}`);
} else{
	alert("Esa operacion no se encuentra");
}