import React from 'react'

import FormSearch from '../../components/FormSearch'
import TagsLocation from '../../components/TagsLocation'
import Units from '../../components/Units'
import style from './Navbar.module.scss'

function Navbar({ reRender, setCity, getData, getLocationCurrent }) {
    return (
        <nav className={`${style["weather-header"]} bg-dark py-2`}>
            <div className='container'>
                <div className='row align-items-center justify-content-between'>
                    <div className='col-auto'>
                        <FormSearch
                            setCity={setCity}
                            getData={getData} />
                    </div>
                    <div className='col col-center d-none d-md-block'>
                        <TagsLocation
                            setCity={setCity}
                            reRender={reRender}
                            getData={getData}
                            getLocationCurrent={getLocationCurrent} />
                    </div>
                    <div className='col-auto'>
                        <Units
                            getData={getData}
                            reRender={reRender} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar