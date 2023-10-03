import { useCallback, useEffect } from "react";
import { useState } from "react";
import "./App.css";
import axios from "axios";
import { WeatherContainer } from "./components/WeatherContainer";
import { Dna } from "react-loader-spinner";
import { BottomModo } from "./components/BottomModo";




function App() {
  const [weather, setWeather] = useState(null);

  const [mode, setMode] = useState(true);

  const ModoUpdate = () => {
    setMode(!mode)
  }



  const success = (pos) => {
    //
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
    const API_KEY = "55187f2319b55af397c7fb2a3bb54fa1";

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      )
      .then(({ data }) => setWeather(data))
      .catch((err) => console.log(err));
  };


  const ListImages = {
    "clear sky": "Image1",
    "few clouds": "Image2",
    "scattered clouds": "Image6",
    "broken clouds": "Image4",
    "shower rain": "Image7",
    "rain": "Image9",
    "thunderstorm": "Image3",
    "snow": "Image5",
    "mist": "Image8"
  }

  //
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);


  return (
    <>
    <header className="fixed flex justify-center items-center w-full h-52 text-center">
  <BottomModo ModoUpdate={ModoUpdate} mode={mode}/>
</header>
      <main className={`font-["Lato"] flex justify-center items-center min-h-screen ${mode?("text-black"):("bgp text-white")} ${ListImages[weather?.weather[0].description]}`}>

        {weather === null ? (
          <div className="flex justify-center items-center flex-col ">
            <img src="./images/loader.webp" alt="" />
            ;<Dna
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </div>
        ) : (
          <WeatherContainer weather={weather} />
        )}
      </main>
    </>

  );
}

export default App;
