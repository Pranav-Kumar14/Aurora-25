import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  const timelineEvents = [
    { time: "7:00 AM – 8:00 AM", title: "Setup and Hackathon Overview" },
    { time: "8:00 AM – 10:30 AM", title: "Hackathon – Session 1" },
    { time: "10:30 AM – 12:30 PM", title: "Hackathon – Session 2" },
    { time: "12:30 PM – 2:00 PM", title: "Lunch Break" },
    { time: "2:00 PM – 4:30 PM", title: "Hackathon – Session 3" },
    { time: "4:30 PM – 4:45 PM", title: "Refreshment Break" },
    { time: "4:45 PM – 6:00 PM", title: "Hackathon Wrap-Up – Final Submissions" },
    { time: "6:00 PM – 7:30 PM", title: "Project Presentations and Prize Distribution Ceremony" },
  ];
  

  return (
    <div className="min-h-screen py-10 px-5 ">
      <h1 className="text-center text-4xl font-bold mb-12 text-white font-press-start">
        Timeline
      </h1>
      <VerticalTimeline>
        {timelineEvents.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            // date={event.time}
            className="font-bold text-3xl"
            contentStyle={{
              background: "#1F2937", // Darker background for better contrast
              color: "#fff", 
              
              boxShadow: "0 4px 15px ", // Subtle shadow for depth
              borderRadius: "10px",
            }}
            contentArrowStyle={{
              borderRight: "7px solid #1F2937", // Matching arrow color
            }}
            iconStyle={{
              background: "#A00F0F", // Solid red icon for better contrast
              color: "#ffffff", // White icon
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
            }}
            icon={<i className="fas fa-check-circle text-xl" />}
          >
            <h3 className="text-xl font-bold mb-2 text-white">{event.title}</h3>
            <p className="text-xl text-white">{event.time}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
