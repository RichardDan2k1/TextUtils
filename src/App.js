import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');// whether dark mode enable or not
  
  const toggleMode= () =>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor ="#080d15";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ="white";
    }
  }
  
  return (
    <>
    {/* <Navbar titele ="TextUtils" aboutText="About TextUtils" />
    <Navbar/> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    
    <div className="container">
    <TextForm heading="Enter the Text to analyze below" mode={mode} />
    {/* <About/> */}
    </div>
    </>
    
  );
}

export default App;
