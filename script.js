let table = document.getElementsByTagName("tr");
let titulo = document.getElementsByTagName("h1");
let tableRow = document.querySelectorAll("tr");

function dibujar()
{
    let i = 0;

    //Ejecutar funcion cada 2 segundos. 
    setInterval(function dibujarFila() {
        tableRow[i].classList.add("fadeInEffect");


        //Terminar una vez que hayan aparecido todos los meses
        i = i+1;
        if (i == 13)
        {
            i = 1;
        }

    }, 2000);
}

