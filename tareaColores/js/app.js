let input_color=document.getElementById("inputColor")
let btn=document.getElementById("boton")
let text_hexa=document.getElementById("textoHexa")
let card_color=document.querySelector("#cardColor")

btn.addEventListener('click',()=>{
    text_hexa.textContent=input_color.value;
    card_color.style.backgroundColor=input_color.value;
})