import React from "react";

export default function Home() {
  return (
    <div className="container">
      <div className="text-center my-4">
        <h1>The Weather App</h1>
      </div>
      <form className="container">
        <div className="mb-3">
          <label for="city" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
          />
        </div>
        <div className="mb-3">
          <label for="State" className="form-label">
            State
          </label>
          <input
            type="text"
            className="form-control"
            id="State"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
