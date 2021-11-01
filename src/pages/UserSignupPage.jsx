import React, { Component } from 'react'

export class UserSignupPage extends Component {
        
        state = {
            displayName : ' ' ,
            username : ' ',
            password: ' ',
            repeatPassword: ' '
        }
     

    onChangeDisplayName = (event) =>{
        const value = event.target.value;
        this.setState({
            displayName : value
        });
    }

    onChangeUsername = (event) =>{
        const value = event.target.value;
        this.setState({
            username : value
        });
    }

    onChangePassword = (event) =>{
        const value = event.target.value;
        this.setState({
            password : value
        });  
    }
    onChangeRepeatPassword = (event) =>{
        const value = event.target.value;
        this.setState({
            repeatPassword : value
        });  
    }

    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <div>
                    <input 
                    placeholder="Your display name" 
                    value={this.state.displayName}
                       onChange={this.onChangeDisplayName} 
                    />
                </div>
                <div>
                    <input placeholder="Your username"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                    />
                </div>
                <div>
                    <input placeholder="Your password" type="password"
                        value={this.state.password} onChange={this.onChangePassword}
                    />
                </div>
                <div>
                    <input placeholder="Repeat your password" type="password"
                     value={this.state.repeatPassword} onChange={this.onChangeRepeatPassword}/>
                </div>
                <div>
                    <button>Sign Up</button>
                </div>
            </div>
        )
    }
}

export default UserSignupPage;
