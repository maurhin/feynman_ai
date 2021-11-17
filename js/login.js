var idCodeInput = document.querySelector("#id_code")

idCodeInput.focus();


// Certificación de código de entrada

function accessApp(e){
    var keynum;

    
    // idCodeInput.value = "/" + idCodeInput.value;
    
    // Encontrar la tecla presionada
    if(window.event) { // IE                  
        keynum = e.keyCode;
    } else if(e.which){ // Netscape/Firefox/Opera                 
        keynum = e.which;
    }
    console.log(keynum)
    // Si es la tecla [Enter] redirigir o mostrar mensaje "incorrecto"
    if (keynum == 13) {
        if (idCodeInput.value == "110591-8") {
            window.location.href = "video.html";
        } else {
            idCodeInput.value = "";
            idCodeInput.setAttribute('placeholder', 'Código incorrecto')
            setTimeout(function () {
                idCodeInput.setAttribute('placeholder', 'Inserte el código y presione [ENTER]')
            }, 600);
        }
    }
}









