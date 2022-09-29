import DefaultLayout from './layouts/Default';
import Main from './parts/Main/Main';

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        <Main />
      </DefaultLayout>
    </div>
  );
}

export default App;


// import DefaultLayout from './layouts/Default';
// import { actions, getters, state } from './store'
// import Navbar from './parts/Navbar';
// import WeatherContainer from './parts/WeatherContainer';

// function App() {

//   const { getWeatherCurrent } = getters
//   const { fetchDataWeather } = actions
//   function created() {
//     let lon;
//     let lat;
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(async (position) => {
//         lon = position.coords.longitude;
//         lat = position.coords.latitude;
//         await fetchDataWeather(state, { lat, lon })
//       });
//     }
//   }
//   created()

//   return (
//     <div className="App">
//       <DefaultLayout>
//         {
//           getWeatherCurrent &&
//           <div>
//             <Navbar/>
//             <WeatherContainer />
//           </div>
//         }
//         <div >
//           {!getWeatherCurrent &&
//             <div className='container py-0'>
//               <p className='mb-0'>Hãy nhập địa điểm bạn muốn vào ô tìm kiếm.</p>
//             </div>
//           }
//         </div>
//       </DefaultLayout>
//     </div>
//   );
// }

// export default App;
