import { createBrowserRouter } from "react-router-dom";

import Layout from "../../view/Layout";
import Profile from "../../view/pages/Profile";
import History from "../../view/pages/History";
import Projects from "../../view/pages/Projects";
import ProjectsApps from "../../view/pages/ProjectsApps";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Profile />
      </Layout>
    ),
  },
  {
    path: "/history",
    element: (
      <Layout>
        <History />
      </Layout>
    ),
  },
  {
    path: "/projects",
    element: (
      <Layout>
        <Projects />
      </Layout>
    ),
  },
  {
    path: "/projects_apps",
    element: (
      <Layout>
        <ProjectsApps />
      </Layout>
    ),
  },
  {
    path: "*",
    element: <Layout>{/* <Projects /> Erro element*/}</Layout>,
  },
]);
