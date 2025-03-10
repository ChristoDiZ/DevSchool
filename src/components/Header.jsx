import LOGO from '../image/logo.png'
import BtnHeader from '../subComponents/BtnHeader'

let Header = ()=>{
    return(
        <header className="fixed top-0 left-0 w-full shadow-2xl">
        
            <nav className="bg-emerald-800 text-white text-xl flex items-center
             justify-between p-4">
                <div className="">
                 <img className="size-12" src={LOGO} alt="logo.png"/>
                 
                </div>
                <div className="uppercase">
                    <BtnHeader content={'inicio'} />
                    <BtnHeader content={'cafe'} />
                    <BtnHeader content={'sobre nosotros'} />
                    <BtnHeader content={'delivery'} />
                    
                    
                </div>
                <div className="">
                 <img className=" size-12" src={LOGO} alt=""/>
                 
                </div>
            </nav>
        </header>
    )
}

export default Header