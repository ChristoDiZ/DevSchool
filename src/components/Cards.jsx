import React from 'react'
import Card from '../subComponents/Card'
import card1 from '../image/card-1.png'
import card2 from '../image/card-2.png'
import card3 from '../image/card-3.png'
import card4 from '../image/card-4.png'

const Cards = () => {
  return (
    <div className='text-white p-14 grid md:grid-cols-2 grid-cols-1 gap-12'>
      <Card image={card1}
        titulo={"Aplicacion de "}
        subtitulo={"Starbucks"}
        parrafo1={"Ahorre tiempo con click & collect y recolecte sus estrellas."} 
        parrafo2={"Hacer pedido nunca ha sido facil."} 
        descuento={"5%"}
        btn={"pruebelo"}
        estado={true}        
        />
      <Card image={card2}
        titulo={"Starbucks "}
        subtitulo={"Delivery"}
        parrafo1={"Starbucks entrega su comida y bebida favorita en la puerta de su casa."} 
        descuento={"5%"}
        btn={"Entrega por UberEat"}
       
        estado={true}        
        />
      <Card image={card3}
        titulo={"Novedades "}
        subtitulo={"Starbucks"}
        parrafo1={"Mantengase informado de nuestras ultimas novedades y actualizaciones."} 
        descuento={"5%"}
        btn={"Mas Informacion"}
        estado={false}        
        />
      <Card image={card4}
        titulo={"Aplicacion de "}
        subtitulo={"Starbuscks"}
        parrafo1={"Descubra nuestra empresa y nuestra historia."} 
        descuento={"5%"}
        btn={"Mas Informacion"}
        estado={false}        
        />
    </div>
  )
}

export default Cards