import { useRoutes } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer/Footer";
import routes from "./routes";

function App() {

  const router = useRoutes(routes)


  return (
    <div className="App">
      {router}
      <Footer />
    </div>
  );
}

export default App;
