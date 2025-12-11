import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Historia from "./pages/Historia";
import Modernismo from "./pages/Modernismo";
import Adivinacion from "./pages/Adivinacion";
import Inicio from "./pages/Inicio";
import ArcanumCalculator from "./components/ArcanumCalculator";

export const router = createBrowserRouter([
  {
    path: "/",
    // Layout es el elementro ppal y renderizamos las páginas
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Inicio />,
      },
      {
        path: "historia",
        element: <Historia />,
      },
      {
        path: "modernismo",
        element: <Modernismo />,
      },
      {
        path: "adivinacion",
        element: <Adivinacion />,
      },

      {
        path: "mi-arcano",
        element: <ArcanumCalculator />,
      },
    ],
  },
]);
