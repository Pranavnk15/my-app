import React, {useState} from 'react'

 
// the value of the'text' is the default which we set i.r 'Enter text here', and whenever to update the text element, we will make use of the setText function

export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("Uppercase was clicked" +text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        //console.log("Uppercase was clicked" +text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () => {
        //console.log("Uppercase was clicked" +text);
        let newText = "";
        setText(newText);
    }
    const handleOnChange = (event) => {
        //console.log("OnChange");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    //text = 'new text'; //wrong way to change the text
    //setText("next text"); //correct way to change the state
    return (
        <>
            <div className='container'>
            <h1>{props.heading} </h1>
            <div className='mb-3'>
                <textarea className='form-control' value={text} onChange={handleOnChange}id='mybox' rows='8'></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx2" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx2" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h2>Your text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    
  )
}
