


var operacion = ' ';
var resultado = ' ';


function numero(calculo) {
		alert("El numero guardado para la operacion es:   "+calculo);
		operacion = operacion + calculo;
		document.getElementById("valores").innerHTML=calculo;
}


function igual() {
		resultado=eval(operacion);
		alert("Eel resultado es:   "+resultado)
	operacionFinal(resultado);
}

function borrar() {
	operacion='';
	resultado='';
	document.getElementById("total").innerHTML="";
	alert("Se han borrado los datos :   ");
}


function insertetesxto(){
	document.getElementById("total").innerHTML=operacion;
}


function operacionFinal(calculo){
	document.getElementById("total").innerHTML=operacion+"="+resultado;
}





















//para validar que solo se acepte numeros

function solonumeros(e){

	key=e.KeyCode || e.which;

	teclado=String.fromCharCode(key);

	numeros="0123456789";

	/*especiales="8-37-39-46";*/
	especiales="/*-+";



	tecla_especial=false;

	for(var i in especiales){
		if(key==especiales[i]){
			tecla_especial=true;
		}
	}

	if(numeros.indexOf(teclado)==-1 && !tecla_especial && !simbolos){
			
			return false;

	}

}

// asignar cada valor

function retornar(num){
	var anterior=document.fo.valores.value;

	document.getElementById("valores").value=anterior+num;

}
// para eliminar el ultimo caracter

function eliminar(){
	var anterior=document.fo.valores.value;

	var nuevovalor=anterior.substring(0,anterior.length-1);

	documnet.getElementById("valores").value=nuevovalor;
}

//eliminar todo los valores

function eliminar_todo(){
	document.fo.valores.value="";
}
// validar simbolos

function comprobar(num){
	var anterior = document.fo.valores.value;
	if(anterior==""){
		document.fo.valores.value="";
	}
	else{
		var anterior = document.fo.valores.value;
		document.getElementById("valores").value=anterior+num;
		esto=document.fo.valores.value;

		record=0;
		igual=1;
		var b=0
		var letra=""
	
	for (a=1;a<esto.length;a++){
		if (esto.charAt(a)=="+" || esto.charAt(a)=="-" || esto.charAt(a)=="*" ||esto.charAt(a)=="/"){
		igual=igual+1;
		letra=esto.charAt(a);	
		}
		else{
			if(igual>record){record=igual;letraRecord=letra}
			igual=1
		}
		b=a
	}
	if (igual>record) {
		record=igual;
		letraRecord=letra;
	}
	if (record>2) {
		var anterior = esto;
		var nuevovalor = anterior.substring(0, anterior.length-1);
		document.getElementById("valores").value=nuevovalor;
		record=0;b=0;igual=1;letra="";letraRecord="";
	}
}
}
//funcion igual de la operacion
function calcular(){
	var result = eval(document.fo.valores.value);
    document.fo.valores.value = resultado;
}