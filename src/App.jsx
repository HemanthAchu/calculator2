
import { useState } from 'react'
import './App.css'

function App() {
 
  const [result , setresult]=useState()
  const [input  ,setinput]=useState('')

  const set=()=>{
    setinput('')
    setresult('')
  }


  const ac=()=>{
  setinput(input.slice(0,-1))
  }
  return (
    <>
      <div className='main' >  
<div className="main2">
 <div className='hem'> <div className="input">
<input className='input1' value={result} type="text" readOnly onChange={e=>setresult(e.target.value)} />
<input className='input1' value={input} type="text" readOnly onChange={e=>setinput(e.target.value)}/>
  </div></div>
 <div className='button1'>
  
 <div className="button">
 <button onClick={()=>ac()} className='btn2'>AC</button>
<button onClick={()=>set()} className='btn'>Del</button>
<button onClick={e=>setinput(input+"/")} className='btn'>/</button>

  </div>

   <div className="button">
<button onClick={e=>setinput((input+"9"),setresult(''))} className='btn'>9</button>
<button onClick={e=>setinput((input+"8"),setresult(''))} className='btn'>8</button>
<button onClick={e=>setinput((input+"7"),setresult(''))} className='btn'>7</button>
<button onClick={e=>setinput((input+"*"),setresult(''))} className='btn'>*</button>
  </div>
  <div className="button">
<button onClick={e=>setinput((input+"6"),setresult(''))} className='btn'>6</button>
<button onClick={e=>setinput((input+"5"),setresult(''))} className='btn'>5</button>
<button onClick={e=>setinput((input+"4"),setresult(''))} className='btn'>4</button>
<button onClick={e=>setinput((input+"-"),setresult(''))} className='btn'>-</button>
  </div>
  <div className="button">
<button onClick={e=>setinput((input+"3"),setresult(''))} className='btn'>3</button>
<button onClick={e=>setinput((input+"2"),setresult(''))} className='btn'>2</button>
<button onClick={e=>setinput((input+"1"),setresult(''))} className='btn'>1</button>
<button onClick={e=>setinput((input+"+"),setresult(''))} className='btn'>+</button>
  </div>
  <div className="button">

<button onClick={e=>setinput(input+"0")} className='btn'>0</button>
<button onClick={e=>setinput(input+".")} className='btn'>.</button>
<button className='btn2' onClick={()=>setresult(eval(input),setinput(""))}>=</button>
  </div>
  
  </div>
</div>
      </div>
    </>
  )
}

export default App
