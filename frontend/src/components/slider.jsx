import React from "react";
import "./slider.css";
import Partners from "../constants/partners";
import { useNavigate } from "react-router-dom";

const SliderItem = ({ src, alt, position }) => {
  return (
    <div className="item" style={{ "--position": position }}>
      <img src={src} alt={alt} />
    </div>
  );
};

const MediaSlider = () => {
  const navigate = useNavigate();

  return (
    <section id="media" className="flex items-center justify-center min-h-auto md:h-auto">
      <div className="container mx-auto text-center mt-4">
        <div
          className="slider mt-4"
          style={{
            "--width": "400px",
            "--quantity": Partners.length,
          }}
        >
          <div className="list" onClick={() => {navigate('/workshop')}}>
            {Partners.map(({ id, src, alt }, index) => (
              <SliderItem key={id} src={src} alt={alt} position={index + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSlider;
