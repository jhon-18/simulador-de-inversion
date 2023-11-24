
function inversion() {

    //1. ocultar la imagen y mostrar en pantalla en los datos de simulacion
    const preCont = document.querySelector(".pre-simulation");
    const postCont = document.querySelector(".post-simulation") 

    postCont.classList.remove("disabled");
    preCont.classList.add("disabled");

    //2. Capturamos y mostramos los datos que no se calculan 
    const campoNombres = document.getElementById("nombres").value;
    const campoEmail = document.getElementById("email").value;
    const nombresShow = document.getElementById("nombres-show");
    const emailShow = document.getElementById("email-show");


    nombresShow.innerText = campoNombres;
    emailShow.innerText = campoEmail;

    //3. Capturamos los datos de inverision y tiempo, creamos las variables de ganancia y ganancia total

    const inversion = document.getElementById("inversion").value;
    const tiempo = document.getElementById ("tiempo").value;

    const gananciaShow = document.getElementById("ganancia-show");
    const gananciaTotal= document.getElementById("total-show");

    let ganancia = 0;
    let gananciaT =0;


    //4.Validamos o comparamos el tiempo de inversion segun este mostramos la ganacia, el total y los demas datos

    switch (tiempo) {
        case "1":
            ganancia = (inversion *0.8)/100 *12;
            gananciaT = parseInt(inversion) + ganancia ;
            
            break;

        case "2":
            ganancia = (inversion *1.3)/100 * 24;
            gananciaT = parseInt(inversion) + ganancia ;

            break;


        case "3":
            ganancia = (inversion *1.7)/100 *36;
            gananciaT = parseInt(inversion) + ganancia ;

            break;

    }

    gananciaShow.innerText = ganancia;
    gananciaTotal.innerText = gananciaT; 
}

