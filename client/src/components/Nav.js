import React from 'react'
import {Link} from 'react-router-dom'

function Nav(props) {
  return (
    <div className='nav-plain'>
      <nav>
        <div className='left'>
          <div className='logo'>ARPEGGIO</div>
        </div>
        <div className='right'>
          <ul className='ul-items right'>
            <li className='li=items'>
              <Link to={'/login'}>Log In</Link>
              <Link to='/logout'>Log Out</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav
