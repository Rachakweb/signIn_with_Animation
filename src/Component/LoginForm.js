import React from 'react'
import './LoginForm.css'
//import 'bootstrap/dist/css/bootstrap.min.css' 

function LoginForm() {
  return (

    <div className='body'>
      
    <div className='main bg-dark d-flex align-item-center justify-content-center w-100'>
    <div className='bubble'>
      <span style={{'--i':'11'}}></span>
      <span style={{'--i':'1'}}></span>
      <span style={{'--i':'22'}}></span>
      <span style={{'--i':'13'}}></span>
      <span style={{'--i':'14'}}></span>
      <span style={{'--i':'5'}}></span>
      <span style={{'--i':'6'}}></span>
      <span style={{'--i':'7'}}></span>
      <span style={{'--i':'8'}}></span>
      <span style={{'--i':'12'}}></span>
      <span style={{'--i':'17'}}></span>
      <span style={{'--i':'2'}}></span>
      <span style={{'--i':'3'}}></span>
      <span style={{'--i':'4'}}></span>
      <span style={{'--i':'9'}}></span>
      <span style={{'--i':'11'}}></span>
      <span style={{'--i':'1'}}></span>
      <span style={{'--i':'22'}}></span>
      <span style={{'--i':'13'}}></span>
      <span style={{'--i':'14'}}></span>
      <span style={{'--i':'5'}}></span>
      <span style={{'--i':'6'}}></span>
      <span style={{'--i':'7'}}></span>
      <span style={{'--i':'8'}}></span>
      <span style={{'--i':'12'}}></span>
      <span style={{'--i':'17'}}></span>
      <span style={{'--i':'2'}}></span>
      <span style={{'--i':'3'}}></span>
      <span style={{'--i':'4'}}></span>
      <span style={{'--i':'9'}}></span>
      
    </div>
    <div className='login'>
      
      {/* <div className='img mb-3' style={{}}></div> */}
      <form className='needs-validation'>
      <div className='form-group was-validated mb-2'>
        <label htmlFor='email' className='form-lable'>Email Address</label>
        <input type='email' className='form-control' required placeholder='Email'></input>
        {/* <div className='invalid-feedback'>
          Please Enter your email
        </div> */}
      </div>
      <div className='form-group was-validated  mb-2'>
        <label htmlFor='password' className='form-lable'>Password</label>
        <input type='password' className='form-control' required placeholder='Password'></input>
        {/* <div className='invalid-feedback'>
          Please Enter your password
        </div> */}
      </div>
      <div className='form-group form-check mb-2'>
        <input type='checkbox' className='form-check-input'></input>
        <label htmlFor='check' className='form-check-lable'>Remember Me</label>
      </div>
      <button type='submit' className='btn btn-info w-100 mt-2'>SIGN IN</button>
    </form>
    </div>
    </div>
    </div>
  )
}

export default LoginForm

