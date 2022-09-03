import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {ImBehance2} from 'react-icons/im'
import { images } from '../../constants/data'
import {GrFacebook, GrInstagram} from 'react-icons/gr'
import './ContactIcon.css'
function ContactIcon() {
  return (
    <div className='home__socials'>
       <a href='https://www.linkedin.com/in/mohammed-titoun-340536223/' target="_blank" className='home__socilas-link'>
           <BsLinkedin/>
       </a>
       <a href='https://www.behance.net/mohammedtitoun1?tracking_source=search_users%7Ctitoun' target="_blank" className='home__socilas-link'>
           <ImBehance2/>
       </a>
       <a href='https://www.instagram.com/med_dysto/' target="_blank" className='home__socilas-link'>
           <GrInstagram/>
       </a>
       <a href='https://www.facebook.com/mohammed.titoun' target="_blank" className='home__socilas-link'>
           <GrFacebook/>
       </a>
       <div className='logo_container'>
         <a href='https://www.fiverr.com/titoun_med' target="_blank" className='home__socilas-link'>
            <img src={images.fivver} className='logo_image' alt='fiverr'></img> 
         </a>  
       </div>
    </div>
  )
}

export default ContactIcon