function llenarSelect(){
	var miSelect,aTag,valor;

	for (var i = 1; i <= 100; i++) {
		
		miSelect= document.getElementById("numTabla");
		aTag=document.createElement('option');
		aTag.setAttribute('value',i);
		aTag.innerHTML="Tabla Número - "+i;
		miSelect.appendChild(aTag);	
	}
	
}
function mensaje(valor){
	// alert(valor);
	document.getElementById("boton").value="Generar tabla del: "+valor;
}
function llenarSelect2(){
	var Select2,i,aTag;
	i=1;
	
	while(i <= 100){
		Select2=document.getElementById("cantF");
		aTag=document.createElement('option');
		aTag.setAttribute('value',i);
		aTag.innerHTML="Cantidad de Filas - "+i;
		Select2.appendChild(aTag);
		i++;
	}
}

function crear_filas(){
	borrar_tabla();
	var tabla,table,filas,i;

	// var tabla= document.getElementById("numTabla").value;
	var tabla = $("#numTabla").val();
	var filas = $("#cantF").val();
	// var filas= document.getElementById("cantF").value;
	// var table = $("#tabla").val();
	var table= document.getElementById("tabla");



	for (var i = filas; i >= 1;  i--) {
		var row = table.insertRow(0);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		var cell5 = row.insertCell(4);
		
		cell1.innerHTML = i;
		cell2.innerHTML = "x";
		cell3.innerHTML = tabla;
		cell4.innerHTML = "=";
		cell5.innerHTML = i * tabla;	

	}

	$("#capa").hide();
	$("#capa").fadeIn("slow");

	$("#boton").hide("slow");
	$("#boton2").fadeIn("slow");


	document.getElementById("").value ="";
	document.getElementById("").value ="";
	document.getElementById("").focus();
}
function borrar_tabla(){
	var rows = document.getElementById("tabla").rows.length;

	for (var i = rows - 1; i >= 0; i--) {
		document.getElementById("tabla").deleteRow(i);
	}
}
function reiniciar(){
	$("#boton2").hide("slow");
	$("#boton").fadeIn("slow");

	$("#capa").fadeOut("slow");
		
}
