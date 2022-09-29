import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './FormSearch.module.scss'


function FormSearch({ setCity, getData }) {

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      getData(e)
    }
  }

  const handleChange = (e) => {
    const value = e.target.value
    setCity(value)
  }

  return (
    <div className={style['frm-search']}>
      <input
        className={style['frm-control']}
        type="text"
        name="search"
        placeholder='Nhập địa điểm...'
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => handleSearch(e)}
      />
      <span className={style['frm-icon']} onClick={(e) => getData(e)}>
        <a
          className={`${style.btn} ${style['btn-search']} `}
          href="/"
        >
          <FontAwesomeIcon icon={faSearchPlus} />
        </a>
      </span>
    </div>
  )
}

export default FormSearch
