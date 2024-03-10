import React from 'react';
import './vote.css';
import { callApi, errorResponse,  } from './main';
import menuicon from './menuicon.jpg';
import { NavLink } from 'react-router-dom';
import logouticon from './logouticon.jpg';
/*import voterDone from './images/vr.png';*/
const HS1 = { "paddingLeft": "5px", "marginRight": "20px" };
const HS2 = {"float" : "right", "padding-right" : "5px", "cursor" : "pointer"};
const HS3 = {"float" : "right", "height" : "16px", "margin-top" : "6px", "cursor" : "pointer"};
const HS4 = {"float" : "right", "padding-right" : "10px"};

function voteregister(){
    var KT1 = document.getElementById('KT1');
    var KT2 = document.getElementById('KT2');
    var KT3 = document.getElementById('KT3');
    var KT4 = document.getElementById('kT4');
    var KT5 = document.getElementById('KT5');
    var KT6 = document.getElementById('KT6');
    var KT7 = document.getElementById('KT7');
    var KT8 = document.getElementById('KT8');
    var KT9 = document.getElementById('KT9');
    KT1.style.border = "";
    KT2.style.border = "";
    KT3.style.border = "";
    KT4.style.border = "";
    KT5.style.border = "";
    KT6.style.border = "";
    KT7.style.border = "";
    KT8.style.border = "";
    KT9.style.border = "";
    if(KT1.value==="")
    {
        KT1.style.border = "1px solid red";
        KT1.focus();
        return;
    }
    if(KT2.value==="")
    {
        KT2.style.border = "1px solid red";
        KT2.focus();
        return;
    }
    if(KT3.value==="")
    {
        KT3.style.border = "1px solid red";
        KT3.focus();
        return;
    } 
    if(KT4.value==="")
    {
        KT4.style.border = "1px solid red";
        KT4.focus();
        return;
    }
    if(KT5.value==="")
    {
        KT5.style.border = "1px solid red";
        KT5.focus();
        return;
    }
    if(KT6.value==="")
    {
        KT6.style.border = "1px solid red";
        KT6.focus();
        return;
    }
    if(KT7.value==="")
    {
        KT7.style.border = "1px solid red";
        KT7.focus();
        return;
    }
    if(KT8.value==="")
    {
        KT8.style.border = "1px solid red";
        KT8.focus();
        return;
    }
    if(KT9.value==="")
    {
        KT9.style.border = "1px solid red";
        KT9.focus();
        return;
    }
    var url = "http://localhost:5000/registers/submit";
        var data = JSON.stringify({
            fullname : KT1.value,
            dateofbirth  : KT2.value,
            gender : KT3.value,
            nationality :KT4.value,
            residentialaddress : KT5.value,
            emailaddress:KT6.value,
            phonenumber:KT7.value,
            govtid : KT8.value,
            id:KT9.value
        })
        callApi("POST",url,data,votingsuccess,errorResponse);
        //alert("Registered Successfully.....");

        KT1.value = "";
        KT2.value = "";
        KT3.value = "";
        KT4.value = "";
        KT5.value = "";
        KT6.value = "";
        KT7.value = "";
        KT8.value = "";
        KT9.value = "";
        var registers = document.getElementById('registers');
        registers.style.display = 'none';
    }
    function votingsuccess(res){
        var data = JSON.parse(res);
        alert(data);
    }
