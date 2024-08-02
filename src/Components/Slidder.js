import React, { useState, useEffect } from "react";
import axios from "../Utils/axios";


const Slider = ({ setVideos }) => {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);
  const [suggestedTitles, setSuggestedTitles] = useState([]);

  const getAllVideos = async (e) => {
    setLoading(true);
    e.preventDefault();

    // Update the search history
   
  const updatedSearchHistory = [title, ...searchHistory].slice(0, 5);
  setSearchHistory(updatedSearchHistory);
    try {
      const response = await axios.post(`/videos?title=${title}`);
      setVideos(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    setTitle(input);

    // Filter suggestions based on the input from search history
    const filteredSuggestions = searchHistory.filter((item) =>
      item.toLowerCase().includes(input.toLowerCase())
    );
    setSuggestedTitles(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setTitle(suggestion);
    setSuggestedTitles([]); // Clear suggestions when a suggestion is clicked
  };

  return (
    <>
      {loading ? (
        // Loading indicator
        <div id="loader-wrapper">
          <div id="loader"></div>
          <div className="loader-section section-left"></div>
          <div className="loader-section section-right"></div>
        </div>
      ) : (
        // Main content
        <div className="container-fluid p-0">
          <div
            id="header-carousel"
            className="carousel slide"
            data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="w-100"
                  src="img/carousel-1.jpg"
                  alt="Image"
                />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div
                    className="p-3"
                    style={{ "max-width": "900px" }}>
                    <h4 className="text-white text-uppercase mb-md-3">
                      Tours &amp; Travel
                    </h4>
                    <h1 className="display-3 text-white mb-md-4">
                      Let's Discover The World Together
                    </h1>
                    <a
                      href
                      className="btn btn-primary py-md-3 px-md-5 mt-2">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="w-100"
                  src="img/carousel-2.jpg"
                  alt="Image"
                />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div
                    className="p-3"
                    style={{ "max-width": "900px" }}>
                    <h4 className="text-white text-uppercase mb-md-3">
                      Tours &amp; Travel
                    </h4>
                    <h1 className="display-3 text-white mb-md-4">
                      Discover Amazing Places With Us
                    </h1>
                    <a
                      href
                      className="btn btn-primary py-md-3 px-md-5 mt-2">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#header-carousel"
              data-slide="prev">
              <div
                className="btn btn-dark"
                style={{ width: "45px", height: "45px" }}>
                <span className="carousel-control-prev-icon mb-n2" />
              </div>
            </a>
            <a
              className="carousel-control-next"
              href="#header-carousel"
              data-slide="next">
              <div
                className="btn btn-dark"
                style={{ width: "45px", height: "45px" }}>
                <span className="carousel-control-next-icon mb-n2" />
              </div>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Slider;
