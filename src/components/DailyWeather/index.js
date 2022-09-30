import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import style from './DailyWeather.module.scss'
import { getters, state } from '../../store'
function DailyWeather() {

  const getDaily = () => {
    const weather = getters.getWeatherOneCall(state)
    return weather ? weather.daily : ""
  }

  const formatTime = (time) => {
    let d = new Date(time * 1000);
    let hours = d.getHours() + "";
    let minutes = d.getMinutes() + "";
    let seconds = d.getSeconds() + "";
    if (hours.length < 2) hours = "0" + hours;
    if (minutes.length < 2) minutes = "0" + minutes;
    if (seconds.length < 2) seconds = "0" + seconds;
    return `${hours}:${minutes}`;
  }

  const formatDate = (time) => {
    let dayArr = [
      "Chủ nhật",
      "Thứ 2",
      "Thứ 3",
      "Thứ 4",
      "Thứ 5",
      "Thứ 6",
      "Thứ 7",
    ];
    let d = new Date(time * 1000);
    let day = d.getDay() + "";
    let date = d.getDate() + "";
    let month = d.getMonth() + 1 + "";
    if (date.length < 2) date = "0" + date;
    if (month.length < 2) month = "0" + month;
    return `${dayArr[day]}, Ngày ${date}/${month}`;
  }

  const getDate = (time) => {
    return formatDate(time)
  }

  const getIcon = (icon = "10d") => {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  }

  const getIcon4x = (icon = "10d") => {
    return `http://openweathermap.org/img/wn/${icon}@4x.png`;
  }

  return (
    <div>
      <div className={style['daily-weather']}>
        <hr></hr>
        <div className="mb-4">
          <h3 className={style.heading}>
            <FontAwesomeIcon icon={faCloud} />
            <span className='ms-3'>Dự báo 8 ngày tới</span>
          </h3>
        </div>
        <div className={`mx-2 clearfix slick-wrapper ${style['slick-wrapper']}`}>
          {getDaily() && getDaily().map((slider, index) =>
            <div className='px-2' key={index}>
              <div className={style['slick-slide-item']}>
                <p className='mb-0 ps-2'>{getDate(slider.dt)}</p>
                <div className='d-flex align-items-center'>
                  <div className='col-auto'>
                    <img src={getIcon(slider.weather[0].icon)} alt="icon" width={70} />
                  </div>
                  <div className='col ps-2'>
                    <p className='mb-0'>
                      <strong className={style['temp-max']}>{Math.round(slider.temp.max / 10)} &deg; / </strong>
                      <strong className={style['temp-min']}>{Math.round(slider.temp.min / 10)} &deg;</strong>
                    </p>
                    <p className='mb-0'>
                      Có {slider.weather[0].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {getDaily() &&
          <div className={`${style.clearfix} ${style.box}`}>
            <div className={`row align-items-center ${style.header}`}>
              <div className="col">
                <div className="row align-items-center w-100">
                  <div className='col-12 col-sm-auto'>
                    <p className='mb-0 text-center text-sm-left'>
                      <img alt='icon' src={getIcon4x(getDaily()[0].weather[0].icon)} />
                    </p>
                  </div>
                  <div className="col-12 col-sm">
                    <div className="row align-items-center">
                      <div className="col-12 col-sm my-2">
                        <p className="mb-2">{getDate(getDaily()[0].dt)}</p>
                        <p className="mb-0">
                          <strong className="fnt2x">Có {getDaily()[0].weather[0].description}</strong>
                        </p>
                        <p className="mb-0">Nhiệt độ cao nhất {Math.round(getDaily()[0].temp.max)}&deg;, thấp nhất {Math.round(getDaily()[0].temp.min)}&deg;</p>
                      </div>
                      <div className="col-12 col-sm-auto my-2">
                        <p className="mb-0">Mặt trời mọc: {formatTime(getDaily()[0].sunrise)}</p>
                        <p className="mb-0">Mặt trời lặn: {formatTime(getDaily()[0].sunset)}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row" >
                  <div className="col-12 col-sm-6 my-3 my-sm-0">
                    <div className={style.clearfix}>
                      <div className='d-flex flex-wrap'>
                        <p className={`${style.tag} me-4`}>Độ ẩm: {getDaily()[0].humidity}%</p>
                        <p className={`${style.tag} me-4`}>Có mây: {getDaily()[0].clouds}%</p>
                        <p className={`${style.tag} me-4`}>Chỉ số UV {getDaily()[0].uvi}%</p>
                        <p className={`${style.tag} me-4`}>Khối lượng mưa: {getDaily()[0].rain}mm</p>
                        <p className={`${style.tag} me-4`}>Tốc độ gió: {getDaily()[0].wind_speed}m/s</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-12 col-sm-6'>
                    <div className={style['table-primary']}>
                      <table className={style.table}>
                        <thead>
                          <tr>
                            <th></th>
                            <th>Sáng</th>
                            <th>Trưa</th>
                            <th>Chiều</th>
                            <th>Tối</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Nhiệt độ</td>
                            <td>{Math.round(getDaily()[0].temp.morn / 10)}&deg;</td>
                            <td>{Math.round(getDaily()[0].temp.day / 10)}&deg;</td>
                            <td>{Math.round(getDaily()[0].temp.eve / 10)}&deg;</td>
                            <td>{Math.round(getDaily()[0].temp.night / 10)}&deg;</td>
                          </tr>
                          <tr>
                            <td>Cảm thấy như</td>
                            <td>{Math.round(getDaily()[0].feels_like.morn / 10)}&deg;</td>
                            <td>{Math.round(getDaily()[0].feels_like.day / 10)}&deg;</td>
                            <td>{Math.round(getDaily()[0].feels_like.eve / 10)}&deg;</td>
                            <td>{Math.round(getDaily()[0].feels_like.night / 10)}&deg;</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default DailyWeather