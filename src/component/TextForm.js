import React,{ useState } from 'react'

export default function TextForm(props) {
    const[text,setText]= useState("")
    const handleUpClick=()=>{
      if(text.length===0){
        props.showAlert("Please Enter Text","danger");
      }else{
          const ntext=text.toUpperCase();
          setText(ntext);
          props.showAlert("Texts are converted in Uppercase","success");
      }
    }
    const handleChange=(event)=>{
        setText(event.target.value);
    }
    const handleloClick=()=>{
      if(text.length===0){
        props.showAlert("Please Enter Text","danger");
      }else{
        const ntext=text.toLowerCase();
        setText(ntext);
        props.showAlert("Texts are converted in Lowercase","success");
      }
       
  }
  const handletoClear=()=>{
    if(text.length===0){
      props.showAlert("Nothing to clear","danger");
    }else{
     setText("");
     props.showAlert("Texts are cleared","success");}
  }
  const handletoCopy=()=>{if(text.length===0){
    props.showAlert("Nothing to copy Please Enter Some Text","danger");
  }else{
    
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied Successfully","success");
  }

  }
  const handletoRemove=()=>{
    if(text.length===0){
      props.showAlert("Nothing to Separeate! Please Enter Text","danger");
    }else{
    var t=text.split(/[ ]+/);
    setText(t.join(" "));
    props.showAlert("Spaces are removed","success");
  }
  }
  return (
    <>
  <div className='parent'  >
  <div className='container' style={{backgroundColor:(props.mode=='dark')?'#042743':'white',color:(props.mode=='dark')?'white':'grey'}}>
        <h1>{props.heading}</h1>
      <textarea className="form-control" id="mtBox" style={{backgroundColor:(props.mode=='dark')?'grey':'white',color:(props.mode=='dark')?'white':'grey'}} placeholder='Enter text here' value={text} onChange={handleChange} rows="8"></textarea>
      <button className='btn btn-secondary my-3 mx-3' onClick={handleUpClick}>Convert to upper case</button>
      <button className='btn btn-secondary my-3 mx-3' onClick={handleloClick}>Convert to Lower case</button>
      <button className='btn btn-secondary my-3 mx-3' onClick={handletoClear}>Clear Text</button>
      <button className='btn btn-secondary my-3 mx-3' onClick={handletoCopy}>Copy Text</button>
      <button className='btn btn-secondary my-3 mx-3' onClick={handletoRemove}>Remove Extra Space</button>
    </div>
    <div className='container' style={{color:(props.mode=='dark')?'white':'grey'}}>
      <h2>Your Text Summary</h2>
      <p><b>{(text.length===0)?0:text.split(" ").length}</b> Words and <b>{text.length}</b> Character</p>
      <p><b>{0.8*text.length}</b> minutes times to read all the word</p>
      <h2>Preview</h2>
      <p>{(text.length===0)?"Please write some text for preview":text}</p>
    </div>
  </div>
    </>
    
  )
}
