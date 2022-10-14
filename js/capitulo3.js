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
			Memoria RAM: <b>${this.memoriaRam}</b><br>
			Resolucion de camara: <b>${this.resolucionCamara}</b><br>
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

// Ejercico 2

class celularesAltaGama extends celulares{
	constructor(color, peso, rdp, rdc, ram, rdce){
		super(color, peso, rdp, rdc, ram);
		this.resolucionCamaraExtra = rdce;
	}
	camaraLenta(){
		alert("Estas grabando en camara lenta");
	}
	reconocimientoFacial(){
		alert("Estamos haciendo reconocimiento facial");
	}
	infoAltaGama(){
		return this.info() + `Resolucion de camara extra: <b>${this.resolucionCamaraExtra}</b>`;
	}
}

samsung2 = new celularesAltaGama("Blanco", "155g", "5.4", "4K", "3GB", "HD");
iphone2 = new celularesAltaGama("Gris", "144g", "5.9", "4K", "4GB", "Full HD");

document.write(`
	${samsung2.infoAltaGama()} <br><br>
	${iphone2.infoAltaGama()} <br>
	`);

// Ejercicio 3

class App{
	constructor(descargas, puntuacion, peso){
		this.descargas = descargas;
		this.puntuacion = puntuacion;
		this.peso = peso;
		this.inciar = false;
		this.intalar = false;
	}
	intalacion(){
		if (this.intalar == false) {
			this.intalar = true;
			alert("App instalada correctamente");
		}
	}
	desintalacion(){
		if (this.intalar == true) {
			this.intalar = false;
			alert("App desinstalada correctamente");
		}
	}
	abri(){
		if (this.inciar == false && this.intalar == true) {
			this.inciar = true;
			alert("App abierta");
		}
	}
	cerrar(){
		if (this.inciar == true && this.intalar == true) {
			this.inciar = false;
			alert("App cerrada");
		}
	}
	appInfo(){
		return `
			Descargas: <b>${this.descargas}</b><br>
			Puntuacion: <b>${this.puntuacion}</b><br>
			Peso: <b>${this.peso}</b><br>
		`;
	}
}

app = new App("18.000 Mil", "3 Estrella", "900MB");
app2 = new App("50.000 Mil", "4 Estrella", "1GB");
app3 = new App("20.000 Mil", "3 Estrella", "700MB");
app4 = new App("15.000 Mil", "2 Estrella", "500MB");
app5 = new App("16.000 Mil", "3 Estrella", "800MB");
app6 = new App("100.000 Mil", "5 Estrella", "1.5GB");
app7 = new App("150.000 Mil", "5 Estrella", "2GB");

document.write(`
	${app.appInfo()} <br>
	${app2.appInfo()} <br>
	${app3.appInfo()} <br>
	${app4.appInfo()} <br>
	${app5.appInfo()} <br>
	${app6.appInfo()} <br>
	${app7.appInfo()} <br>
	`);

// app.intalacion();
// app.abri();
// app.cerrar();
// app.desintalacion();