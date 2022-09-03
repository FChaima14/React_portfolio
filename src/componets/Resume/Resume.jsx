import React from 'react'
import './Resume.css'
import {resum} from '../../constants/data'
import {FaGraduationCap} from 'react-icons/fa'
import {BsBriefcaseFill}  from 'react-icons/bs'
import Card from './Card'
function Resume() {
  return (
    <section className="container section resume" id='Education'>

        <h2 className="section__title">Experiences</h2>
        <div className="resume__container grid">
            <div className="timeline grid">
                {resum.map((item, id)=>{
                    if(item.category=== 'education'){
                        return(
                          <div>
                            <div className="edu__icon">
                                <FaGraduationCap/>
                            </div>
                            <Card key={id} title={item.title} 
                                  year={item.year} place={item.place}/>
                          </div>
                        )
                    }
                })}

            </div>
            <div className="timeline grid">
                {resum.map((item, id)=>{
                    if(item.category=== 'experience'){
                        return(
                          <div>
                            <div className="exp__icon">
                                <BsBriefcaseFill/>
                            </div>
                            <Card key={id} title={item.title} 
                                  year={item.year} place={item.place}/>
                          </div>
                        )
                    }
                })}

            </div>
        </div>

    </section>
  )
}

export default Resume