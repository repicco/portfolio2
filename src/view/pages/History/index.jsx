import React from "react";
import "./history.css";

import Accordion from "../../components/Accordion";

const collapse = [
  {
    title:
      "2024 - Atual | Global Hitss - Claro Clube | Dev Front-end Sênior React",
    description:
      "Mantendo a mesma estrutura do sistema Web anterior, atuando em paralelo também com React Native para criação de novas features e sustentação do legado. Utilizando Redux + Saga para gerenciamento de estados,  novos componentes utilizando arquitetura DDD separando as camadas de négócios, lógica e apresentação.",
    dataTarget: "7",
    collapseClass: "show",
  },
  {
    title:
      "2022 - 2024 | Ultracon - Claro Clube | Dev Front-end Sênior React JS",
    description:
      "Criação de um novo sistema para o Claro Clube utilizando o React js com o Webpack gerando um web component para utilização em Vue js e Backbone js. A conexão com o backend utiliza Graphql e Rest Apis, estrutura de ContextApi para store e novos componentes utilizando arquitetura MVC (pastas) com SOLID (lógicas e componentes).",
    dataTarget: "6",
    collapseClass: "",
  },
  {
    title: "2021 - 2022| A55 Crédito | Dev Front-end Sênior Vue JS",
    description:
      "Manutenção de sistema de credenciamento utilizando o Framework Vuejs, criação de modais para cadastro, utilização de formulários e conexão com backend para comunicação de leads. Auxílio na reestruturação da responsividade da plataforma, trabalhando em metodologia 100% SCRUM em conjunto com outros Fronts no mesmo ambiente, utilizando o Git e programação em pares.",
    dataTarget: "5",
    collapseClass: "",
  },
  {
    title: "2020 - 2021| Newpost | Dev Front-end Pleno JS",
    description:
      "Criação de Web Site, manutenção e arquitetura de novos projetos para Aplicação Web específica da empresa voltado diferentes clientes totalizando 6 aplicações de diferentes mercados, atuando com desenvolvimento de Dashboards Responsivos com uso de Datatable e AmCharts para retorno de APIs consumidas e criadas em conjunto com BackEnd. Auxílio a equipe de Design para criação de novos Layouts e recursos responsivos para o Web Site para as Aplicações Web.",
    dataTarget: "4",
    collapseClass: "",
  },
  {
    title: "2020 | Oliver Latam | Dev Front-end Pleno Jr",
    description:
      "Configuração de Email-Marketing (HTML + CSS) e animações Google Web Designer.",
    dataTarget: "3",
    collapseClass: "",
  },
  {
    title: "2017 - Atual | Freelancer Front-end",
    description:
      "Criação de Web Sites tipo SPA e PWA, com alto desempenho e performance, utilizando HTML, CSS, JS e ReactJS.",
    dataTarget: "2",
    collapseClass: "",
  },
  {
    title: "2006 – 2020 | Atuando com projetos de redes e infraestrutura",
    description:
      "Suporte e instalação de servidores e desktops, configuração de dispositivos, implantação de projetos de infra-estrutura em geral",
    dataTarget: "1",
    collapseClass: "",
  },
];

export default function History() {
  return (
    <div className="container">
      <div class="accordion" id="history">
        {collapse.map((el) => (
          <>
            <Accordion
              dataTarget={el.dataTarget}
              title={el.title}
              collapseClass={el.collapseClass}
              description={el.description}
            />
          </>
        ))}
      </div>
    </div>
  );
}
