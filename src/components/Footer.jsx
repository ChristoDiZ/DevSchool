import React from 'react'
import Wsp from '../image/whatsapp.png'
import Face from '../image/Facebook.png'
import X from '../image/twitter.png'

const Footer = () => {
  return (
    <footer className='container text-2xl bg-zinc-900 text-emerald-800 py-12 px-12'>
        <div className='flex justify-between'>
            <div className='flex flex-col'>
                <input type="button" value="Iniciar Sesion"  />
                <input type="button" value="Registrate"/>
            </div>
            <div className='flex gap-4'>
                <img className='size-8' src={Wsp} alt="" />
                <img className='size-8' src={Face} alt="" />
                <img className='size-8' src={X} alt="" />
            </div>
            <div>
                <a href="">Contactanos Aqui!</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer