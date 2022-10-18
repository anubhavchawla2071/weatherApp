import React, { useState } from "react";


export default function Home() {
  const [lat, setLat] = useState(0)
  const [lon,setLon]=useState(0)
  const successCallback =(position) => {
      setLat(position.coords.latitude)
      setLon(position.coords.longitude)
  };
  console.log(lat)
  console.log(lon)
  navigator.geolocation.getCurrentPosition(successCallback);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a9ce545675b3585a826f7305ac5ad22c`
  )
    .then((result) => {
      return result.json();
    })
    .then((data) => console.log(data));
 
  return (
    <div className="container">
      <div className="text-center my-4">
        <h1>The Weather App</h1>
        
      </div>
      
    </div>
  );
}
