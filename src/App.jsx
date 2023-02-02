import { RouterProvider } from "react-router";
import { route } from "./route.jsx";


const App = () => {

  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App