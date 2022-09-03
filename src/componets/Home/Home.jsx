import React from 'react'
import {images} from '../../constants/data'
import ContactIcon from '../ContactIcon/ContactIcon'
import './Home.css'
import {HiOutlineChevronDoubleDown} from 'react-icons/hi'
import Shapes from './Shapes'

function Home() {
  return (
     <section className='home container' id='Home'>
       <Shapes/>
       <div className='intro'>
         <div className='home_img_contaier'>
            <img src={images.MyImg} alt="profile" className="home__img" />
         </div>
         <h1 className='home__name'>Mohammed TITOUN</h1>
         <span className='home__title'>Illustrator | Graphic Designer</span>
         <ContactIcon/>
          <a href="#Contact" className="btn">Hire Me</a>
         <a className='home__scroll' href='#About'>
            <HiOutlineChevronDoubleDown/>
         </a>
       </div>
     </section>
  )
}

export default Home