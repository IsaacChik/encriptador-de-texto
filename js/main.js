document.getElementById('mensajeEscrito__textArea').value="";
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
        document.getElementById('divMensaje').style.padding="2rem";
        document.getElementById('sectionConTexto').style.display="flex";
        document.getElementById('textareaMensaje').value=textoEncriptado;
    }else{
        if(texto === ""){
            document.getElementById('sectionConTexto').style.display="none";
            document.getElementById('divMensaje').style.padding="15.1875rem 2rem";
            document.getElementById('sectionSinTexto').style.display="flex";
        }else{
            alert(`No valido ${texto}`);
        }
        
    }
}

function copiar(event){
    event.preventDefault();
    const textoACopiar = document.getElementById('textareaMensaje');
    textoACopiar.select();
    document.execCommand('copy');
}