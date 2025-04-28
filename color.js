let boton = document.getElementsByClassName("boton1")[0];
let cont = 0;
generarCambiosColor();

function generarCambiosColor() {

    switch (cont) {

        case 0:
            cambiarColor("#99158e");
            break;

        case 1:
            cambiarColor("#ab3073");
            break;

        case 2:
            cambiarColor("#be4b59");
            break;  

        case 3:
            cambiarColor("#d0663f");
            break;        

        case 4:
            cambiarColor("#e38125");
            cont = 0;
            break;
            
    }
}

boton.addEventListener("click", generarCambiosColor);

function cambiarColor(colorFondo) {

    let divBoton = document.getElementsByClassName("container")[0];

    boton.style.backgroundColor = colorFondo;
    divBoton.style.backgroundColor = colorFondo;
    
    cont++;
}