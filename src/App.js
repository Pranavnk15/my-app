import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [Mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const toggleMode = () => {
    if(Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar title="TextUtils"  mode={Mode} toggleMode={toggleMode}aboutText="About TextUtils"/>
      <div className="container my-3">
        <TextForm mode={Mode} heading="Enter the text to analyze below"/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
