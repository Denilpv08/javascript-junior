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
	ladrar(){
		alert("¡WAW!");
	}
}

let gato = new animal("Gato", 4, "Gris");
let perro = new dog("Perro", 3, "Negro", "Cocker");
let ave = new animal("Ave", 5, "Blanco");

// gato.verInfo();
perro.ladrar();
// ave.verInfo();


