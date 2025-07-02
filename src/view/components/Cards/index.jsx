import React from "react";
import "./cards.css";

export default function Cards({ img, title, text, link, repo }) {
  function clickCardNavigation() {
    window.open(link, "_blank");
  }

  function clickRepo(){
    window.open(repo, "_blank");
  }

  return (
    <>
    <div className="card" >
      <div className='card-content' onClick={clickCardNavigation}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
      <hr/>
      <div className='card-gitlink' onClick={clickRepo}>
          <i class="fa-brands fa-github " />
          Repositório
        </div>
    </div>
     
    </>
    
  );
}
