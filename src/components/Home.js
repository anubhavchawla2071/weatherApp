import React from "react";

export default function Home() {
  const handleSubmit=async (e)=>{
    e.preventDefault();
    // console.log(5);
      var lat
      var lon
      await fetch("http://api.openweathermap.org/geo/1.0/direct?q=Patiala&limit=5&appid=a9ce545675b3585a826f7305ac5ad22c")
      .then((result)=>{
        return result.json()
      })
      .then((data)=>{
        lat=data[0].lat
        lon=data[0].lon
      })
      console.log(lat)
      console.log(lon)
  }
  return (
    <div className="container">
      <div className="text-center my-4">
        <h1>The Weather App</h1>
      </div>
      <form onSubmit={handleSubmit} className="container">
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="State" className="form-label">
            State
          </label>
          <input
            type="text"
            className="form-control"
            id="State"
          />
        </div>
        <div className="mb-3">
        <label className="form-label" htmlFor="Country">
            Country
        </label>
          <input
            type="text"
            className="form-control"
            id="Country"
          />
         
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
