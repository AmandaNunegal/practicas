

function agregarFila() {

    if (nombre !== "" && apellidos !== "") {
        
        let nombre = document.getElementById("nombre").value.trim();
        let apellidos = document.getElementById("apellidos").value.trim();
        const tabla1 = document.getElementsByClassName("tabla1")[0];

        let fila = document.createElement("tr");
        let columna1 = document.createElement("td");
        let n = document.createTextNode(nombre);
        let columna2 = document.createElement("td");
        let a = document.createTextNode(apellidos);
       
        columna1.appendChild(n);
        columna2.appendChild(a);
        fila.appendChild(columna1);
        fila.appendChild(columna2);
        tabla1.appendChild(fila);

    }
}

document.getElementById("enviar").addEventListener("click", agregarFila);

