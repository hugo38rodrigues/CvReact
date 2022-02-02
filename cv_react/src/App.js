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
        <Route path="/" exact element ={<Competence/>}/>
        <Route path="/" exact element ={<Contact/>}/>
        <Route path="/" exact element ={<Portefolio/>}/>
        <Route path="/" exact element ={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
