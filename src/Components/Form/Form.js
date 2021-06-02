import './Form.css';
import {useState} from 'react';
import { signup, userSignup } from '../Utility/Utility';
// import { signup } from '../../../../Controllers/Controllers';
const Form =()=>{
var[email,setemail]=useState("");
var[name,setname]=useState("");
var[password,setpassword]=useState("");

var submit=(e)=>{
    e.preventDefault();
    var data1={
        name,
        email,
        password
    }
   userSignup(data1)
    // signup(data1)
}
    const  cambiar_login =()=> {
        document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";  
      document.querySelector('.cont_form_login').style.display = "block";
      document.querySelector('.cont_form_sign_up').style.opacity = "0";               
      
      setTimeout(function(){  document.querySelector('.cont_form_login').style.opacity = "1"; },400);  
        
      setTimeout(function(){    
      document.querySelector('.cont_form_sign_up').style.display = "none";
      },200);  
        }
      
      const cambiar_sign_up=(at)=> {
        document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
        document.querySelector('.cont_form_sign_up').style.display = "block";
      document.querySelector('.cont_form_login').style.opacity = "0";
        
      setTimeout(function(){  document.querySelector('.cont_form_sign_up').style.opacity = "1";
      },100);  
      
      setTimeout(function(){   document.querySelector('.cont_form_login').style.display = "none";
      },400);  
      
      
      }    
      
      
      
      const ocultar_login_sign_up=()=> {
      
      document.querySelector('.cont_forms').className = "cont_forms";  
      document.querySelector('.cont_form_sign_up').style.opacity = "0";               
      document.querySelector('.cont_form_login').style.opacity = "0"; 
      
      setTimeout(function(){
      document.querySelector('.cont_form_sign_up').style.display = "none";
      document.querySelector('.cont_form_login').style.display = "none";
      },500);  
        
        }
      
    return(
        <>
        <div classNameName="cotn_principal">
<div className="cont_centrar">

  <div className="cont_login">
<div className="cont_info_log_sign_up">
      <div className="col_md_login">
<div className="cont_ba_opcitiy">
        
        <h2>LOGIN</h2>  
  <p>Click below to login</p> 
  <button className="btn_login" onClick={cambiar_login}>LOGIN</button>
  </div>
  </div>
<div className="col_md_sign_up">
<div className="cont_ba_opcitiy">
  <h2>SIGN UP</h2>

  
  <p>Click below to signup</p>

  <button className="btn_sign_up" onClick={cambiar_sign_up}>SIGN UP</button>
</div>
  </div>
       </div>

    
    <div className="cont_back_info">
       <div className="cont_img_back_grey">
       <img src="https://images.unsplash.com/42/U7Fc1sy5SCUDIu4tlJY3_NY_by_PhilippHenzler_philmotion.de.jpg?ixlib=rb-0.3.5&q=50&fm=jpg&crop=entropy&s=7686972873678f32efaf2cd79671673d" alt="" />
       </div>
       
    </div>
<div className="cont_forms" >
    <div className="cont_img_back_">
       <img src="https://images.unsplash.com/42/U7Fc1sy5SCUDIu4tlJY3_NY_by_PhilippHenzler_philmotion.de.jpg?ixlib=rb-0.3.5&q=50&fm=jpg&crop=entropy&s=7686972873678f32efaf2cd79671673d" alt="" />
       </div>
 <div className="cont_form_login">
<a href="#" onClick={ocultar_login_sign_up} ><i  className="material-icons">&#xE5C4;</i></a>
   <h2>LOGIN</h2>
 <input type="text" placeholder="Email" />
<input type="password" placeholder="Password" />
<button  className="btn_login" onClick={cambiar_login}>LOGIN</button>
  </div>
  <form type="submit" onSubmit={submit}>
   <div className="cont_form_sign_up">
<a href="#" onClick={ocultar_login_sign_up}><i  className="material-icons">&#xE5C4;</i></a>
     <h2>SIGN UP</h2>
<input type="text" placeholder="Email" value={email} onChange={(e)=> {setemail(e.target.value)}}/>
<input type="text" placeholder="name" value={name} onChange={(e)=> {setname(e.target.value)}} />
<input type="password" placeholder="Password" value={password} onChange={(e)=> {setpassword(e.target.value)}}/>
{/* <input type="password" placeholder="Confirm Password" /> */}
<button  className="btn_sign_up" onClick={cambiar_sign_up}>SIGN UP</button>

  </div>
  </form>

    </div>
    
  </div>
 </div>
</div>
        </>
        )
}
export default Form;