var idCodeInput = document.querySelector("#id_code")

setInterval(() => {
    idCodeInput.focus();
}, 10);

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
        window.location.href = "inicio.html";
        
    }
    else {
        idCodeInput.value = "";
        idCodeInput.setAttribute('placeholder', 'Presione [ENTER] para continuar')
        setTimeout(function () {
            idCodeInput.setAttribute('placeholder', 'Presione [ENTER] para continuar')
        }, 600);
    }
}