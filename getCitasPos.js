function mostarCitas() {
	fetch('http://localhost:3000/citas')
		.then((response) => response.json())
		.then((Citas) => {
			console.log(Citas);
			let tablaCita = document.querySelector('#lista-citas tbody');
			for (const itemCita of Citas) {
				let tr = "<tr><td>" + itemCita.idCita + "</td><td>" + itemCita.Fecha + "</td>" + "</td><td>" + itemCita.Hora+ "</td>" + "</td><td>" + itemCita.Descripcion+ "</td><td>" + itemCita.Estado+ "</td></tr>";
				tablaCita.innerHTML += tr;
			}
		})
}

mostarCitas();