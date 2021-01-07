import React, {Component} from 'react';
import './Login.css';

class Login extends Component {
    
    render(){
        return(
            <div className="Login-form">
                <h1 className="Login-logo">HR Recruiters</h1>
                <div className="Email-form">
                <h1 className="Email-label">Email</h1>
                <input type="Email" className="Input-email"></input>
                </div>
                <div className="Password-form">
                <h1 className="Password-label">Password</h1>
                <input type="Password" className="Input-password"></input>
                </div>
                <div className="Button-form">
                <button className="Input-button">Login</button>
                </div>
            </div>
        )
    }
}

export default Login