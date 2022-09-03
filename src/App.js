import React from 'react'
import About from './componets/About/About'
import Contact from './componets/Contact/Contact'
import Home from './componets/Home/Home'
import Portfolio from './componets/Portfolio/Portfolio'
import Resume from './componets/Resume/Resume'
import Services from './componets/Services/Services'
import SideBar from './componets/SideBar/SideBar'

export default function App() {
  return (
    <div>
      <SideBar/>
      <Home/>
      <About/>
      <Services/>
      <Resume/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}
