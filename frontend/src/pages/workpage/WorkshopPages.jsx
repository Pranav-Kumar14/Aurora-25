// WorkshopPage.js
import React from "react";
import { useParams } from "react-router-dom";

import { workshopsData } from "../../constants/workshops";
import WorkshopDetails from "./WorkshopDetails";

const WorkshopPages = () => {
  const { id } = useParams(); // Extract the ID from the route parameter
  const workshop = workshopsData.find((item) => item.id.toString() === id); // Find workshop by ID

  if (!workshop) {
    return <p className="text-center text-white">Workshop not found!</p>;
  }

  return (
    <WorkshopDetails
      title={workshop.title}
      description={workshop.description}
      date={workshop.date}
      location={workshop.location}
      time={workshop.time}
      clubLogo={workshop.clubLogo}
      clubInfo={workshop.clubInfo}
      buttonText="Go To Workshop Page"
      navigateTo="/Workshop"
    />
  );
};

export default WorkshopPages;
