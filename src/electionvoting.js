import React from "react";
import './electionvoting.css';
import { callApi, errorResponse, getSession, setSession } from './main';
import tdpImage from './tdp.jpg';

class Electionvoting extends React.Component {
    constructor() {
        super();
        this.state = {
            showPartyList: true,
            message: ""
        };
        this.sid = getSession("sid");
        if (this.sid === "")
            window.location.replace("/");

        var url = "http://localhost:5000/home/uname";
        var data = JSON.stringify({
            emailid: this.sid
        });
        callApi("POST", url, data, this.loadUname.bind(this), errorResponse); // Bind the method to 'this'
    }

    loadUname(res) {
        var data = JSON.parse(res);
        var HL1 = document.getElementById("HL1");
        HL1.innerText = `${data[0].firstname} ${data[0].lastname}`
    }

    logout() {
        setSession("sid", "", -1);
        window.location.replace("/");
    }

    submitVote(partyName) {
        var url = "http://localhost:5000/voting/vote";
        var data = JSON.stringify({
            emailid: this.sid,
            party: partyName
        });
        callApi("POST", url, data, this.handleVoteResponse.bind(this), errorResponse);
    }

    handleVoteResponse(response) {
        this.setState({ message: "Voting submitted successfully.", showPartyList: false });
    }

    render() {
        return (
            <div className='full-height8'>
                <div className='content8' style={{ display: 'flex' }}>
                    <div>
                        <center>
                            <h2>POLITICAL PARTIES</h2>
                            {this.state.message && <p>{this.state.message}</p>}
                        </center>
                        {this.state.showPartyList &&
                            <div className="table-container">
                                <h3>List Of Parties</h3>
                                <div className="party-list">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Serial No</th>
                                                <th>Party Name</th>
                                                <th>Candidate Name</th>
                                                <th>Party Notation</th>
                                                <th>Party Symbol</th>
                                                <th>Vote</th> {/* New column for Vote button */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* Example of a single party */}
                                            <tr>
                                                <td>1</td>
                                                <td>TELUGU DESAM </td>
                                                <td>CHANDRABABU NAIDU</td>
                                                <td>CYCLE</td>
                                                {/*eslint-disable-next-line*/}
                                                <td><img src={tdpImage} alt="Description of image" /></td>
                                                <td><button className="vote-button" onClick={() => this.submitVote("TELUGU DESAM")}>Vote</button></td> {/* Vote button */}
                                            </tr>
                                            {/* Repeat this structure for each party */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Electionvoting;
