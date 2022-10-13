//Capitulo 1 Ejercicio
const definirCompra = (n) =>{
	let din = prompt(`Dinero de ${n}`);
	if (din >= 0.6 && din < 1) return (`${n}: helado de agua`)
		// (`El dinero que te sobra es ${(din - 0.6)}`);
	if (din >= 1 && din < 1.6) return (`${n}: helado de crema`) 
		// (`El dinero que te sobra es ${(din - 1)}`);
	if (din >= 1.6 && din < 1.7) return (`${n}: helado de heladix`)
		// (`El dinero que te sobra es ${(din - 1.6)}`);
	if (din >= 1.7 && din < 1.8) return (`${n}: helado de heladovich`)
		// (`El dinero que te sobra es ${(din - 1.7)}`);
	if (din >= 1.8 && din < 2.9) return (`${n}: helado de helardo`) 
		// (`El dinero que te sobra es ${(din - 1.8)}`);
	if (din >= 2.9) return (`${n}: helado de confites o pote de 1/4KG`) 
		// (`El dinero que te sobra es ${(din - 2.9)}`);
	else return (`${n}: No te alcanza para comprar un helado`);
}

console.log(definirCompra("Cofla"));
console.log(definirCompra("Roberto"));
console.log(definirCompra("Pedro"));

// dineroCofla = prompt("¿Cuanto dinero tienes Cofla?");
// dineroRoberto = prompt("¿Cuanto dinero tienes Roberto?");
// dineroPedro = prompt("¿Cuanto dinero tienes Pedro?");
// dineroCofla = parseInt(dineroCofla);

// if (dineroCofla >= 0.6 && dineroCofla < 1) {
// 	alert("Cofla: Comprate el helado de agua");
// 	alert(`El dinero que te sobra es ${(dineroCofla - 0.6)}`);
// }else if (dineroCofla >= 1 && dineroCofla < 1.6) {
// 	alert("Cofla: Comprate el helado de crema");
// 	alert(`El dinero que te sobra es ${(dineroCofla - 1)}`);
// }else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
// 	alert("Cofla: Comprate el helado de heladix");
// 	alert(`El dinero que te sobra es ${(dineroCofla - 1.6)}`);
// }else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
// 	alert("Cofla: Comprate el helado de heladovich");
// 	alert(`El dinero que te sobra es ${(dineroCofla - 1.7)}`);
// }else if(dineroCofla >= 1.8 && dineroCofla < 2.9) {
// 	alert("Cofla: Comprate el helado de helardo");
// 	alert(`El dinero que te sobra es ${(dineroCofla - 1.8)}`);
// }else if(dineroCofla >= 2.9) {
// 	alert("Cofla: Comprate el helado con confites o pote de helado 1/4KG");
// 	alert(`El dinero que te sobra es ${(dineroCofla - 2.9)}`);
// }else{
// 	alert("Lo siento Cofla, no tienes dinero suficinete para comprar un helado");
// }

// if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
// 	alert("Roberto: Comprate el helado de agua");
// }else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
// 	alert("Roberto: Comprate el helado de crema");
// }else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
// 	alert("Roberto: Comprate el helado de heladix");
// }else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
// 	alert("Roberto: Comprate el helado de heladovich");
// }else if(dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
// 	alert("Roberto: Comprate el helado de helardo");
// }else if(dineroRoberto >= 2.9) {
// 	alert("Roberto: Comprate el helado con confites o pote de helado 1/4KG");
// }else{
// 	alert("Lo siento Roberto, no tienes dinero suficinete para comprar un helado");
// }

// if (dineroPedro >= 0.6 && dineroPedro < 1) {
// 	alert("Pedro: Comprate el helado de agua");
// }else if (dineroPedro >= 1 && dineroPedro < 1.6) {
// 	alert("Pedro: Comprate el helado de crema");
// }else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
// 	alert("Pedro: Comprate el helado de heladix");
// }else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
// 	alert("Pedro: Comprate el helado de heladovich");
// }else if(dineroPedro >= 1.8 && dineroPedro < 2.9) {
// 	alert("Pedro: Comprate el helado de helardo");
// }else if(dineroPedro >= 2.9) {
// 	alert("Pedro: Comprate el helado con confites o pote de helado 1/4KG");
// }else{
// 	alert("Lo siento Pedro, no tienes dinero suficinete para comprar un helado");
// }