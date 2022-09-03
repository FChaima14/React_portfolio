import React, {useState} from 'react'
import {WorkMenu} from '../../constants/data'
import './Portfolio.css'
import {BiLinkExternal} from 'react-icons/bi'

function Portfolio() {
  const [items, setItems]=useState(WorkMenu)
  const filterCategory=(getCategory)=>{
    const updatedItem=WorkMenu.filter((curItem)=>{
      return curItem.category===getCategory
    });
    setItems(updatedItem);
  }
  return (
    <section className="work container section" id='Portfolio'>
      <h2 className="section__title">Portfolio</h2>
      <div className="work__filter">
        <span className="work__item" onClick={()=>setItems(WorkMenu)}>All</span>
        <span className="work__item" onClick={()=>filterCategory('logos')}>Logos</span>
        <span className="work__item" onClick={()=>filterCategory('Visual idantity')}>Visual identity</span>
        <span className="work__item" onClick={()=>filterCategory('banner')}>Banner</span>
        <span className="work__item" onClick={()=>filterCategory('Illustration')}>Illustation</span>
      </div>
      <div className="work__container grid">
         {items.map((item)=>{
           const {id, image, title, category, link}= item
           return(
             <div className="work__card" key={id}>
               <div className="work__taimbrnail">
                 <img src={image} alt={title} className="work__img" />
                 <div className="work__mask"></div>
               </div>
               <span className="work__category">{category}</span>
               <h2 className="work__title">{title}</h2>
               <a href={link} className="work__btn" >
                     <BiLinkExternal/>
               </a>
             </div>
           )
         })}
      </div>
    </section>
  )
}

export default Portfolio