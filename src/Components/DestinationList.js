import React, { useState, useEffect } from "react";

const DestinationList = ({
  getDestinationList,
  filter,
  setFilter,
  filteredDestinations,
  removeDestination,
  toggleVisited,
}) => {
  return (
    <div className="container-fluid">
      <div className="container pt-5 pb-3">
        <div className="text-center mb-3 pb-3">
          <h6
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}>
            Destinations
          </h6>
          <h1>Destination List</h1>
        </div>
        <div className="text-center mb-3">
          <button
            className={`btn ${
              filter === "all" ? "btn-primary" : "btn-secondary"
            } mx-1`}
            onClick={() => setFilter("all")}>
            All
          </button>
          <button
            className={`btn ${
              filter === "visited" ? "btn-primary" : "btn-secondary"
            } mx-1`}
            onClick={() => setFilter("visited")}>
            Visited
          </button>
          <button
            className={`btn ${
              filter === "not_visited" ? "btn-primary" : "btn-secondary"
            } mx-1`}
            onClick={() => setFilter("not_visited")}>
            Not Visited
          </button>
        </div>
        <div className="row">
          {filteredDestinations.length > 0 ? (
            filteredDestinations.map((destination, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 mb-4">
                <div className="service-item bg-white text-center mb-2 py-5 px-4">
                  <i className="fa fa-2x fa-home mx-auto mb-4" />
                  <h5 className="mb-2">
                    {destination.name}
                    {destination.visited && (
                      <span className="badge badge-success ml-2">Visited</span>
                    )}
                  </h5>
                  <p className="m-0">{destination.description}</p>
                  <div className="control-group form-check">
                    <input
                      onChange={() => toggleVisited(index)}
                      type="checkbox"
                      className="form-check-input"
                      id={`visited-${index}`}
                      checked={destination.visited}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`visited-${index}`}>
                      Visited
                    </label>
                  </div>
                  <button
                    className="btn  mt-3"
                    onClick={() => removeDestination(index)}>
                    <span
                      className="fa fa-trash"
                      style={{ color: "red" }}></span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="container">
              <div className="text-center mb-3 pb-3">
                <h5 className="text-primary"> No Destination</h5>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DestinationList;
