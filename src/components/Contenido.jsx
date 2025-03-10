import LOGO from '../image/logo.png'

let Contenido=()=>{
    return(
        <div className="m-14 mt-28 grid grid-cols-2">
            <div>
                <h2 className="text-7xl font-semibold mr-20">No solo es Cafe es</h2>
                <h3 className="text-7xl text-emerald-800 font-semibold">Starbucks</h3>
                <p className="mr-20 mt-10 text-lg font-semibold">Cada día, acudimos a trabajar con la esperanza de conseguir dos cosas: compartir el mejor café con nuestros amigos y contribuir a que el mundo sea un poco mejor. Así era cuando abrió la primera tienda Starbucks en 1971, y así continúa siendo hoy.</p>
            </div>
            <div>
                <img src={LOGO} alt="" />
            </div>
        </div>
    )
}
export default Contenido