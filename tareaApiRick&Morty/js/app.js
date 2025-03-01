let spinner=document.getElementById("spinner")
let contenedorCards=document.getElementById("cards-dinamicas")
let templateCards=document.querySelector("template")
let fragment =document.createDocumentFragment()


let fetchData=async()=>{
    try{
        loading(true)

        let respuesta=await fetch("https://rickandmortyapi.com/api/character")
        let data= await respuesta.json()
        mostrarData(data)
    }catch(error){        
    }finally{
        loading(false)
    }
}
let loading = (estado) => {
    if (estado) {
        spinner?.classList.remove("hidden");
    } else {
        spinner?.classList.add("hidden");
    }
};
let mostrarData=(data)=>{

    data.results.forEach((item) => {
        let clone=templateCards.content.cloneNode(true)
        clone.querySelector(".rounded-t-md").src=item.image
        clone.querySelector(".rounded-t-md").alt=`${item.name}+${item.id}`
        clone.querySelector(".text-xl").textContent=item.name
        clone.querySelector(".text-gray-600").textContent=item.species
        clone.querySelector(`.text-gray-500`).textContent=item.status
              
        fragment.appendChild(clone)
    });
    contenedorCards.appendChild(fragment)  
}

fetchData()

