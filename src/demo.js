import React from 'react'

import './demo.css'
import { callApi, errorResponse,setSession} from './main';

const popupwindowstyle={ width: '300px',
height: '550px', // Adjusted height to accommodate additional fields
background: 'white',
margin: '10px',
boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Added box shadow
borderRadius: '8px', // Added border-radius
position: 'relative',};
const HS2 = {"float" : "right", "padding-right" : "5px", "cursor" : "pointer"};
const space={height:'10px'}

function frontpage(){

    window.onload = function(){
        var login = document.getElementById('login');
        login.style.display="block";
    }

    function validate()
    {
        var T1=document.getElementById('T1');
        var T2=document.getElementById('T2');

        var url = "http://localhost:5000/login/signin";
        var data = JSON.stringify({
            emailid : T1.value,
            pwd : T2.value
        });
        callApi("POST", url, data, loginSuccess, errorResponse);
    }

    function loginSuccess(res)
    {
        var data = JSON.parse(res);
        if(data === 1)
        {
            var T1=document.getElementById('T1');
            setSession("sid", T1.value, 5);
            window.location.replace("/home");
        }
        else
            alert("Invalid Credentials!");
    }

    function registration(){
        var T1 = document.getElementById('T1');
        var T2 = document.getElementById('T2');
        T1.value="";
        T2.value="";
        
        var reg = document.getElementById('registration');
        var login = document.getElementById('login');
        login.style.display = "none";
        reg.style.display = "block";
    }

    function forgotregistration(){
        var T1 = document.getElementById('T1');
        var T2 = document.getElementById('T2');
        T1.value="";
        T2.value="";
        
        var reg = document.getElementById('forgotregistration');
        var login = document.getElementById('login');
        login.style.display = "none";
        reg.style.display = "block";
    }

    function register(){
        var RT1 = document.getElementById('RT1');
        var RT2 = document.getElementById('RT2');
        var RT3 = document.getElementById('RT3');
        var RT4 = document.getElementById('RT4');
        var RT5 = document.getElementById('RT5');
        var RT6 = document.getElementById('RT6');
        var RT7 = document.getElementById('RT7');
        RT1.style.border="";
        RT2.style.border="";
        RT3.style.border="";
        RT4.style.border="";
        RT5.style.border="";
        RT6.style.border="";
        RT7.style.border="";
        if(RT1.value==="")
        {
            RT1.style.border = "1px solid red";
            RT1.focus();
            return;
        }
        if(RT2.value==="")
        {
            RT2.style.border = "1px solid red";
            RT2.focus();
            return;
        }
        if(RT3.value==="")
        {
            RT3.style.border = "1px solid red";
            RT3.focus();
            return;
        }
        if(RT4.value==="")
        {
            RT4.style.border = "1px solid red";
            RT4.focus();
            return;
        }
        if(RT5.value==="")
        {
            RT5.style.border = "1px solid red";
            RT5.focus();
            return;
        }
        if(RT6.value==="")
        {
            RT6.style.border = "1px solid red";
            RT6.focus();
            return;
        }
        if(RT7.value==="")
        {
            RT7.style.border = "1px solid red";
            RT7.focus();
            return;
        }
        if(RT5.value!==RT6.value)
        {
            alert("Password and Re-type Password must be same");
            RT5.style.border="1px solid red";
            RT5.focus();
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(RT7.value)) {
            alert("Invalid email address format");
            RT7.style.border = "1px solid red";
            RT7.focus();
            return; // Stop the registration process if email is invalid
          }

        var url = "http://localhost:5000/registration/signup";
        var data = JSON.stringify({
            firstname : RT1.value,
            lastname : RT2.value,
            contactno : RT3.value,
            voterid : RT4.value,
            pwd : RT5.value,
            emailid : RT7.value,
            

        });
        callApi("POST", url,  data, registeredSuccess, errorResponse);
        //alert("Registered successfullty...");

        RT1.value="";
        RT2.value="";
        RT3.value="";
        RT4.value="";
        RT5.value="";
        RT6.value="";
        RT7.value="";
        var login = document.getElementById('login');
        var registration = document.getElementById('registration');
        registration.style.display = 'none';
        login.style.display = 'block';
    }

    function registeredSuccess(res)
    {
        var data = JSON.parse(res);
        alert(data);
    }

   // ...

function forgotregister(){
    var FT1 = document.getElementById('FT1');
    if (!FT1) {
        console.error("Element with id 'FT1' not found.");
        return;
    }

    FT1.style.border="";

    if (FT1.value === "") {
        FT1.style.border = "1px solid red";
        FT1.focus();
        return;
    }

    var url = "http://localhost:5000/forgotpassword/sendotp";
    var data = JSON.stringify({
        email: FT1.value
    });

    callApi("POST", url, data, function(res) {
        sendOTPSuccess(res, FT1);
    }, errorResponse);
}

function sendOTPSuccess(res, FT1) {
    var data = JSON.parse(res);

    if (!data) {
        console.error('Invalid response from the server.');
        return;
    }

    if (data.success) {
        setSession("resetEmail", FT1.value, 5);
        setSession("resetOTP", data.otp, 5);

        var registration = document.getElementById('forgotregistration');
        registration.style.display = 'none';

        var otpValidation = document.getElementById('otpValidation');
        otpValidation.style.display = 'block';
    } else {
        alert("Failed to send OTP. Please try again.");
    }
}

// ...

    
    
    
    return(
        <div className='full-height'>
        <div id='header' className='loginheader'>Online Voting System
                 <label style={HS2} onClick={"/"}>Login  </label> 
                 <span style={{ margin: '100px' }}></span>
                 <label style={HS2} onClick={"/"}>    Signup      </label>
            </div>
        <div id='content' className='logincontent'>
            <div id='login' className='popup'>
                <div id='popupwindow' className='popupwindow' style={popupwindowstyle} >
                    <div className='loginstyle1'>Login</div>
                    <div className='loginstyle2'>
                        <div>Voter ID*</div>
                        <div><input type='text' id='T1' className='txtbox' autocomplete="off" /></div>
                        <div style={space}></div>
                        <div>Password*</div>
                        <div><input type='password' id='T2' className='txtbox' autocomplete="off" /></div>
                        <div style={space}></div>
                        <div style={space}></div>
                        <div><button className='btn' onClick={validate}>Sign In</button></div>
                        <div style={space}></div>
                        <div style={space}></div>
                        <div style={space}></div>
                        <div>New user? <label className='linklabel' onClick={registration}>Signup here</label></div>
                        <div style={space}></div>
                        <div>Forget Password? <label className='linklabel' onClick={forgotregistration}>Click here</label></div>
                    </div>
                </div>
            </div>
            <div id='registration' className='popup'>
                <div id='registrationwindow' className='popupwindow'  style={popupwindowstyle}>
                    <div className='loginstyle1'>New Registration</div>
                    <div className='loginstyle2'>
                        <div>First Name*</div>
                        <div><input type='text' id='RT1' className='txtbox' /></div>
                        <div style={space}></div>
                        <div>Last Name*</div>
                        <div><input type='text' id='RT2' className='txtbox' /></div>
                        <div style={space}></div>
                        <div>Contact Number*</div>
                        <div><input type='number' id='RT3' className='txtbox' /></div>
                        <div style={space}></div>
                        <div>Email Id*</div>
                        <div><input type="email" id='RT7' className='txtbox' placeholder='Enter Emailid' pattern='[^\s@]+@[^\s@]+\.[^\s@]+' title="Enter a valid email address"/></div>
                        <div style={space}></div>
                        <div>Voter ID*</div>
                        <div><input type='text' id='RT4' className='txtbox' /></div>
                            <div style={space}></div>
                            <div>Password*</div>
                            <div><input type='password' id='RT5' className='txtbox' autocomplete="off" /></div>
                            <div style={space}></div>
                            <div>Re-type Password*</div>
                            <div><input type='password' id='RT6' className='txtbox' autocomplete="off"/></div>
                            <div style={space}></div>
                            <div><button className='btn' onClick={register}>Submit</button></div>
                        </div>
                    </div>
                </div>
                <div id='forgotregistration' className='popup'>
                    <div id='forgotregistrationwindow' className='popupwindow'  style={popupwindowstyle}>
                        <div className='loginstyle1'>Update Password</div>
                        <div className='loginstyle2'>
                        <div>Email*</div>
                        <div><input type='text' id='FT1' className='txtbox' /></div>
                        <div style={space}></div>
                            <div style={space}></div>
                            <div><button className='btn' onClick={forgotregister}>Reset</button></div>
                            </div>
                            </div>
                            </div>
            </div>
            <div id='footer' className='loginfooter'>@2023 All rights reservered</div>
        </div>
    );
}

export default frontpage;