class VoterRegistrationInfo extends React.Component {
    render() {
        return (
            <div>
                <h2>Voter Details Information</h2>
               <div className="registration-info">
                <h2>Voter Registration Details</h2>
                <div className="table-container">
                    <table>
                        <tbody>
                            <tr>
                                <td>Full Name</td>
                                <td><input type="text" id='KT1' className='txtbox' /></td>
                            </tr>
                            <tr>
                                <td>Date of Birth</td>
                                <td><input type="date" id='KT2' className='txtbox'  /></td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>
                                    <select id='KT3' className='txtbox' >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Nationality</td>
                                <td><input type="text" id='KT4' className='txtbox'  /></td>
                            </tr>
                            <tr>
                                <td>Residential Address</td>
                                <td><input type="text" id='KT5' className='txtbox'  /></td>
                            </tr>
                            <tr>
                                <td>Email Address</td>
                                <td><input type="email" id='KT6' className='txtbox'  /></td>
                            </tr>
                            <tr>
                                <td>Phone Number</td>
                                <td><input type="tel" id='KT7' className='txtbox' /></td>
                            </tr>
                            <tr>
                                <td>Government-issued ID</td>
                                <td><input type="text" id='KT8' className='txtbox' /></td>
                            </tr>
                            <tr>
                                <td>ID Number</td>
                                <td><input type="text" id='KT9' className='txtbox' /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button className="submit-button" onClick={voteregister}>Submit</button>
            </div>

            </div>
        );
    }
}
class VoterDoneInfo extends React.Component {
    render() {
        return (
            <div>
                <h2>Andhra Information</h2>
                <p>The state of Andhra Pradesh, sometimes referred to as the "Rice Bowl of India," serves as a sort of cultural melting pot.
                 A variety of dynasties and empires have ruled over this area. 
                 The culture of Andhra Pradesh has been profoundly influenced by this broad exposure to the customs and cultures of the empires. 
                 In addition, Rajahmundry, named for Raja Raja Narendra, the head of the Chalukya kingdom in the eleventh century, serves as Andhra Pradesh's cultural hub.
                  Foreign powers have had an impact on literature, music, dancing, and food. The richness and success of the culture have been aided by this variety and diversity.</p>
            </div>
        );
    }
}

class Voter extends React.Component {
    constructor() {
        super();
        this.state = {
            showSubmenus: false,
            selectedStateImage: null,
            displayAndhraInfo: false,
        };
       
            window.location.replace("/");
        

        var url = "http://localhost:5000/home/uname";
        var data = JSON.stringify({
            emailid: this.sid
        });
        callApi("POST", url, data, this.loadUname, errorResponse);
    }

    loadUname(res) {
        var data = JSON.parse(res);
        var HL1 = document.getElementById("HL1");
        if (HL1) {
            HL1.innerText = `${data[0].firstname} ${data[0].lastname}`
        } else {
            console.error("Element with id 'HL1' not found in the DOM.");
        }
    }

    toggleSubmenus = () => {
        this.setState((prevState) => ({
            showSubmenus: !prevState.showSubmenus,
        }));
    };

    handleStateClick = (state) => {
        switch (state) {
            case "Voter Registration":
                this.setState({ displayVoterInfo: true,displayDoneInfo: false });;
                break;
            case "Voter Done":
                this.setState({ displayVoterInfo: false, displayDoneInfo:true  });;
                break;

            default:
                this.setState({ selectedStateImage: null, displayVoterInfo: false, displayDoneInfo: false });
            
        }
    };

    logout() {
        
        window.location.replace("/");
    }

    renderStatesMenu() {
        const statesInIndia = [
            "Voter Registration", "Voter Done", 
        ];

        return (
            <div>
                <div className='menuheader' onClick={this.toggleSubmenus}>
                    <img src={menuicon} alt='' />
                    <label>MENU</label>

                </div>
                {this.state.showSubmenus && (
                    <ul className="mlist">
                        {statesInIndia.map((state, index) => (
                            <li key={index} onClick={() => this.handleStateClick(state)}>
                                <label>{state}</label>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }

    render() {
        const { selectedStateImage,
                displayVoterInfo, 
                displayDoneInfo,
         } = this.state;
        return (
            <div className='full-height'>
            <div className='header4'>
            <label style={HS1}>eBallot | ONLINE VOTING MANAGEMENT SYSTEM</label>
                <NavLink to="/home1" className="nav-link">Home</NavLink>
                <NavLink to="/about1" className="nav-link">About</NavLink>
                <NavLink to="/voter" className="nav-link">Voter Registration</NavLink>
                <label style={HS2} onClick={this.logout}>Logout</label>
                <img src={logouticon} alt='' style={HS3} onClick={this.logout} />
                <label id='HL1' style={HS4}></label>
                <div id="header1"></div>
            </div>
                <div className='content4'>
                    <div className='menubar'>
                        <div className='menu'>
                            {this.renderStatesMenu()}
                        </div>
                    </div>
                    <div className='outlet4'>
                    
                    {selectedStateImage && (
                            <img src={selectedStateImage} alt={selectedStateImage} />
                        )}
                        {displayVoterInfo && <VoterRegistrationInfo />}
                        {displayDoneInfo && <VoterDoneInfo />}
                        
                    </div>
                </div>
                <div className='footer'>
                    Copyright @ Indian Culture. All rights reserved.
                </div>
            </div>
        );
    }
}

export default Voter;
