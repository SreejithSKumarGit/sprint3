import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import {Routes,Route} from "react-router-dom"

function App() {
  
  return <div>
    
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
    </Routes>

  </div>;
}

export default App;
