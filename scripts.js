// Soy Dalto - Curso de JAVASCRIPT desde CERO (Completo) - Nivel Mid MID LEVEL. Capitulo 9. Creando soluciones en la historia de Cofla. Solucion 1



// Cofla reprobó dos materias, así que tiene que enviar un formulario para poder registrarse en las mesas de examen para poder intentar aprobar las materias.
// El formulario debe contener, nombre, email, y materia adeudada.
// Validar emails y nombres.
// Enviar al servidor de manera pulida.



{
	let nombreComprobado, correoComprobado, materiasComprobadas = [], datosDelUsuarioParaEnviarAlServidor = {}

	document.getElementById("buttonEnviarFormulario").addEventListener("click", ()=> 
	{
		revisarFormulario()
		enviarDatosAlServidor()
	})

	function revisarFormulario()
	{
		// Comprobamos que los datos que ingreso el usuario son correctos y cumplen con las condiciones especificadas
		if(document.getElementById("inputTextoNombre").value == "")
		{
			nombreComprobado = undefined
			document.getElementById("spanCampoRequeridoNombre").removeAttribute("hidden")
			document.getElementById("spanCampoRequeridoNombre").textContent = "Rellene este campo."
		}
		else
		{
			nombreComprobado = document.getElementById("inputTextoNombre").value.trim()
			document.getElementById("spanCampoRequeridoNombre").setAttribute("hidden", "true")
		}
		
		if(document.getElementById("inputEmailCorreoElectronico").value == "")
		{
			correoComprobado = undefined
			document.getElementById("spanCampoRequeridoCorreo").removeAttribute("hidden")
			document.getElementById("spanCampoRequeridoCorreo").textContent = `Rellene este campo.`
		}
		else if(document.getElementById("inputEmailCorreoElectronico").value.includes("@") == false)
		{
			correoComprobado = undefined
			document.getElementById("spanCampoRequeridoCorreo").removeAttribute("hidden")
			document.getElementById("spanCampoRequeridoCorreo").textContent = `Incluye una '@' en la dirección de correo electronico. A '${document.getElementById("inputEmailCorreoElectronico").value.trim()}' le falta una '@'.`
		}
		else if(document.getElementById("inputEmailCorreoElectronico").value.endsWith(".com") == false)
		{
			correoComprobado = undefined
			document.getElementById("spanCampoRequeridoCorreo").removeAttribute("hidden")
			document.getElementById("spanCampoRequeridoCorreo").textContent = `El correo debe contener el texto al final ".com"`
		}
		else
		{
			correoComprobado = document.getElementById("inputEmailCorreoElectronico").value.trim()
			document.getElementById("spanCampoRequeridoCorreo").setAttribute("hidden", "true")	
		}
		
		if(document.getElementById("inputCheckboxMateriaMatematica").checked || document.getElementById("inputCheckboxMateriaProgramacion").checked || document.getElementById("inputCheckboxMateriaRedesDeComputadoras").checked || document.getElementById("inputCheckboxMateriaIngenieriaDeSoftware").checked || document.getElementById("inputCheckboxMateriaBaseDeDatos").checked)
		{
			document.getElementById("parrafoCampoRequeridoMaterias").setAttribute("hidden", "true")
			
			if(document.getElementById("inputCheckboxMateriaMatematica").checked)
			{
				if(materiasComprobadas.includes(document.getElementById("inputCheckboxMateriaMatematica").name) == false)
				{
					materiasComprobadas.push(document.getElementById("inputCheckboxMateriaMatematica").name)
				}
			}
			
			if(document.getElementById("inputCheckboxMateriaProgramacion").checked)
			{
				if(materiasComprobadas.includes(document.getElementById("inputCheckboxMateriaProgramacion").name) == false)
				{
					materiasComprobadas.push(document.getElementById("inputCheckboxMateriaProgramacion").name)
				}
			}
			
			if(document.getElementById("inputCheckboxMateriaRedesDeComputadoras").checked)
			{
				if(materiasComprobadas.includes(document.getElementById("inputCheckboxMateriaRedesDeComputadoras").name) == false)
				{
					materiasComprobadas.push(document.getElementById("inputCheckboxMateriaRedesDeComputadoras").name)
				}
			}
			
			if(document.getElementById("inputCheckboxMateriaIngenieriaDeSoftware").checked)
			{
				if(materiasComprobadas.includes(document.getElementById("inputCheckboxMateriaIngenieriaDeSoftware").name) == false)
				{
					materiasComprobadas.push(document.getElementById("inputCheckboxMateriaIngenieriaDeSoftware").name)
				}
			}
			
			if(document.getElementById("inputCheckboxMateriaBaseDeDatos").checked){
				if(materiasComprobadas.includes(document.getElementById("inputCheckboxMateriaBaseDeDatos").name) == false)
				{
					materiasComprobadas.push(document.getElementById("inputCheckboxMateriaBaseDeDatos").name)
				}
			}
		}
		else
		{
			materiasComprobadas = []
			document.getElementById("parrafoCampoRequeridoMaterias").removeAttribute("hidden")
			document.getElementById("parrafoCampoRequeridoMaterias").innerHTML = "Marque por lo menos una casilla para continuar."
		}
	}

	function enviarDatosAlServidor()
	{
		// Una vez que todas las condiciones anteriores se cumplieron, metamos los datos que ingresó el usuario al servidor a traves de un objeto usuario.
		if(nombreComprobado !== undefined && correoComprobado !== undefined && materiasComprobadas.length !== 0)
		{
			datosDelUsuarioParaEnviarAlServidor = 
			{
				nombreCompleto: nombreComprobado,
				correoElectronico: correoComprobado,
				materias: materiasComprobadas,
			}
			
			console.log(datosDelUsuarioParaEnviarAlServidor)
			console.log(datosDelUsuarioParaEnviarAlServidor.nombreCompleto)
			console.log(datosDelUsuarioParaEnviarAlServidor.correoElectronico)
			console.log(datosDelUsuarioParaEnviarAlServidor.materias)
			
			document.getElementById("mensajeDeFormularioEnviado").removeAttribute("hidden")
		}
		else
		{
			document.getElementById("mensajeDeFormularioEnviado").setAttribute("hidden", "true")
		}		
	}
}