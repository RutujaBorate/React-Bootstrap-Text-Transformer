import React , {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();   // used js fun uppercase to convert text to uppercase
        setText(newText)
    }
    const handleLowClick = ()=>{
        console.log("lowercase was clicked" + text);
        let newText = text.toLowerCase();   // used js fun uppercase to convert text to uppercase
        setText(newText)
    }
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value)
    }

    const [text, setText] = useState(' ');
    // setText("new text");
  return (
    <>
    <div className = "container">
    <div className="mb-3">
    {/* <label for="MyBox" className="form-label">Example textarea</label> */}
    <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick}>Covert To UPPERCASE</button>
    <button className="btn btn-primary" onClick={handleLowClick}>Covert To lowercase</button>
    </div>
    <div className="container my-3">   
    {/* my-3 is class of bootsrap which makes distamce between ele */}
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} Word , {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Takes To Read The Summary</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
