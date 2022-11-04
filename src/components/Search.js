import React, { useState, useEffect } from "react";

export default function Search() {
  const [location, setLocation] = useState({"city":"", "state":"","country":""});
  const [coords, setCoords] = useState({"lat":"", "lon":""});
  const [result, setResult] = useState({});
  
  // var response
  const handleSubmit = (e) => {
    e.preventDefault();
    // var inputs = document.getElementsByTagName("input");
    setLocation({
      "city": e.target[0].value,
      "state": e.target[1].value,
      "country": e.target[2].value
    });
    setResult({});
  };

  useEffect(() => {
    if(location.city !==""){
      fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${location.city}${location.state!==""?","+location.state:""}${location.country!==""?","+location.country:""}&limit=5&appid=a9ce545675b3585a826f7305ac5ad22c`
      )
        .then((result) => {
          return result.json();
        })
        .then((data) => {
          setCoords({
            "lat": data[0].lat,
            "lon": data[0].lon
          });
        });
    }
  }, [location]);
  
  useEffect(() => {
    if(coords.lat!=="" && coords.lon!==""){
      fetch( 
        `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=a9ce545675b3585a826f7305ac5ad22c`
      )
        .then((result) => {
          return result.json();
        })
        .then((data) => {
          console.log(data);
          setResult(data);
        });
    }
  }, [coords])
  

  return (
    <div>
      <form onSubmit={handleSubmit} className="container">
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="city" />
        </div>
        <div className="mb-3">
          <label htmlFor="State" className="form-label">
            State
          </label>
          <input type="text" className="form-control" id="State" />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="Country">
            Country
          </label>
          <input type="text" className="form-control" id="Country" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {location.city !== "" && !isNaN(result?.main?.temp) ? `Temperature of ${location.city} is ${result?.main?.temp-273.15}`:""}
    </div>
  );
}
