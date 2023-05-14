import React from "react";
import "./skillComponent.css";

export default function SkillComponent({ logo, text }) {
  return (
    <>
      <div className="cardImg">
        <img src={logo} alt="" />
        <p>{text}</p>
      </div>
    </>
  );
}
