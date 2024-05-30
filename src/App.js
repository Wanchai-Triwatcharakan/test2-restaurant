import './App.css';
import Home from "./components/Home";
import Restaurant from "./components/Restaurant";
import {BrowserRouter,Routes,Route,Navigate } from "react-router-dom"
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/restaurant/:id" element={<Restaurant/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
        <Route path="/home" element={<Navigate to="/"/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
