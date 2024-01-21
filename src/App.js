import React,{useState} from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';

function App() {
  const [mode,setMode]=useState("light");
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }
  const toggleMode=()=>{
    if(mode==="dark")
   { setMode("light");
    document.body.style.backgroundColor='white';
    showAlert("Light Mode Enabled","success");
    

  }
   else{
    setMode("dark");
    document.body.style.backgroundColor='#042743';
    showAlert("Dark Mode Enabled","success");
    
   }
  }
  return (
   <>
   <Navbar title="TEXTUTILS" mode={mode} toggle={toggleMode}/>
   <Alert alert={alert}/>
   <div className='container my-3' >
   
   <TextForm heading="Enter text to analyze." mode={mode} showAlert={showAlert} />
   </div>
   </>
  );
}

export default App;
