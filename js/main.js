let avisoTxt, resizeVal1, resizeVal2, time;
document.getElementById('mensajeEscrito__textArea').value="";
verificarAnchoVentana();
window.addEventListener('resize', verificarAnchoVentana);
function verificarAnchoVentana() {
    var anchoVentana = window.innerWidth;
    
    if(anchoVentana > 1396){
        resizeVal1 = '2rem';
        resizeVal2 = '15.1875rem 2rem';
    }else if(anchoVentana <= 1396){
        resizeVal1 = '2rem';
        resizeVal2 = '2rem';

    }
}

function encriptarDesencriptar(desEn) {
    if(time){
        clearTimeout(time);
    }
    const texto = document.getElementById('mensajeEscrito__textArea').value;
    const regex = /^[a-z ñ]+$/;
    if(regex.test(texto)){
        if (desEn == true) {
            var textoEncriptado = texto
                .replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
        }else if(desEn == false){
            var textoEncriptado = texto
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i') 
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u')
        ;
        }
        
        

        document.getElementById('sectionSinTexto').style.display="none";
        document.getElementById('divMensaje').style.padding=resizeVal1;
        document.getElementById('sectionConTexto').style.display="flex";
        document.getElementById('textareaMensaje').value=textoEncriptado;
    }else{
        if(texto === ""){
            avisoTxt = "Por favor ingrese un texto.";
        }else{
            avisoTxt = "Evita utilizar símbolos o mayúsculas.";
        }
        
            document.getElementById('sectionConTexto').style.display="none";
            document.getElementById('divMensaje').style.padding=resizeVal2;
            document.getElementById('sectionSinTexto').style.display="flex";
            
            parpadeo();
        
    }
}

function copiar(event){
    if(time){
        clearTimeout(time);
    }

    avisoTxt="Texto copiado con exito.";
    event.preventDefault();
    const textoACopiar = document.getElementById('textareaMensaje');
    textoACopiar.select();
    document.execCommand('copy');

    var aviso = document.getElementById('btnCopiar');
    aviso.classList.add('parpadeandoB');
    let btnCopiar = document.getElementById('btnCopiar');
    btnCopiar.innerHTML = ` ${avisoTxt} <img src='./images/verificado.png' alt='verificado'></img>`;
    btnCopiar.style.backgroundColor="#68ff68";
    btnCopiar.setAttribute("disabled", "true");
    btnCopiar.style.justifyContent="space-between";
    btnCopiar.style.border="1px solid #68ff68";
    time = setTimeout(function() {
        aviso.classList.remove('parpadeandoB');
        avisoTxt = "Copiar";
        btnCopiar.style.backgroundColor="white";
        btnCopiar.style.color="#0A3871";
        btnCopiar.style.justifyContent ="center";
        btnCopiar.style.border="1px solid #0A3871";
    btnCopiar.innerHTML = `${avisoTxt}`;
    btnCopiar.removeAttribute("disabled");
        time = null;
}, 1200);
}

function parpadeo() {
    var aviso = document.getElementById('aviso');
    aviso.classList.add('parpadeandoM');
    document.getElementById('aviso').innerHTML = `<img src='./images/exclamation.svg' alt='exclamation'></img> ${avisoTxt}`;
    time = setTimeout(function() {
        aviso.classList.remove('parpadeandoM');
        avisoTxt = "Solo letras minúsculas y sin acentos";
    document.getElementById('aviso').innerHTML = `<img src='./images/exclamation.svg' alt='exclamation'></img> ${avisoTxt}`;
        time = null;
}, 1700);
    
}