let formulario = document.querySelector("#formulario")
let campoNombre=document.querySelector("#nombre")
let campoCorreo=document.querySelector("#correo")
let alertaNombre=document.querySelector("#alertaNombre")
let alertaCorreo=document.querySelector("#alertaCorreo")
let alertaEnviado=document.querySelector("#alertaEnviado")


formulario.addEventListener("submit",(e)=>{
    e.preventDefault()
    //Reiniciar alertas
    alertaEnviado.classList.add("hidden")   
    //RegEx
    const regexNombre = /^[A-Za-z]+$/

    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}$/;
    
    let errores =[]
    
    if(!regexNombre.test(campoNombre.value ) || !campoNombre.value.trim()){
        errores.push({
            tipo:alertaNombre,
            msg:"Ingresa un nombre valido ⚠",
        })
    }else{
       alertaNombre.classList.add("hidden") 
    }
    if(!regexCorreo.test(campoCorreo.value) || !campoCorreo.value.trim()){
        errores.push({
            tipo:alertaCorreo,
            msg:"Ingresa un correo valido ⚠",
        })
    }else{
      alertaCorreo.classList.add("hidden")   
    }
    
    if(errores.length !== 0){
        mostrarMensajeError(errores)
        return
    }
    msjeEnviado()

})
let msjeEnviado = ()=>{
    alertaEnviado.classList.remove("hidden")
    alertaEnviado.textContent="Enviado ✅"
    console.log("Enviado")
}
let mostrarMensajeError=(errores)=>{
    errores.forEach((item) => {
        item.tipo.classList.remove('hidden')
        item.tipo.textContent=item.msg
    });
}
