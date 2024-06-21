let numeroSerecto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto)
    {
        let elementoHTML = document.querySelector(elemento);
        elementoHTML.innerHTML= texto;
        return;
    }

function verificarIntento()
    {
        let numeroDeUsuario = parseInt(document.getElementById("numeroUsuario").value);
        if(numeroDeUsuario === numeroSerecto)
            {
                asignarTextoElemento("p", `acertaste, te tomo: ${intentos} ${(intentos ===1) ?"intento" :"intentos" }`);

                document.getElementById("reiniciar").removeAttribute("disabled");
            }
        else 
            {
                if(numeroDeUsuario>numeroSerecto)
                    {
                        asignarTextoElemento("p","el numero es menor");
                    }   
                else
                    {
                        asignarTextoElemento("p","el numero es mayor");
                    }
                intentos++;

                limpiarCaja();
            }
        return;
    }

function generarNumeroSecreto()
    {
        let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

        if(numeroGenerado.length==numeroMaximo)
            {
                asignarTextoElemento("p","Ya e sortearon todos los numeros posibles")
            }
        else
            {

                if(numerosSorteados.includes(numeroGenerado))
                    {
                        return generarNumeroSecreto()
                    }      
                else
                    {
                    numerosSorteados.push(numeroGenerado);
                    return numeroGenerado
                    }
            }    

    }

function limpiarCaja()
    {
        document.querySelector("#numeroUsuario").value=" ";
    }

function reiniciarJuego()
    {
        //Limpiar la caja
        limpiarCaja();
        //Mensaje de inicio
        condicionesIniciales();
        //deshabilitar el boton
        document.querySelector("#reiniciar").setAttribute("disabled",true);
    }
function condicionesIniciales()
    {
        asignarTextoElemento("h1","juego del numero secreto");
        asignarTextoElemento("p", `dame un numero del 1 al ${numeroMaximo}`);
        numeroSerecto = generarNumeroSecreto();
        intentos=1;
    }

condicionesIniciales();