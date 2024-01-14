import React from "react";
import GoogleImg from "../img/GoogleImg.png";
import logo  from "../img/logo.png";
import SingOutImg from "../img/SingOutbckg.png";
import { Link } from "react-router-dom";

function SignOut (){
    return(
        <div  className='containerflex'>
     <div className='containerleft'>
       <div className='topSection'>
    <img
    className='topSectionlogo'
     src={logo}  alt='logo'/>
     <div className="topSectionTxt">
     <span>Don't have an account? <Link to="/">Sign in</Link></span>
    </div>
     </div>

<div className="headingSection headingMG">
<h2 >Get started absolutely free.</h2>
</div>

<form action="" className='form'>

    {/* FORM NAMES */}
    <div className="formContainer">
        <div className="formFlex">
    <label htmlFor="">First Name</label>
      <input 
    placeholder='First name'
    type='name'
    name='username'/>
    </div>
    <div className="formFlex">
    <label htmlFor="">Last Name</label>
    <input 
        placeholder=''
    type='name'
    name='name'/>
    </div>
    </div>

        {/* FORM EMAILS DETAILS */}
        <div className="formContainer">
        <div className="formFlex">
    <label htmlFor="">E-mail</label>
      <input 
    placeholder='Email address'
    type='text'
    name='text'/>
    </div>
    <div className="formFlex">
    <label htmlFor="">Phone</label>
    <input className='inputSection'
        placeholder='Password'
    type='number'
    name='number'/>
    </div>
    </div>

        {/* FORM PASSWORD INPUT */}
    <div className="formContainer">
        <div className="formFlex">
    <label htmlFor="">Password</label>
      <input 
    placeholder='Password'
    type='password'
    name='password'/>
    </div>
    <div className="formFlex">
    <label htmlFor="">Confirm Password</label>
    <input 
        placeholder='Password'
    type='Password'
    name='Password'/>
    </div>
    </div>

<div className="btn signinBtn">
   <button >Create account</button>
   <button ><img  src={GoogleImg} alt=""></img><span className='text'>Sign in with Google</span></button>
   </div>

   </form>
</div>
<div className="backgroundimg">
     <img src={SingOutImg} alt="image1" />

     </div>

</div>
    )

}
export default SignOut;