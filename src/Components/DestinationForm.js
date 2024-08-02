import React, { useState } from "react";

const DestinationForm = ({ getDestinationList }) => {
  const countries = [
    "Nigeria",
    "Ghana",
    "Togo",
    "USA",
    "Canada",
    "Singapore",
    "Guinea",
    "Angola",
    "China",
    "Argentina",
    "Cameroon",
  ];

  const [destinationData, setDestinationData] = useState({
    name: "",
    country: "",
    description: "",
    visited: false,
  });

  const [validationError, setValidationError] = useState("");

  const addDestination = async (e) => {
    e.preventDefault();
    if (validateInput()) {
      // Retrieve existing destinations from local storage
      const storedDestinations = localStorage.getItem("destinations");
      const destinations = storedDestinations
        ? JSON.parse(storedDestinations)
        : [];

      // Add the new destination to the list
      const updatedDestinations = [...destinations, destinationData];

      // Save the updated list back to local storage
      localStorage.setItem("destinations", JSON.stringify(updatedDestinations));

      // Optionally, reset the form
      setDestinationData({
        name: "",
        country: "",
        description: "",
        visited: false,
      });
      getDestinationList();

      setValidationError("");
    }
  };

  const validateInput = () => {
    if (
      !destinationData.name ||
      !destinationData.country ||
      !destinationData.description
    ) {
      setValidationError("Please complete the form.");
      return false;
    }
    return true;
  };

  return (
    <div className="container-fluid">
      <div className="container py-5">
        <div className="text-center mb-3 pb-3">
          <h6
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}>
            Want to add a new destination?
          </h6>
          <h1>Complete the details below to add a new destination</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className="contact-form bg-white"
              style={{ padding: "30px" }}>
              {validationError && (
                <div
                  className="alert alert-danger"
                  role="alert">
                  {validationError}
                </div>
              )}
              <form
                name="sentMessage"
                id="contactForm"
                noValidate="novalidate">
                <div className="form-row">
                  <div className="control-group col-sm-12">
                    <input
                      onChange={(e) => {
                        setDestinationData({
                          ...destinationData,
                          name: e.target.value,
                        });
                      }}
                      type="text"
                      className="form-control p-4"
                      id="name"
                      placeholder="Destination Name"
                      required="required"
                      data-validation-required-message="Please enter the name of your destination"
                      value={destinationData.name}
                    />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="control-group">
                  <select
                    onChange={(e) => {
                      setDestinationData({
                        ...destinationData,
                        country: e.target.value,
                      });
                    }}
                    type="text"
                    className="form-control"
                    id="Country"
                    required="required"
                    name="Country"
                    value={destinationData.country}>
                    <option value="">--select country--</option>
                    {countries.map((country, index) => (
                      <option
                        value={country}
                        key={index}>
                        {country}
                      </option>
                    ))}
                  </select>
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <textarea
                    onChange={(e) => {
                      setDestinationData({
                        ...destinationData,
                        description: e.target.value,
                      });
                    }}
                    className="form-control py-3 px-4"
                    rows={5}
                    id="description"
                    placeholder="Destination description"
                    required="required"
                    data-validation-required-message="Please describe your destination"
                    value={destinationData.description}
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group form-check">
                  <input
                    onChange={(e) => {
                      setDestinationData({
                        ...destinationData,
                        visited: e.target.checked,
                      });
                    }}
                    type="checkbox"
                    className="form-check-input"
                    id="visited"
                    checked={destinationData.visited}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="visited">
                    Visited
                  </label>
                </div>

                <div className="text-center">
                  <button
                    onClick={addDestination}
                    className="btn btn-primary py-3 px-4"
                    type="submit"
                    id="submitButton">
                    Add Destination
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationForm;
