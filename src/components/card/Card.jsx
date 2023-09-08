import React from 'react'
import './card.css'

const Card = ({data}) => {
  return (
    <div className='card'>
        
        <div className='card-image'>
           <img src={data.image_url} alt=""/>
        </div> 
        <div className='info'>
            <p className='title'>{data.name}</p>
            <p>{data.tagline}</p>
            <p>firstly brewed: {data.first_brewed}</p>
        </div>

    </div>
  )
}

export default Card