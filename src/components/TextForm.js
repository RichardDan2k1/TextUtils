import React , { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase !", "success");
    }
    const handleLoClick = ()=>{
        //console.log("Lower case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase !", "success");
    }
    const handleClearClick = ()=>{
        //console.log("clear text" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared !", "success");
    }
   
    const handleCopy = () =>{
        var text= document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied ", "success");
    }
    
    const handleOnChange = (event)=>{
       
        setText(event.target.value);
        
    }
    const [text, setText] = useState('');

    
  return (
    <>
        <div className='container' style={{color: props.mode==='dark' ? 'white':'#080d15'}}>
        <h1>{props.heading}</h1>

        <div className="mb-3">

        <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark' ? 'grey':'white' , color: props.mode==='dark' ? 'white':'#080d15'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
      
       
        </div>
    <div className="container my-3" style={{color: props.mode==='dark' ? 'white':'#080d15'}}>
        <h2>Your Text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p> 
        <p>{0.008*text.split(" ").length} minutes to read </p>
        <h2>Preview</h2>
        <p>{text.length>0? text:"Enter something to preview here"}</p>
    </div>
    </>
  )
}
