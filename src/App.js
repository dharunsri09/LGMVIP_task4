import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function App() {
  const [txt,setTxt]=useState("");
 
  return (
    <div>
      <div className="Box">
        <div className='btn-style1'>
          <i>MD'S Calculator</i>
          <p>{txt}</p></div>
        <div className="btn-style"><button onClick={()=>setTxt(txt.substring(0,txt.length-1))} className="buttonC ">C</button></div>
        <div className="btn-style"><button onClick={()=>setTxt(" ")} className="button1 ">AC</button></div>
        <div className="btn-style"><button onClick={()=>setTxt(txt+"*")} className="button1 ">*</button></div>
        <div className="btn-style"><button onClick={()=>setTxt(txt+"/")} className="button1 ">/</button></div>
        <div className="btn-style"><button onClick={()=>setTxt(txt+"9")} className="button1 ">9</button></div>
        <div className="btn-style"><button onClick={()=>setTxt(txt+"8")} className="button1 ">8</button></div>
        <div className="btn-style"><button onClick={()=>setTxt(txt+"7")} className="button1 ">7</button></div>
        <div className="btn-style"><button onClick={()=>setTxt(txt+"+")} className="button1 ">+</button></div>
        <div className="btn-style"><button onClick={()=>setTxt(txt+"6")} className="button1 ">6</button></div>
        <div className="btn-style"><button onClick={()=>setTxt(txt+"5")} className="button1 ">5</button></div>
        <div className="btn-style"><button onClick={()=>setTxt(txt+"4")} className="button1 ">4</button></div>
        <div className="btn-style"><button onClick={()=>setTxt(txt+"-")} className="button1 ">-</button></div>
        <div className="btn-style"><button onClick={()=>setTxt(txt+"3")} className="button1 ">3</button></div>
        <div className="btn-style"><button onClick={()=>setTxt(txt+"2")} className="button1 ">2</button></div>
        <div className="btn-style"><button onClick={()=>setTxt(txt+"1")} className="button1 ">1</button></div>
        <div className="btn-style"><button onClick={()=>setTxt(txt+"%")} className="button1 ">%</button></div>
        <div className="btn-style"><button onClick={()=>setTxt(txt+".")} className="button1 ">.</button></div>
        <div className="btn-style"><button onClick={()=>setTxt(txt+"0")} className="button1 ">0</button></div>
        <div className="equal"><button onClick={()=>{
          try {
            setTxt(eval(txt))
          } catch (error) {
            setTxt("Invalid")
          }
          }
          } className="butt">=</button></div>
      </div> 

    </div>
  );
}

export default App;
