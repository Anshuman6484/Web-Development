import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import {
  createBrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState(`light`);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === `light`) {
      setmode(`dark`);
      document.body.style.backgroundColor = `black`;
      showAlert("Dark mode has been enabled", "success");
    } else {
      setmode(`light`);
      document.body.style.backgroundColor = `white`;
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* <Navbar title="React" aboutText="About Us" /> */}
      {/* <Navbar /> */}
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyse"
                  mode={mode}
                />
              }
            />
            <Route
              exact
              path="/about"
              element={<About showAlert={showAlert} mode={mode} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
