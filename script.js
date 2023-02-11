document.getElementById('player').addEventListener("mouseover",sumarPuntos);

puntos = 0;
tiempo = 21;
necesarios = 9999;
function sumarPuntos(){
   puntos++;
   document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "  </b>";
   randNum =  Math.round(Math.random()*500);
   randNum2 =  Math.round(Math.random()*500);
   document.getElementById("player").style.marginTop =randNum + "px";
   document.getElementById("player").style.marginLeft =randNum2 + "px";
   if (puntos == 9999) {
      
   	
      
		

   }
}


function restarTiempo() {
	tiempo--;

	
	if (tiempo === 0) {
		alert("ESTE ES TU RECORD");

		
	}
	if (tiempo >= 0) {
		document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: "+tiempo; 

	
	}
}

setInterval(restarTiempo,1000);



function mostrarDatos() {
    let datosUsuario = JSON.parse(localStorage.getItem("data"));
    document.write("nombre:",datosUsuario.name, "\n", "record:",datosUsuario.record); 
	
}


function guardar(){
   
    let name = document.getElementById("nom").value;
    let record = document.getElementById("recd").value;
    

    var fila="<tr><td>"+name+"</td><td>"+record+ "</td><td>";

    var btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("tablita").appendChild(btn);
	let dataUser = { 'name': name, 'record':record};
    localStorage.setItem("data", JSON.stringify(dataUser));
}