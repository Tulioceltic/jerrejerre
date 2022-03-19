var matriz=[]
let button = document.querySelector(".send");
button.disabled = true;

function limpiarMatriz(){
  for (let i = matriz.length; i > 0; i--) {
    matriz.pop();
  }
}

function mostrarDatos1(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET','../Back/mostrar1.php'); 
  xhr.onload = function (){
	if(xhr.status == 200){
		var json= JSON.parse(xhr.responseText);
		console.log(json)
		var template =``;
		json.map(function(data){
			aux=0;
			template += `
			<tr>
			<td>${data.Nombre}</td>
			<td>${data.Apellido}</td>
			<td>${data.Codigo}</td>
			</tr>	
			`
		});
		console.log(template)
		document.getElementById('tabla1').innerHTML=template;
	}else{
		console.log("EXISTE UN ERROR DE TIPO:"+xhr.status)
	}
}
xhr.send();

}


function mostrarDatos1(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET','../Back/mostrar2.php'); 
  xhr.onload = function (){
	if(xhr.status == 200){
		var json= JSON.parse(xhr.responseText);
		console.log(json)
		var template =``;
		json.map(function(data){
			aux=0;
			template += `
			<tr>
			<td>${data.Nombre}</td>
			<td>${data.Apellido}</td>
			<td>${data.Codigo}</td>
			</tr>	
			`
		});
		console.log(template)
		document.getElementById('tabla2').innerHTML=template;
	}else{
		console.log("EXISTE UN ERROR DE TIPO:"+xhr.status)
	}
}
xhr.send();

}



function mostrarDatos1(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET','../Back/mostrar3.php'); 
  xhr.onload = function (){
	if(xhr.status == 200){
		var json= JSON.parse(xhr.responseText);
		console.log(json)
		var template =``;
		json.map(function(data){
			aux=0;
			template += `
			<tr>
			<td>${data.Nombre}</td>
			<td>${data.Apellido}</td>
			<td>${data.Codigo}</td>
			</tr>	
			`
		});
		console.log(template)
		document.getElementById('tabla3').innerHTML=template;
	}else{
		console.log("EXISTE UN ERROR DE TIPO:"+xhr.status)
	}
}
xhr.send();

}



function enviar(){
  button.disabled = false;
  for(var i of matriz){
    var registro={Correo:i[0],Nombre:i[1],Apellido:i[2],Codigo:i[3]}
    console.log(registro)
    fetch('../Back/datos.php',{
      method: 'POST',
      body: registro
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      alert(data);
    })
  }	
  limpiarMatriz()
  mostarDatos1()
  mostarDatos2()
  mostarDatos3()
}

function controlBoton(val){
  button.disabled = true;
  if (val==true)
  {
    button.disabled = false;
  }
}

function validar(){
  var auxiliar=true;
  for(var i of matriz){
    if(i[3]!="1" && i[3]!="2" && i[3]!="3"){
     auxiliar=false;
     break; 
    }
   }
  if(auxiliar==true){
    document.getElementById('mensajes').textContent = "Archivo valido";
    return true;
  }
  else{
    document.getElementById('mensajes').textContent = "Archivo invalido";
    limpiarMatriz()
    return false;
  }
}

function transformar(datos){
  registros=datos.split('\n')
  for(var i of registros){
    matriz.push(i.split(','))
  }
  controlBoton(validar());
}


document.getElementById('entrada').addEventListener('change', function() {
  var file = new FileReader();
  file.onload = () => {
    transformar(file.result);
    //document.getElementById('output').textContent = file.result;
  }
  file.readAsText(this.files[0]);
});