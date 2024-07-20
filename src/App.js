import "./App.css";
import { Navbar } from './components/Navbar';
import { Route,Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import {Dashboard} from "./pages/Dashboard";
import {Login} from "./pages/Login";
import { Signup} from "./pages/Signup";
import { useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn]= useState(false);
  return (
    <div className="App">
      <Navbar  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/Signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </div>
  );
}

export default App;
