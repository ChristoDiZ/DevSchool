import G1 from '../image/gallery-1.png'
import G2 from '../image/gallery-2.png'
import G3 from '../image/gallery-3.png'

let Gallery=()=>{
    return(
    <div className="bg-emerald-800 grid grid-cols-3 -mt-4">          
         <div className="ml-12 mt-12 mb-12">
            <img className="rounded-lg h-full" src={G1} alt="" />
         </div>      
         <div className="mx-auto mt-12 mb-12">
            <img className="rounded-lg" src={G2} alt="" /> 
            </div>     
         <div className="mr-12 mt-12 mb-12"> 
             <img className="rounded-lg h-full" src={G3} alt="" />  
        </div>     
    </div>
    )
}
export default Gallery