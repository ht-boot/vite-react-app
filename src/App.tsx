import { useRoutes } from "react-router-dom";
import routers from "./router/index";

function App() {
  return useRoutes(routers);
}

export default App;
