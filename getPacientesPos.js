function mostrarPacientes() {
	fetch('http://localhost:3000/pacientes')
		.then((response) => response.json())
		.then((Pacientes) => {
			console.log(Pacientes);
			let tablaPaciente = document.querySelector('#lista-pacientes tbody');
			for (const itemPaciente of Pacientes) {
				let tr = "<tr> <td>" + itemPaciente.IdPaciente + "</td><td>" + itemPaciente.Nombre + "</td>" + "</td><td>" + itemPaciente.Genero+ "</td>" + "</td><td>" + itemPaciente.Edad+ "</td><td> </tr>";
				tablaPaciente.innerHTML += tr;
			}
		})
}
mostrarPacientes();