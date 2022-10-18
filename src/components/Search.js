import React from "react";

export default function Search() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(5);
    var lat;
    var lon;
    await fetch(
      "http://api.openweathermap.org/geo/1.0/direct?q=Patiala&limit=5&appid=a9ce545675b3585a826f7305ac5ad22c"
    )
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        lat = data[0].lat;
        lon = data[0].lon;
      });
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a9ce545675b3585a826f7305ac5ad22c`
    )
      .then((result) => {
        return result.json();
      })
      .then((data) => console.log(data));
  };
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
    </div>
  );
}
