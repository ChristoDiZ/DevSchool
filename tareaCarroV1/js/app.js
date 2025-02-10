let botones = document.querySelectorAll("button")
let template=document.querySelector("#template")
let contenedor=document.querySelector("#contenedor")
let fragment=document.createDocumentFragment()
//almacena informacion
let carro={}
//Funciones
//Crear fruta
let crearProductos = (e)=>{
    //destructurar
    let {fruta,imagen,precio}=e.target.dataset
    //producto
    let producto={
        id:fruta,
        fruta,
        imagen,
        cantidad:1,
        precio
    }
    //agregar fruta al carro
    agregaProducto(producto)
}
//Agregar fruta al carro
let agregaProducto=(producto)=>{
    carro[producto.fruta]=producto
    //mostrar carro
    mostrarCarro()
}
//Mostrar en la web
let mostrarCarro =()=>{
    contenedor.textContent=" "
    //convertir un objeto a una array
    Object.values(carro).forEach((item)=>{
        //crear template
        let clone=template.content.cloneNode(true)
        //modificar su informacion
        clone.querySelector("#fruta").textContent = item.fruta
        clone.querySelector("#precio").textContent = `$${item.precio}CLP`
        clone.querySelector("#cantidad").textContent=item.cantidad
        clone.querySelector("img").src=item.imagen

        //mostar en la web
        fragment.appendChild(clone)
    })
    contenedor.appendChild(fragment)
}
//Asinar evento al array de botones
botones.forEach((item)=>{
    item.addEventListener("click",crearProductos)})

