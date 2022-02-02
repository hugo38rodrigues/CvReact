import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import Competence from "./pages/Competence";
import Contact from "./pages/Contact";
import Portefolio from "./pages/Portefolio";
import NotFound from "./pages/NotFound";

function App() {
  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element ={<Home/>}/>
        <Route path="/Competence" element ={<Competence/>}/>
        <Route path="/Contact"  element ={<Contact/>}/>
        <Route path="/Portfolio" element ={<Portefolio/>}/>
        <Route path ="*"  element ={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
