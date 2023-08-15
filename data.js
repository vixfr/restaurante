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

    infoDiv.appendChild(comidaDiv);
});