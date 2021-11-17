var idCodeInput = document.querySelector("#id_code")

// Mantener la consola activada
setInterval(() => {
    idCodeInput.focus();
}, 10);

const scrollAmount = 40 ;



    // Audios
    const audioGlitch = document.querySelector("#denied")

    const audioAccepted = document.querySelector("#accepted")




// Desplazarse con las flechas
document.addEventListener('keydown', function(event) {



    const key = event.key; 
    
    if (key == "ArrowDown") {
        // Encontrar el iframe
        const iframe = document.getElementById("content_iframe");
        
        // Apuntar al contenido del iframe
        const iWindow = iframe.contentWindow;
        iWindow.scrollBy(0,scrollAmount)
    }
    if (key == "ArrowUp") {
        // Encontrar el iframe
        const iframe = document.getElementById("content_iframe");
        
        // Apuntar al contenido del iframe
        const iWindow = iframe.contentWindow;
        iWindow.scrollBy(0,scrollAmount*-1)
    }
    
});


// Encontrar el iframe
const iframe = document.getElementById("content_iframe");

// Mostrar el iframe 
iframe.classList.toggle("height_toggle")


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
    
    // Si es la tecla [Enter] redirigir o mostrar mensaje "incorrecto"
    romper: if (keynum == 13) {
        
        // Encontrar el iframe


        
        // Apuntar al contenido del iframe
        const iWindow = iframe.contentWindow;
        const iDocument = iWindow.document;
        
        // Encontrar la lista de comandos en el contenido del iframe
        const commandsList = iDocument.querySelectorAll("#commands_list li")
        
        const externalLink = iDocument.querySelectorAll(".external_link")

        
        var commandAccepted = false;
        
        // Si está vacio 
        if (idCodeInput.value == null || idCodeInput.value == "") {
            audioGlitch.play()
            idCodeInput.value = "";
            idCodeInput.setAttribute('placeholder', 'Digite un comando')
            setTimeout(function () {
                idCodeInput.setAttribute('placeholder', 'Ingrese un /comando y presione [ENTER]')
            }, 600);
            break romper;
        }
        
        //Ir a home
        if (idCodeInput.value == "home") {
            iframe.classList.toggle("height_toggle")
            
            setTimeout(() => {
                
                iframe.setAttribute("src", "pages/topics_index.html");
                
                iframe.classList.toggle("height_toggle")
            }, 300);
            audioAccepted.play()
            idCodeInput.value = "";
            break romper;
            
        }

        if (idCodeInput.value == "pdf") {

            window.open("pages/propuesta_plan_trabajo_mauricio_hincapie_m.pdf");

            audioAccepted.play()
            idCodeInput.value = "";
            break romper;
            
        }


        
        // Si existe informe_AI y el input = repo se muestra el video
        if (iDocument.querySelector("#report video") && idCodeInput.value == "repo") {
            
            const reportVideo =  iDocument.querySelector("#report video");
            
            if (iDocument.querySelector("#report").className == "hide") {

                iDocument.querySelector("#report").classList.remove("hide")

                document.querySelector(".ai_frame img").classList.toggle("hide")

                document.querySelector(".ai_frame p").classList.toggle("hide")


                audioAccepted.play()
                reportVideo.play()

            }else {

                reportVideo.pause()
                iDocument.querySelector("#report").classList.add("hide")


                document.querySelector(".ai_frame img").classList.toggle("hide")

                document.querySelector(".ai_frame p").classList.toggle("hide")

                audioAccepted.play()

                idCodeInput.value = "";
                
            }
            break romper;
            
        }
        
        else {

            const consoleInput = idCodeInput.value
            
            
            // Para cada uno de los comandos en la lista verificar si coincide con el input en consola
            for (let i = 0; i < commandsList.length; i++) {
                
                
                if (commandsList[i].id == consoleInput) {
                    audioAccepted.play()
                    if (commandsList[i].className == "file_link") {
                        window.open(commandsList[i].innerHTML);
                    } else {
                        iframe.classList.toggle("height_toggle")
                        setTimeout(() => {
                            
                            iframe.setAttribute("src", commandsList[i].innerHTML);
                            
                            iframe.classList.toggle("height_toggle")

                        }, 300);
                        
                    }
                    commandAccepted = true;
                    idCodeInput.value = "";
                } 
                
            }
            
            
            
            
            if (commandAccepted != true) {
                audioGlitch.play()
                idCodeInput.value = "";
                idCodeInput.setAttribute('placeholder', 'Comando incorrecto');
                setTimeout(function () {idCodeInput.setAttribute(
                    'placeholder', 'Ingrese un /comando y presione [ENTER]');
                }, 600);
            }
            
        }
        
    }
}





