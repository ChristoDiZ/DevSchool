import React from 'react'

const Card = (props) => {
  return (
    <div className='w-lg bg-emerald-800 rounded-md'>
            <img className='rounded-t-md' src={props.image} alt="" />
            <div className='m-4'>
              <h2 className='text-3xl py-2 font-semibold'>{props.titulo}<span className='
              text-yellow-500'>{props.subtitulo}</span></h2>
              <p className='text-lg'>{props.parrafo1} <br />
              {props.parrafo2}
              </p>
              <br />
              <input className="text-xs border border-1 w-auto rounded-lg 
                    cursor-pointer hover:bg-yellow-300 transition duration-[1000ms]
                    hover:border-yellow-300 p-2" type="button" value={props.btn} />
            </div>
            {props.estado ?<div className='bg-yellow-300 rounded-full size-18
            text-black font-semibold text-2xl absolute p-5 -mt-120 
            ml-118'>{props.descuento}</div>: null}
          </div>
  )
}

export default Card