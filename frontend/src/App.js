
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Profile from "./components/Profile";
import Createpost from "./components/Createpost";
import Modal from "./components/Modal";


function App() {

  return (
    <BrowserRouter>
      <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/createpost" element={<Createpost/>}/>
            <Route path="/modal" element={<Modal/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
