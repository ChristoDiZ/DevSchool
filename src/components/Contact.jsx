let Contact=()=>{
    return(
        <div className="bg-zinc-900 pb-8">
            <h3 className="text-emerald-800 text-6xl py-20 text-center">Contactanos</h3>
            <form action="" className="bg-emerald-800 p-8 text-white w-2xl mx-auto
            rounded-lg ">
                <div className="flex flex-col">
                    <label className="text-xl pb-1" htmlFor="">correo electronico</label>
                    <input className="bg-white text-emerald-900
                    rounded-md px-2 h-8 focus:bg-black" type="text" placeholder="colque su correo electrinico" />
                </div>
                <div className="flex flex-col my-6">
                     <label className="text-xl pb-1" htmlFor="">comentario</label>
                    <textarea className="bg-white text-emerald-800
                    rounded-md px-2 h-24 focus:bg-black"  name="" id="" placeholder="coloque su comentario"></textarea>
                </div>
                <div>
                    <button className="text-xl border border-2 w-48 rounded-md 
                    cursor-pointer hover:bg-yellow-300 transition duration-[1000ms]
                    hover:border-yellow-300">Enviar</button>
                </div>
            </form>
        </div>
    )
}
export default Contact