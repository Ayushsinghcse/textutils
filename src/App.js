import { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';

// import{
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode or light mode
  const [alert, setAlert]=useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1000);
  }
  const toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor='#19213b';
      showAlert("dark mode has been enabled", "success");
      document.title = "Text-Util: Dark Mode";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled", "success");
    }
  }
  return (
    <>
    {/* <Navbar/> */}
 {/* passing a datatype is nothing but props in react */}
  {/* // <Router> */}
    <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}  />
    <div className="container my-3">
       {/* <Routes>
         <Route exact path="/about"
           element={<About/>}
         />
         <Route exact path="/"
           element={ */}
        <TextForm showAlert={showAlert} heading="enter your text to analyse below" mode={mode}></TextForm>

      {/* // </Routes> */}
    </div>
  {/* // </Router> */}
  </>
  );
}

export default App;
