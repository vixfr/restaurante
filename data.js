
fetch('comida.json')
.then(response => response.json())
.then(jsonData => {
    const infoDiv = document.getElementById('info');

    jsonData.forEach(comida => {
        const comidaDiv = document.createElement('div');

        const nombreP = document.createElement('p');
        nombreP.textContent = `Nombre: ${comida.nombre}`;
        comidaDiv.appendChild(nombreP);

        const tipoP = document.createElement('p');
        tipoP.textContent = `Tipo: ${comida.tipo}`;
        comidaDiv.appendChild(tipoP);

        const ingredientesP = document.createElement('p');
        ingredientesP.textContent = `Ingredientes: ${comida.ingredientes.join(', ')}`;
        comidaDiv.appendChild(ingredientesP);

        const caloriasP = document.createElement('p');
        caloriasP.textContent = `Calorías: ${comida.calorias}`;
        comidaDiv.appendChild(caloriasP);

        const imagen = document.createElement('img');
        imagen.src = comida.imagen;
        imagen.alt = comida.nombre;
        imagen.style.width = '300px'; // Ajusta el tamaño de la imagen según tu preferencia
        comidaDiv.appendChild(imagen);

        infoDiv.appendChild(comidaDiv);
    });
})
.catch(error => {
    console.error('Error al cargar el JSON:', error);
});