// Ejercico

class celulares {
	constructor(color, peso, rdp, rdc, ram){
		this.color = color;
		this.peso = peso;
		this.resolucionPantalla = rdp;
		this.resolucionCamara = rdc;
		this.memoriaRam = ram;
		this.encendido = false;
	}

	//Metodos
	botonEncender(){
		if (this.encendido == false) {
			alert("Celular prendido");
			this.encendido = true;
		}else{
			alert("Celular apagado");
			this.encendido = false;
		}
	}
	reiniciar(){
		if (this.encendido == true) {
			alert("Reiniciando celular");
		} else {
			alert("El celular esta apagado");
		}
	}
	tomarFotos(){
		alert(`Foto tomada con la resolucion de: ${this.resolucionCamara}`);
	}
	grabarVideo(){
		alert(`Grabando video en resolucion ${this.resolucionCamara}`);
	}
	mostrarInfo(){
		return `
			Color: <b>${this.color}</b><br>
			Peso: <b>${this.peso}</b><br>
			Tamaño: <b>${this.resolucionPantalla}</b><br>
			Resolucion de camara: <b>${this.resolucionCamara}</b><br>
			Memoria RAM: <b>${this.memoriaRam}</b><br>
		`;
	}
}

motorola = new celulares("Negro", "150g", "5'", "Full HD", "2GB");
samsung = new celulares("Blanco", "155g", "5.4", "HD", "3GB");
iphone = new celulares("Gris", "140g", "5.9", "Full HD", "4GB");

// motorola.botonEncender();
// motorola.tomarFotos();
// motorola.grabarVideo();
// motorola.reiniciar();
// motorola.botonEncender();

document.write(`
	${motorola.mostrarInfo()} <br>
	${samsung.mostrarInfo()} <br>
	${iphone.mostrarInfo()} <br>
	`);			