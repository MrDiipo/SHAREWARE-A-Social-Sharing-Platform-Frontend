import React, { Component } from 'react'

export class UserSignupPage extends Component {
        
  constructor(props){
      super(props);
      this.props = props;
    this.state = {
        displayName : ' ' ,
        username : ' ',
        password: ' ',
        repeatPassword: ' '
    };
  }

  props = {};
     

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

    onClickSignUp(){
        const user = {
            username : this.state.username,
            displayName : this.state.displayName,
            password : this.state.password
        }
        if(this.props.actions){
            this.props.actions.postSignup(user);
        }
    }

    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <div>
                    <input placeholder="Your display name" 
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
                    <button onClick={this.onClickSignUp}>Sign Up</button>
                </div>
            </div>
        )
    }
}

export default UserSignupPage;
