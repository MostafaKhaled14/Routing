import {createHashRouter, RouterProvider} from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Error from "./Components/Error/Error";

function App() {
  const routes = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {index:true, element: <Home />},
        { path: "/home", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/portfolio", element: <Portfolio /> },
        { path: "/contact", element: <Contact /> },
        { path: "*", element: <Error /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}
export default App;
