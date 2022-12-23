import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');// whether dark mode enable or not
  const[alert,SetAlert] = useState(null);


  const showAlert = (message,type) => {
    SetAlert({
      msg: message, 
      type: type
    })
    setTimeout(()=>{
      SetAlert(null);
    },1500);
  }


  const toggleMode= () =>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor ="#080d15";
    showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ="white";
      showAlert("Light Mode has been enabled", "success");
    }
  }
  
  return (
    <>
    {/* <Navbar titele ="TextUtils" aboutText="About TextUtils" />
    <Navbar/> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
    <TextForm showAlert={showAlert} heading="Enter the Text to analyze below" mode={mode} />
    {/* <About/> */}
    </div>
    </>
    
  );
}

export default App;
