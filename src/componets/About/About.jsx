import React from 'react'
import './About.css'
import {
  SiAdobeaftereffects, SiAdobeillustrator,
  SiAdobephotoshop, SiAdobepremierepro
} from 'react-icons/si'
import {images} from'../../constants/data'

function About() {
  const onDownload=()=>{
    fetch('portfolio titoun.pdf').then(res=>{
      res.blob().then(blob=>{
        const fileUrl=window.URL.createObjectURL(blob);
        let alink=document.createElement('a')
        alink.href=fileUrl
        alink.download="portfolio titoun.pdf"
        alink.click();
      })
    })
  }
  return (
    <section className="section container about" id='About'>
      <h2 className="section__title">About Me</h2>
      <div className="about__container">
        <div className="icons__skills popover_wraper">
          <div className="skills__icons">
            {/*<SiAdobephotoshop />*/}
             <div className='images'>
                <img src={images.photoShop} alt="" /></div>
            <div className="popover_content first">
            <p>Adobe Photoshop</p>
            <div className="skils_bar-ap">
               <div className="skils_bar-fill"></div>
            </div>
           </div>
          </div>
          <div className="skills__icons skills__icons2">
          <div className='images'>
                <img src={images.illustartor} alt="" /></div>
            <div className="popover_content seconde">
            <p>Adobe Illustrator</p>
            <div className="skils_bar-ap">
               <div className="illustra"></div>
            </div>
           </div>
          </div>
          <div className="skills__icons skills__icons3">
          <div className='images'>
                <img src={images.preme} alt="" /></div>
            <div className="popover_content down">
            <p>Adobe Premier Pro</p>
            <div className="skils_bar-ap">
               <div className="premiem"></div>
            </div>
           </div>
          </div>
          <div className="skills__icons skills__icons4">
          <div className='images'>
                <img src={images.after} alt="" /></div>
            <div className="popover_content down forth">
            <p>Adobe After Effect</p>
            <div className="skils_bar-ap">
               <div className="skils_bar-fill4"></div>
            </div>
           </div>
          </div>

        </div>

        <div className="about__data">
          <div className="about__info">
            <p className="about__decription">
              I am a graphic designer with over 4 years of experience.
               I am a skilled artist who likes to draw and illustrate vector 
              art, characters, icons, landscape victor, gaming logos, objects for your projects, and posters. I am talented at making layouts for children's books and creating stories for themes.
              I am open to share my experience with you and work in your
               projects. For more details, contact me.
            </p>
              <button className="btn" onClick={()=>onDownload()}>Download my CV</button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About