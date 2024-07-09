import React, { useState } from 'react'
import "./LoginSignup.css"

const loginsignup = () => {

    const [action,setAction] =useState("Login")
  return (
   <>
   <div className="conatiner">
    <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
    </div>
    <div className="inputs">
        {action==="Login"?"":<div className="input">
            {/* <img src="" alt="" /> */}
            <input type="text" placeholder='Username' />
        </div>}
        

        <div className="input">
            {/* <img src="" alt="" /> */}
            <input type="email" placeholder='Email' />
        </div>

        <div className="input">
            {/* <img src="" alt="" /> */}
            <input type="password" placeholder='Password' />
        </div>
    </div>
    {action==="Sign Up"?"":<div className="forgot-password">Lost Paswword? <span>Click Here</span></div>}
    
    <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>SignUp</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>LogIn</div>
    </div>
   </div>
   
   </>
  )
}

export default loginsignup
