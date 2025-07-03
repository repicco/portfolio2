import React from "react";
import "./menu.css";

import profileImg from "../../assets/img/defaultProfile.jpg";
import { Link } from "react-router-dom";

const menu = [
  { path: "/", btn: "Perfil" },
  { path: "/history", btn: "Histórico" },
  { path: "/projects", btn: "Projetos" },
  { path: "/projects_apps", btn: "Projetos Apps" },
];

export default function Menu({ activeButton, setActiveButton, mob }) {
  if (mob) {
    return (
      <div className="menuBtns mob">
        {menu.map((el) => (
          <Link
            to={el.path}
            className={activeButton === el.btn ? "active" : ""}
            onClick={() => setActiveButton(el.btn)}
          >
            {el.btn}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="menu">
      <div className="menuImg">
        <img src={profileImg} alt="perfil" />
      </div>
      <h2>Renato Picco</h2>
      <div className="menuBtns">
        {menu.map((el) => (
          <Link
            to={el.path}
            className={activeButton === el.btn ? "active" : ""}
            onClick={() => setActiveButton(el.btn)}
          >
            {el.btn}
          </Link>
        ))}
      </div>
    </div>
  );
}
