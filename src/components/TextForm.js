import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpperCase = ()=>{
    // console.log("uppercase was clicked." + text)
    let newText = text.toUpperCase()
    setText(newText);
    props.showAlert("CONVERTED TO UPPER CASE.", "success");
  }
  const handleLowerCase = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lower case", "success");
  }

  const handleClearText = ()=>{
    let newText = '';
    setText(newText);
    props.showAlert("You Cleared The Text", "success");
  }

  const handlePunctuation = ()=>{
    let newText = "";
    for(let i=0;i<text.length;i++){
      if(text[i]===','||text[i]==='!'||text[i]==='"'||text[i]==='?'){
        continue;
      }
      newText+=text[i];
    }
    setText(newText);
    props.showAlert("Punctuation Has Been Removed From The Text", "success");
  }

  const handleOnChange = (event)=>{
    // console.log("on change");
    setText(event.target.value);
  }

    const [text, setText] = useState("");
    // text = "this is the way"; //wrong way to update value
    // setText("this is the way"); // correct way to update the value
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control"
        value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpperCase}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerCase}>Convert To LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handlePunctuation}>Remove Punctuations</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Text Summary</h2>
      <p>{text.split(" ").length-1} words, {text.length} charecters.</p>
      <p>You Can Read The Given In Around {0.008*text.split(" ").length} Minutes</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"enter your text to preview it"}</p>
    </div>
    </>
  )
}
