import { HashRouter } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Admin from "./Pages/Admin";

function App() {
  return (
    <HashRouter>
      <div>
        <Navbar />
        <Admin />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
