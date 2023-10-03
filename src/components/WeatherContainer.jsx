import { useState } from "react"
import { WheatherStatus } from "./WheatherStatus"
import { BottomModo } from "./BottomModo"

export const WeatherContainer = ({weather}) => {

  const [isCelcius, setIsCelcius] = useState(true)

  const handleChangeUnit = ()=>{
    setIsCelcius(!isCelcius)
  }  

  const changeUnitTem =(temp)=>{
    if(isCelcius){
      return `${Math.floor(temp -273.15)}°C`
    }else{
      return `${Math.floor(((temp -273.15)*9)/5 + 32)}°F`
    }
  }

  const weatherIcons = {
    "few clouds": "direccion de la imagen"
  }
  



  console.log(weather)
  return (

    <section className="text-center grid gap-5">
        <h3 className="text-xl font-semibold">{weather.name}, {weather.sys.country}</h3>
        <div className="grid gap-5 md:flex">
            {/* section superior */}
            <article className="bg-slate-500/50 rounded-2xl grid grid-cols-2 items-center p-3">
              <h4 className="col-span-2 text-lg capitalize">{weather.weather[0].description}</h4>
              <span className="text-5xl">{changeUnitTem(weather.main.temp)}</span>
              <picture>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}alt="" />
              </picture>
            </article>
            {/* section inferior */}
            <article className="grid grid-cols-3 justify-items-center bg-slate-600/50 rounded-2xl p-2 py-3 md:grid-cols-1">
              <WheatherStatus icon="./images/wind.png" value={weather.wind.speed} unit="m/s"/>

              <WheatherStatus icon="./images/humidity.png" value={weather.main.humidity} unit="%"/>

              <WheatherStatus icon="./images/pressure.png" value={weather.main.pressure} unit="hPa"/>
            </article>
            {/*Section Inferior 2*/}
            <article className="grid grid-cols-3 justify-items-center bg-slate-600/50 rounded-2xl p-2 py-3 md:grid-cols-1">
              <WheatherStatus unit="Maximo" value={changeUnitTem(weather.main.temp_max)} />

              <WheatherStatus value={weather.main.humidity}/>

              <WheatherStatus unit= "Minimo" value={changeUnitTem(weather.main.temp_min)}/>
            </article>

          
            
        </div>
        <div className="justify-center">
            <button className=" text-black rounded-md w-28 bg-orange-200 hover:bg-orange-300 " onClick={handleChangeUnit}>Convertir a {isCelcius?("F°"):("C°")}</button>
        </div>
    </section>
  )
}