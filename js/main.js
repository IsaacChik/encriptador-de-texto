let avisoTxt, resizeVal1, resizeVal2, time, exclamationIcon;
let root = document.documentElement;
document.getElementById('mensajeEscrito__textArea').value = "";

//____________________________ VERIFICAR ANCHO (INICIO) ____________________________
verificarAnchoVentana();
window.addEventListener('resize', verificarAnchoVentana);

function verificarAnchoVentana() {
    var anchoVentana = window.innerWidth;

    if (anchoVentana > 1396) {
        resizeVal1 = '2rem';
        resizeVal2 = '15.1875rem 2rem';
    } else if (anchoVentana <= 1396) {
        resizeVal1 = '2rem';
        resizeVal2 = '2rem';

    }
}
//____________________________ VERIFICAR ANCHO (FIN) ____________________________

//____________________________ FUNCION DoE (INICIO) ____________________________
function encriptarDesencriptar(desEn) {
    if (time) {
        clearTimeout(time);
    }
    const texto = document.getElementById('mensajeEscrito__textArea').value;
    const regex = /^[a-z ñ]+$/;
    if (regex.test(texto)) {
        if (desEn == true) {
            var textoEncriptado = texto
                .replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
        } else if (desEn == false) {
            var textoEncriptado = texto
                .replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
        }



        document.getElementById('sectionSinTexto').style.display = "none";
        document.getElementById('divMensaje').style.padding = resizeVal1;
        document.getElementById('sectionConTexto').style.display = "flex";
        document.getElementById('textareaMensaje').value = textoEncriptado;
    } else {
        if (texto === "") {
            avisoTxt = "Por favor ingrese un texto.";
        } else {
            avisoTxt = "Evita utilizar símbolos o mayúsculas.";
        }

        document.getElementById('sectionConTexto').style.display = "none";
        document.getElementById('divMensaje').style.padding = resizeVal2;
        document.getElementById('sectionSinTexto').style.display = "flex";

        parpadeo();

    }
}
//____________________________ FUNCION DoE (FIN) ____________________________

//____________________________ FUNCION COPIAR (INICIO) ____________________________

function copiar(event) {
    let btnCopiar = document.getElementById('btnCopiar');

    if (time) {
        clearTimeout(time);
        btnCopiar.classList.remove('parpadeandoB');
        avisoTxt = "Copiar";
        btnCopiar.innerHTML = `${avisoTxt}`;
    } else {
        btnCopiar.classList.add('parpadeandoB');
        avisoTxt = "Texto copiado con exito.";


        let imageVerificado;
        if (root.style.getPropertyValue('--color-primario') === '#0c0a03') {
            imageVerificado = 'verificadoB.png';
        } else {
            imageVerificado = 'verificadoW.png';
        }
        btnCopiar.innerHTML = ` ${avisoTxt} <img src='./images/${imageVerificado}' alt='verificado'></img>`;



    }



    event.preventDefault();
    const textoACopiar = document.getElementById('textareaMensaje');
    textoACopiar.select();
    document.execCommand('copy');


    time = setTimeout(function () {
        btnCopiar.classList.remove('parpadeandoB');
        avisoTxt = "Copiar";
        btnCopiar.innerHTML = `${avisoTxt}`;
        time = null;
    }, 1200);
}
//____________________________ FUNCION COPIAR (FIN) ____________________________

//____________________________ FUNCION PARPADEO (INICIO) ____________________________

function parpadeo() {

    var aviso = document.getElementById('aviso');
    aviso.classList.add('parpadeandoM');
    document.getElementById('aviso').innerHTML = `<img src='./images/exclamation.svg' alt='exclamation'></img> ${avisoTxt}`;
    time = setTimeout(function () {
        aviso.classList.remove('parpadeandoM');
        avisoTxt = "Solo letras minúsculas y sin acentos";
        document.getElementById('aviso').innerHTML = `<img src='./images/exclamation.svg' alt='exclamation'></img> ${avisoTxt}`;
        time = null;
    }, 1700);

}

//____________________________ FUNCION PARPADEO (FIN) ____________________________

//____________________________ FUNCION CAMBIAR TEMA (INICIO) ____________________________
function cambiarTema() {

    let imagen = document.getElementById('changeThemeId');

    if (root.style.getPropertyValue('--color-primario') === '#0c0a03') {
        imagen.src = './images/themeB.png';
        root.style.setProperty('--color-primario', '#f3f5fc');
        root.style.setProperty('--color-secundario', '#0A3871');
        root.style.setProperty('--color-terciario', '#495057');
        root.style.setProperty('--color-todobien', '#2CA58D');
        root.style.setProperty('--color-blanco', 'white');
        root.style.setProperty('--color-avisoMST', '#343A40');
        root.style.setProperty('--color-rojo', 'red');
    } else {

        imagen.src = './images/themeW.png';
        root.style.setProperty('--color-primario', '#0c0a03');
        root.style.setProperty('--color-secundario', '#5EA6FF');
        root.style.setProperty('--color-terciario', '#9DBEE5');
        root.style.setProperty('--color-todobien', '#80FFB8');
        root.style.setProperty('--color-blanco', '#0F0707');
        root.style.setProperty('--color-avisoMST', '#cbc5bf');
        root.style.setProperty('--color-rojo', '#FF3366');
    }

}

//____________________________ FUNCION CAMBIAR TEMA (FIN) ____________________________