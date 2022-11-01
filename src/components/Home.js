import React, { useState, useEffect } from "react";
import { FaSistrix } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import Search from './components/Search';

export default function Home() {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [data, setData] = useState(null);
  const successCallback = (position) => {
    setLat(position.coords.latitude);
    setLon(position.coords.longitude);
    // console.log("here ", position.coords.latitude);
  };
  navigator.geolocation.getCurrentPosition(successCallback);

  const getCoordinates = () => {
    // console.log(lat);
    // console.log(lon);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a9ce545675b3585a826f7305ac5ad22c`
    )
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    if (lat !== null && lon !== null) getCoordinates();
    // console.log(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, lon]);

  let navigate = useNavigate(); 

  const handleClick=()=>{
    let path = "/search"; 
    navigate(path);
  }

  return (
    <>
    <div onClick={handleClick} style={{"cursor":"pointer"}} >
    <FaSistrix size="2em" className="my-2 mx-3" />
    </div>
      
      <div className="container">
        <div className="text-center my-0">
          <h1>The Weather App</h1>
          {lat === null || lon === null || data === null
            ? ""
            : `Weather at lat=${lat} and lon=${lon} is ${
                data?.main?.temp - 273
              }`}
        </div>
      </div>
    </>
  );
}
