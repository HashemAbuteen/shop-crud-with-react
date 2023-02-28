import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Shoe from "./components/Shoe";
import Shoes from "./components/Shoes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shoes",
    element: <Shoes />,
  },
  {
    path: "/shoe/:id",
    element: <Shoe />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
