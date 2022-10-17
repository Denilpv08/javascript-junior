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