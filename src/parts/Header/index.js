import React from 'react'
import style from './Header.module.scss'

function Header() {
  return (
    <header className={style["header-container"]}>

      <div className="container py-2">
        <div className='d-flex align-items-center'>
          <div className="column pe-2">
            <img className={style.logo} src='./logo.jpg' alt='97' />
          </div>
          <div className='column'>
            <p className={style.title}>Weather App</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header