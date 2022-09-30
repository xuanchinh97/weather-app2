import { faMapMarkedAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getters, mutations, state } from '../../store'
import style from './TagsLocation.module.scss'

function TagsLocation({ reRender, setCity, getData, getLocationCurrent }) {

  const { getListSearch } = getters
  const { removeTag } = mutations

  const fetchDataByTag = async (e, city) => {
    await setCity(city)
    await getData(e)
    await reRender()
  }

  const remove = (state, tag) => {
    removeTag(state, tag)
    reRender()
  }

  return (
    <div className={style['tags-location']}>
      <div className='d-flex flex-wrap align-items-center'>
        <div className='col-auto pe-2'>
          <small className={style.tag}>
            <a href='/#' onClick={(e) => getLocationCurrent(e)}>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </a>
          </small>
        </div>
        <div className='col'>
          <ul className={style['list-tag']}>
            {getListSearch(state).map((city, index) =>
              <li className={style.tag} key={index}>
                <small className={style.tag}>
                  <a className="me-2" href="/#"
                    onClick={(e) => fetchDataByTag(e, city)}>
                    {city}
                  </a>
                  <small>
                    <FontAwesomeIcon
                      icon={faTimes}
                      onClick={() => remove(state, city)}
                    />
                  </small>
                </small>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TagsLocation