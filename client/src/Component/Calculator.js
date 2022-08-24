import React from 'react';
 import {useState} from "react"

function Calculator() {

  const [val, setVal]=useState("")
  
  const backspace=()=>{
    try{
      setVal(val.slice(0,-1))
    }
    catch{
      setVal("")
    }
  }
  const handleCalculate=()=>{
    try{
    const ans=eval(val)
    setVal(ans)
    }catch{
      setVal("Remove 0 From Start")
    }
  }
    
  return (
    <>
        <div className='container' >
          <div className='row'>
            <div className='col-12'>
              <h1 className='display-5 fw-bolder text-center text-primary'>Calculator</h1>
              <hr/>
            </div>
          </div>
          <div className='row justify-content-center' >
              <div className='col-md-4'>
                  <div class="card" style={{width: "25rem",height:"33rem"}}>
                    <div class="card-body " >
                      <input className='form-control shadow-lg  p-3 mb-4 bg-body rounded' value={val} onKeyDown={e => e.key === 'Enter' && handleCalculate()} onChange={(e)=>setVal(e.target.value)}></input>
                      <div className='row'>
                          <div className='col-3'>
                            <button className="btn btn-light shadow p-4 fs-4 text-primary" style={{margin:"10px"}} value="1" onClick={(e)=>setVal(val+e.target.value)}>1</button>
                          </div>
                          <div className='col-3'>
                            <button className="btn btn-light shadow p-4 fs-4 text-primary" style={{margin:"10px"}} value="2" onClick={(e)=>setVal(val+e.target.value)}>2</button>
                          </div>
                          <div className='col-3'>
                            <button className="btn btn-light shadow p-4 fs-4 text-primary" style={{margin:"10px"}} value="36" onClick={(e)=>setVal(val+e.target.value)}>3</button>
                          </div>
                          <div className='col-3'>
                            <button className="btn btn-light shadow p-4 fs-4 text-primary" style={{margin:"10px"}}  onClick={(e)=>backspace()}>C</button>
                          </div>
                      </div>
                      <div className='row'>
                          <div className='col-3'>
                            <button className="btn btn-light shadow p-4 fs-4 text-primary" style={{margin:"10px"}} value="4" onClick={(e)=>setVal(val+e.target.value)}>4</button>
                          </div>
                          <div className='col-3'>
                            <button className="btn btn-light shadow p-4 fs-4 text-primary" style={{margin:"10px"}} value="5" onClick={(e)=>setVal(val+e.target.value)}>5</button>
                          </div>
                          <div className='col-3'>
                            <button className="btn btn-light shadow p-4 fs-4 text-primary" style={{margin:"10px"}} value="6" onClick={(e)=>setVal(val+e.target.value)}>6</button>
                          </div>
                          <div className='col-3'>
                            <button className="btn btn-light shadow p-4 fs-4 text-primary" style={{margin:"10px"}} value="+" onClick={(e)=>setVal(val+e.target.value)}>+</button>
                          </div>
                      </div>
                      <div className='row'>
                          <div className='col-3'>
                            <button className="btn btn-light shadow p-4 fs-4 text-primary" style={{margin:"10px"}} value="7" onClick={(e)=>setVal(val+e.target.value)}>7</button>
                          </div>
                          <div className='col-3'>
                            <button className="btn btn-light shadow p-4 fs-4 text-primary" style={{margin:"10px"}} value="8" onClick={(e)=>setVal(val+e.target.value)}>8</button>
                          </div>
                          <div className='col-3'>
                            <button className="btn btn-light shadow p-4 fs-4 text-primary" style={{margin:"10px"}} value="9" onClick={(e)=>setVal(val+e.target.value)}>9</button>
                          </div>
                          <div className='col-3'>
                            <button className="btn btn-light shadow p-4 fs-4 text-primary" style={{margin:"10px"}} value="*" onClick={(e)=>setVal(val+e.target.value)}>*</button>
                          </div>
                      </div>
                      <div className='row'>
                          <div className='col-3'>
                            <button className="btn btn-light shadow p-4 fs-4 text-primary" style={{margin:"10px"}} value="." onClick={(e)=>setVal(val+e.target.value)}>.</button>
                          </div>
                          <div className='col-3'>
                            <button className="btn btn-light shadow p-4 fs-4 text-primary" style={{margin:"10px"}} value="0" onClick={(e)=>setVal(val+e.target.value)}>0</button>
                          </div>
                          <div className='col-3'>
                            <button className="btn btn-light shadow p-4 fs-4 text-primary" style={{margin:"10px"}} value="=" onClick={()=>handleCalculate()}>=</button>
                          </div>
                          <div className='col-3'>
                            <button className="btn btn-light shadow p-4 fs-4 text-primary" style={{margin:"10px"}} value="-" onClick={(e)=>setVal(val+e.target.value)}>-</button>
                          </div>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
        </div>
    </>
  )
}

export default Calculator