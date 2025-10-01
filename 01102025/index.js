fetch("http://universities.hipolabs.com/search?country=Argentina")
.then(response => response.json())
.then(data => {
    console.log(data)

    /**
     * <tr>
            <td>Universidad Caece</td>
            <td>Argentina</td>
            <td><a href="https://www.ucaece.edu.ar/es/">Pagina web caece</a></td>
        </tr>
     */
    const tabla = document.getElementById("universidades")
    for(let indice = 0; indice < data.length;indice++){

        const valorActual = data[indice]
        const tr = document.createElement("tr")

        const celdaNombre = document.createElement("td")
        celdaNombre.innerHTML = valorActual.name
        tr.append(celdaNombre)

        const celdaPais = document.createElement("td")
        celdaPais.innerHTML = valorActual.country
        tr.append(celdaPais)

        const celdaWeb = document.createElement("td")
        celdaWeb.innerHTML = `<a href="${valorActual.web_pages[0]}" target="_blank">Pagina web ${valorActual.name}</a>`
        tr.append(celdaWeb)

        tabla.append(tr)

        //document.writeln(valorActual.name)
    }
})