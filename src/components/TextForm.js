import React, {useState} from 'react'

 
// the value of the'text' is the default which we set i.r 'Enter text here', and whenever to update the text element, we will make use of the setText function

export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("Uppercase was clicked" +text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", 'success');
    }
    const handleLoClick = () => {
        //console.log("Uppercase was clicked" +text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", 'success');
    }
    const handleClearClick = () => {
        //console.log("Uppercase was clicked" +text);
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!", 'success');
    }
    const handleOnChange = (event) => {
        //console.log("OnChange");
        setText(event.target.value);
    }

    const handleCopy = () => {
        let text = document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clip Board", 'success');
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra spaces!", 'success');
    }
    const [text, setText] = useState("");
    //text = 'new text'; //wrong way to change the text
    //setText("next text"); //correct way to change the state
    return (
        <>
            <div className='container' style={{color: props.mode === 'dark'? 'white': '#042743'}}>
            <h1 >{props.heading} </h1>
            <div className='mb-3'>
                <textarea className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? 'grey': 'white',
                color:props.mode === 'dark'? 'white': '#042743'}} id='mybox' rows='8'></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra spaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode === 'dark'? 'white': '#042743'}}>
                <h2>Your text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length >0 ? text: 'Enter Something in TextBox Above to Preview it here'}</p>
            </div>
        </>
    
  )
}
