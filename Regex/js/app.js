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
    alertaNombre.classList.add("hidden")
    alertaCorreo.classList.add("hidden")
    //RegEx
    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}$/;
    
    if(!regexNombre.test(campoNombre.value ) || !campoNombre.value.trim()){
        alertaNombre.classList.remove("hidden")
        alertaNombre.textContent="Ingresa un nombre valido ⚠"
        console.log("Ingresa un nombre valido")
        return
    }
    if(!regexCorreo.test(campoCorreo.value) || !campoCorreo.value.trim()){
        alertaCorreo.classList.remove("hidden")
        alertaCorreo.textContent="Ingresa un correo valido ⚠"
        console.log("Ingresa un correo valido")
        return
    }
    msjeEnviado()

})
let msjeEnviado = ()=>{
    alertaEnviado.classList.remove("hidden")
    alertaEnviado.textContent="Enviado ✅"
    console.log("Enviado")
}