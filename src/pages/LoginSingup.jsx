import React from 'react'

function LoginSingup() {
  return (
    <div className='loginsignup'>
    <div className="loginsignup-container">
      <h1>Sign up</h1>
      <div className="loginsignup-fields">
        <input type="text" placeholder='your nane' />
        <input type="email" placeholder='Email Address' />
        <input type="password" placeholder='password'/>
      </div>
      <button>Continue</button>
      <p className="loginsignup-login">Already have an account? <span style={{cursor:"pointer"}}>Login here</span></p>
      <div className="loginsignup-agree">
        <input type="checkbox" />
        <p>By continuing, i agree terms of use & privacy policy.  </p>
      </div>
    </div>
      
    </div>
  )
}

export default LoginSingup
