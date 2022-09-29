import React, { useState } from 'react'
import style from './ShowError.module.scss'

function ShowError() {

  return (
    <div className={style.clearfix}>
      <div className='mb-4'>
        <div className={style.error}>
          <div className='row align-items-center'>
            <div className='col'>
              <small>Không tìm thấy </small>
            </div>
          </div>
        </div>
      </div>
    </div>)
}

export default ShowError