import React, { useEffect, useState } from "react";
import "./layout.css";
import { useLocation } from "react-router-dom";

import Menu from "../components/Menu";

export default function Layout({ children }) {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState("");
  const [mobOpen, setMobOpen] = useState(false);

  useEffect(() => {
    console.log(location);
    if (location.pathname === "/projects") {
      setActiveButton("Projetos");
      return;
    }

    if (location.pathname === "/history") {
      setActiveButton("Histórico");
      return;
    }

    setActiveButton("Perfil");
  }, [location]);

  return (
    <>
      <header>
        <Menu activeButton={activeButton} setActiveButton={setActiveButton} />

        <div className="containerProfile">
          <div className="header">
            <h1>{activeButton}</h1>

            <div className="menubtn">
              {mobOpen ? (
                <i
                  class="fa-solid fa-xmark"
                  onClick={() => setMobOpen(false)}
                ></i>
              ) : (
                <i
                  class="fa-solid fa-bars"
                  onClick={() => setMobOpen(true)}
                ></i>
              )}
            </div>
          </div>
          <div className="menuMob">
            {mobOpen && (
              <Menu
                activeButton={activeButton}
                setActiveButton={setActiveButton}
                mob={true}
              />
            )}
          </div>
          <div>{children}</div>
        </div>
      </header>
    </>
  );
}
