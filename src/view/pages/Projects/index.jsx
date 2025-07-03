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
import fswDonald from "../../assets/img/projects/fswDonalds.png";

const cards = [
  {
    img: fswDonald,
    title: "Restaurante Online",
    text: "NextJs + PostgreeDB + TailwindCss + RestApi",
    link: "https://nextjs-donalds.vercel.app/fsw-donalds",
    repo: "https://github.com/repicco/nextjs-donalds",
  },
  {
    img: filmes,
    title: "Filmes",
    text: "React Js + Flex + RestApi",
    link: "https://filmespicco.netlify.app/",
    repo: "https://github.com/repicco/24.FabricaApps/tree/master/Projetos/filme",
  },
  {
    img: blogdev,
    title: "Blog Programador",
    text: "Firebase + React Js + Flexbox",
    link: "https://blogdev.netlify.app/",
    repo: "https://github.com/repicco/24.FabricaApps/tree/master/Projetos/blog",
  },
  {
    img: pet,
    title: "PetStore",
    text: "Flexbox + React Js + ReactSlick",
    link: "https://seri-e.netlify.app/",
    repo: "https://github.com/repicco/TestSeri.e",
  },
  {
    img: ingles,
    title: "Ingles",
    text: "Materialize + React Js + ReactSlick",
    link: "https://mariadrozina.netlify.app/",
    repo: "https://github.com/repicco/28.Ingles.Maria",
  },
  {
    img: cronometro,
    title: "Cronometro",
    text: "Flexbox + React Js",
    link: "https://cronometropicco.netlify.app/",
    repo: "https://github.com/repicco/24.FabricaApps/tree/master/Projetos/cronometro",
  },
  {
    img: finance,
    title: "Financiamento",
    text: "Materialize + React Js",
    link: "https://originfinance.netlify.app/",
    repo: "https://github.com/repicco/27.OriginFinance",
  },
  {
    img: churras,
    title: "Churrasco",
    text: "Bootstrap + Javascript (Vanilla)",
    link: "https://churras.netlify.app/",
    repo: "https://github.com/repicco/23.Bootstrap-JS.ChurrascoCalc",
  },
  {
    img: spotify,
    title: "Spotify Layout",
    text: "Bootstrap",
    link: "https://spotify-fake.netlify.app/",
    repo: "https://github.com/repicco/08.Bootstrap.SpotifyFake",
  },
];

export default function Projects() {
  return (
    <div className="container">
      {cards.map((el) => (
        <Cards
          img={el.img}
          title={el.title}
          text={el.text}
          link={el.link}
          repo={el.repo}
        />
      ))}
    </div>
  );
}
