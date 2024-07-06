let avisoTxt, resizeVal1, resizeVal2;
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
            avisoTxt = "No ha ingresado nada.";
        }else{
            avisoTxt = "Solo letras minúsculas y sin acentos";
        }
        
            document.getElementById('sectionConTexto').style.display="none";
            document.getElementById('divMensaje').style.padding=resizeVal2;
            document.getElementById('sectionSinTexto').style.display="flex";
            
            parpadeo();
        
        
    }
}

function copiar(event){
    event.preventDefault();
    const textoACopiar = document.getElementById('textareaMensaje');
    textoACopiar.select();
    document.execCommand('copy');
}

function parpadeo() {
    var aviso = document.getElementById('aviso');
    aviso.classList.add('parpadeando');
    document.getElementById('aviso').innerHTML = `<img src='./images/exclamation.svg' alt='exclamation'></img> ${avisoTxt}`;
    setTimeout(function() {
        aviso.classList.remove('parpadeando');
    }, 1800);
}