import React from "react";
import "./cards.css";

export default function Cards({ img, title, text, link }) {
  function handleNavigation() {
    window.open(link, "_blank");
  }

  return (
    <div className="card" onClick={handleNavigation}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}
