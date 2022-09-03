import React, {useState} from 'react'
import './SideBar.css'
import {AiOutlineHome, 
        AiOutlineUser, 
        AiOutlineProject, AiOutlineMessage} from 'react-icons/ai'
import {FaGraduationCap} from 'react-icons/fa'
import {FiMenu} from 'react-icons/fi'
import {MdOutlineMiscellaneousServices} from 'react-icons/md'

function SideBar() {
  const current=new Date().getFullYear()
  const[toggle, setToggle]=useState(false)
  return (
    <>
      <aside className={toggle ? "aside show-menu": "aside"}>
      <a href='#Home' className='nav_logo'>
      </a>
      <nav className='nav'>
        <div className='nav_menu'>
          <ul className='nav_list'>
            <li className="nav_item">
              <a href="#Home" className="nav_link">
                <div className='icons'>
                  <AiOutlineHome/>
                </div>
              </a>
            </li>
            <li className="nav_item">
              <a href="#About" className="nav_link">
                <div className='icons'>
                  <AiOutlineUser/>
                </div>
              </a>
            </li>
            <li className="nav_item">
              <a href="#Services" className="nav_link">
                <div className='icons'>
                  <MdOutlineMiscellaneousServices/>
                </div>
              </a>
            </li>
            <li className="nav_item">
              <a href="#Education" className="nav_link">
              <div className='icons'>
                  <FaGraduationCap/>
                </div>
              </a>
            </li>
            <li className="nav_item">
              <a href="#Portfolio" className="nav_link">
              <div className='icons'>
                  <AiOutlineProject/>
                </div>
              </a>
            </li>
            <li className="nav_item">
              <a href="#Contact" className="nav_link">
              <div className='icons'>
                  <AiOutlineMessage/>
                </div>
              </a>
            </li>
          </ul>

        </div>

      </nav>
      <div className='nav__footer'>
        <span className='copyrights'>&copy; {current}</span>
      </div>

    </aside>
    <div className={toggle ? "nav__toggle nav__toggle-open": "nav__toggle"}
         onClick={()=>setToggle(!toggle)}>
      <FiMenu/>
    </div>
    </>
  )
}

export default SideBar