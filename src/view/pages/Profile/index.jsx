import React from "react";
import "./profile.css";
import SkillComponent from "../../components/SkillComponent";

import react from "../../assets/img/react.png";
import next from "../../assets/img/nextJs.png";
import reactNative from "../../assets/img/reactNative.png";
import vue from "../../assets/img/vue.png";
import js from "../../assets/img/js.jpg";
import html from "../../assets/img/html.png";
import css from "../../assets/img/css.png";
import graphql from "../../assets/img/graphqlApi.png";
import rest from "../../assets/img/restApi.png";

const Skills = [
  { text: "React Js", img: react },
  { text: "Next Js", img: next },
  { text: "React Native", img: reactNative },
  { text: "Vue Js", img: vue },
  { text: "Javascript Es6", img: js },
  { text: "Html", img: html },
  { text: "Css", img: css },
  { text: "Graphql", img: graphql },
  { text: "Rest", img: rest },
];

export default function Profile() {
  function handleContact(type) {
    if (type === "github") {
      window.open("https://github.com/repicco", "_blank");
      return;
    }

    if (type === "linkedin") {
      window.open("https://www.linkedin.com/in/repicco/", "_blank");
      return;
    }

    window.open(
      "https://api.whatsapp.com/send/?phone=5511984944825&text=Ola%20vi%20seu%20portfolio",
      "_blank"
    );
  }

  return (
    <>
      <div className="container">
        <div className="profileContent">
          <h1>Apresentação</h1>
          <p>
            +15 anos de experiência na Área de TI, atuando com implantação de
            novas tecnologias, interface com clientes, suporte técnico,
            planejamento e execução de Projetos de Infraestrutura.
          </p>
          <p>
            5 anos dedicados na área de Desenvolvimento Frontend, atuando com
            sistemas em Jquery, Javascript, ReactJS e VueJS.
          </p>
          <p>
            <span>Objetivo profissional:</span> Atuar na área de Desenvolvimento
            Web - Front-end Sênior ReactJS.
          </p>

          <div className="icons">
            <i
              class="fa-brands fa-github"
              onClick={() => handleContact("github")}
            ></i>
            <i
              class="fa-brands fa-linkedin-in"
              onClick={() => handleContact("linkedin")}
            ></i>
            <i class="fa-brands fa-whatsapp" onClick={handleContact}></i>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="skillContent">
          {Skills.map((item) => (
            <div>
              <SkillComponent logo={item.img} text={item.text} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
