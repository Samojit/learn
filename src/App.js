import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
      document.title = "textUtils - Light Mode";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#15202b";
      showAlert("Dark Mode Enabled", "success");
      document.title = "textUtils - Dark Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route
            exact
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
