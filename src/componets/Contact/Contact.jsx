import React, { useRef, useState } from 'react'
import './Contact.css'
import ContactIcon from '../ContactIcon/ContactIcon'
import emailjs from '@emailjs/browser';


function Contact() {
  const form = useRef()
  const [val, setVal]=useState(false)
  const [Input, setInput]=useState({sender: '', email: '', message: ''})
  const clear=()=>{
    setInput({sender: '', email: '', message: ''})
  }
  const sendEmail = (e) => {
    e.preventDefault();
    if((Input.email !='') && (Input.message!= '')){
      setVal(false)
      emailjs.sendForm('service_1ha85hg',
        'template_76mj3kt',
        form.current, 
        'ATNflH9Re0oyUdDQ2')
    .then((result) => {
    console.log(result.text);
    alert('your message has been sended. Thank you.')
    clear()

    }, (error) => {
    console.log(error.text);
    });}
    else{
      setVal(true)
    }
    
  };
  return (
    <section className="contact section container " id='Contact' onSubmit={sendEmail}>
      <div className="contact__container grid">
        <div className="contact__info">
          <h2 className="section__title">Get In touch</h2>
          <h3 className="contact__title">Let Talk about Your Project</h3>
        </div>
        <form action="" ref={form} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text"
                className="contact__form-input"
                placeholder='Insert your Name'
                name='from_name' 
                value={Input.sender}
                onChange={(e)=>setInput({...Input, sender: e.target.value})}
                />
            </div>
            <div className="contact__form-div">
              <input type="email"
                className="contact__form-input"
                placeholder='Insert your Email'
                name='reply_to' 
                value={Input.email}
                onChange={(e)=>setInput({...Input, email: e.target.value})}/>
                {val && <div className='validation'>
                    <p className='validation_text'>You have to insert your email adress</p>
                  </div>}
            </div>
          </div>
          <div className="contact__form-div contact__textarea">
            <textarea name="message" id="" cols="30" rows="10"
              className='contact__form-input'
              placeholder='Insert Your message'
              value={Input.message}
              onChange={(e)=>setInput({...Input, message: e.target.value})}></textarea>
              {val && <div className='message'>
                    <p className='validation_text'>You have to insert your message</p>
              </div>}
          </div>
          <button className="btn" type='submit'>Send Your Message</button>

        </form>
      </div>
      <div className='line'>
        <div className='line_container'></div>
      </div>
      <div className="contact__footer">
        <ContactIcon />
      </div>
    </section>
  )
}

export default Contact