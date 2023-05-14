import React from "react";
import "./projects.css";

import Cards from "../../components/Cards";

import churras from "../../assets/img/projects/churras.png";
import finance from "../../assets/img/projects/finance.png";
import cronometro from "../../assets/img/projects/cronometro.png";
import ingles from "../../assets/img/projects/ingles.png";
import pet from "../../assets/img/projects/pet.png";
import filmes from "../../assets/img/projects/filmes.png";
import blogdev from "../../assets/img/projects/blogdev.png";
import spotify from "../../assets/img/projects/spotify.png";

const cards = [
  {
    img: filmes,
    title: "Filmes",
    text: "Vue Js + Flex + RestApi",
    link: "https://filmes-vuejs.netlify.app/",
  },
  {
    img: blogdev,
    title: "Blog Programador",
    text: "Firebase + React Js + Flexbox",
    link: "https://blogdev.netlify.app/",
  },
  {
    img: pet,
    title: "PetStore",
    text: "Flexbox + React Js + ReactSlick",
    link: "https://seri-e.netlify.app/",
  },
  {
    img: ingles,
    title: "Ingles",
    text: "Materialize + React Js + ReactSlick",
    link: "https://mariadrozina.netlify.app/",
  },
  {
    img: cronometro,
    title: "Cronometro",
    text: "Flexbox + React Js",
    link: "https://cronometropicco.netlify.app/",
  },
  {
    img: finance,
    title: "Financiamento",
    text: "Materialize + React Js",
    link: "https://originfinance.netlify.app/",
  },
  {
    img: churras,
    title: "Churrasco",
    text: "Bootstrap + Javascript (Vanilla)",
    link: "https://churras.netlify.app/",
  },
  {
    img: spotify,
    title: "Spotify Layout",
    text: "Bootstrap",
    link: "https://spotify-fake.netlify.app/",
  },
];

export default function History() {
  return (
    <div className="container">
      {cards.map((el) => (
        <Cards img={el.img} title={el.title} text={el.text} link={el.link} />
      ))}
    </div>
  );
}
