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


// Ejercicio 2

class celulares{
	constructor(color, peso, rdp, rdc, ram){
		this.color = color;
		this.peso = peso;
		this.resolucionPantalla = rdp;
		this.resolucionCamara = rdc;
		this.memoriaRam = ram;
		this.encedido = false;
	}
	botonEncendido(){
		if (this.encedido == false) {
			alert("Celular prendido");
			this.encedido = true;
		} else {
			alert("Celular apagado");
			this.encedido = false;
		}
	}
	reiniciar(){
		if (this.encedido == true) {
			alert("Reiniciando celular");
		} else {
			alert("El celular ya esta apagado");
		}
	}
	tomarFoto(){
		alert(`Foto tomada con la resolucion de: ${this.resolucionCamara}`);
	}
	grabarVideo(){
		alert(`Grabando video en resolucion ${this.resolucionCamara}`);
	}
	info(){
		return `
			Color: <b>${this.color}</b><br>
			Peso: <b>${this.peso}</b><br>
			Tamaño: <b>${this.resolucionPantalla}</b><br>
			Resolucion de camara: <b>${this.resolucionCamara}</b><br>
			Memoria RAM: <b>${this.memoriaRam}</b><br>
		`;
	}
}

class celularesAltaGama{
	constructor(color, peso, rdp, rdc, ram)
}

motorola = new celulares("Negro", "150g", "5'", "Full HD", "2GB");
samsung = new celulares("Blanco", "155g", "5.4", "HD", "3GB");
iphone = new celulares("Gris", "140g", "5.9", "Full HD", "4GB");

// document.write(`
// 	${motorola.info()} <br>
// 	${samsung.info()} <br>
// 	${iphone.info()} <br>
// 	`);	