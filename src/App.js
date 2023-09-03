import "./App.css";
import { Navbar } from "./components/Navbar";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Home } from "./pages/home/home.page";
import { About } from "./pages/about.page";
import { Contact } from "./pages/contact.page";
import { Biology } from "./pages/biology.page";
import { Physics } from "./pages/physics.page";
import { Chemistry } from "./pages/chemistry.page";
import { GeneralMath } from "./pages/general-maths.page";
import { BusinessMath } from "./pages/business-maths.page";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/biology" element={<Biology/>}></Route>
          <Route exact path="/physics" element={<Physics/>}></Route>
          <Route exact path="/chemistry" element={<Chemistry/>}></Route>
          <Route exact path="/general-maths" element={<GeneralMath/>}></Route>
          <Route exact path="/business-maths" element={<BusinessMath/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
