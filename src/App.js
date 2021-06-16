import React from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard/component';

function App() {

  return (
    <div className="App">
      <WeatherCard/>
    </div>
  );
}

export default App;

  // const data = async () => {
  //   const apiRes = await fetch(
  //     "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=0022cf279b91db8f45436392a8784bac"
  //   );
  //   const resJSON = await apiRes.json();
  //   return resJSON;
  // }
  // data().then(res => console.log(res));
