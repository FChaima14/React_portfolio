import React from 'react'
import './Services.css'
import {services} from '../../constants/data'

function Services() {
  return (
    <section className='container section services' id='Services'>
        <h2 className='section__title'>Services</h2>
        <div className='services_container'>
            {services.map((item)=>{
                return(
                    <div className='services_card' key='item.id'>
                        <img src={item.image} alt={item.title} className='service_image'></img>

                        <h3 className='services_title'>{item.title}</h3>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Services