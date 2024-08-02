import React, { useState, useEffect } from "react";
import axios from "../Utils/axios";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import Breadcrumb from "../Components/Breadcrumb";
import DestinationForm from "../Components/DestinationForm";
import DestinationList from "../Components/DestinationList";

export default function Single() {


  //setting state variables
  const [destinations, setDestinations] = useState([]);
   const [filter, setFilter] = useState("all");

  //function to mark visited
   const toggleVisited = (index) => {
     const updatedDestinations = destinations.map((destination, i) => {
       if (i === index) {
         return { ...destination, visited: !destination.visited };
       }
       return destination;
     });

     setDestinations(updatedDestinations);
     localStorage.setItem("destinations", JSON.stringify(updatedDestinations));
   };

  //function to remove destination
   const removeDestination = (index) => {
     const updatedDestinations = destinations.filter((_, i) => i !== index);

     setDestinations(updatedDestinations);
     localStorage.setItem("destinations", JSON.stringify(updatedDestinations));
   };

  
  //function to filter destination
   const filteredDestinations = destinations.filter((destination) => {
     if (filter === "visited") {
       return destination.visited;
     }
     if (filter === "not_visited") {
       return !destination.visited;
     }
     return true;
   });

  //function to get the destination list
  const getDestinationList = async () => {
     const storedDestinations = localStorage.getItem("destinations");

     // Parse the data if it exists and set it to the state
     if (storedDestinations) {
       setDestinations(JSON.parse(storedDestinations));
     }
  }
    useEffect(() => {
      getDestinationList();
    }, []);
  return (
    <>
      <Header />
      <Breadcrumb title={"Destinations"} />
      <DestinationForm getDestinationList={getDestinationList} />
      <DestinationList
        destinations={destinations}
        filter={filter}
        setFilter={setFilter}
        filteredDestinations={filteredDestinations}
        removeDestination={removeDestination}
        toggleVisited={toggleVisited}
      />

      <Footer />
    </>
  );
}
