import React, { useContext } from 'react'
import { Context } from '../../context'
import './parol.css'
const Parol = () => {
    const {enter,pass,show,setPass,setShow} = useContext(Context)
  return (
    <>
    <div className="pinkod">
        <input type={show ? 'text' : 'password'} value={pass} onChange={(e) => setPass(e.target.value)}/>
        <p onClick={() => setShow((prev) => !prev)}>👁️</p>
        <button
        style={{background: pass === '1234' ? 'lime' : 'red'}}
        onClick={enter}>Kirish</button>
    </div>
    </>
  )
}

export default Parol
