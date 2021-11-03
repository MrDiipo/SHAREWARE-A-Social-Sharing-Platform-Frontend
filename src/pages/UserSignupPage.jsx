import React, { Component } from 'react'
import Input from '../components/Input';

export class UserSignupPage extends Component {
        
  constructor(props){
      super(props);
      this.props = props;
    this.state = {
        displayName : undefined,
        username : undefined,
        password: undefined,
        repeatPassword: undefined,
        pendingApiCall : undefined,
        errors : {},
        passwordRepeatConfirmed : true
    };
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
        const repeatConfirmed = this.state.repeatPassword === value;

        this.setState({
            password : value,
             passwordRepeatConfirmed : repeatConfirmed
        });  
    }
    onChangeRepeatPassword = (event) =>{
        const value = event.target.value;
        const repeatConfirmed = this.state.password === value;

        this.setState({
            repeatPassword : value, 
            passwordRepeatConfirmed : repeatConfirmed
        });  
    }

    onClickSignUp = () => {
        const user = {
            username : this.state.username,
            displayName : this.state.displayName,
            password : this.state.password
        };
            this.setState({
                pendingApiCall : true
            });
            this.props.actions.postSignup(user).then((response) => {
                this.setState({pendingApiCall : false});
            }).catch((apiError) => {
                let errors = {...this.state.errors}
                if(apiError.response.data && apiError.response.data.validationError){
                    errors = {...apiError.response.data.validationError}
                }
                this.setState({
                    pendingApiCall : false,
                    errors
                })
            });
    }

    render() {
        return ( 
            <div className="container">
                <h1 className="text-center">Sign Up</h1>
                <div className="col-12 mb-3">
                    <Input
                    label = "Display Name"
                    placeholder="Your display name" 
                    value={this.state.displayName}
                    onChange={this.onChangeDisplayName} 
                    hasError={this.state.errors.displayName && true}
                    error={this.state.errors.displayName}
                    />
                </div>
                <div className="col-12 mb-3">
                    <Input
                    label="Username"
                     className="form-control"
                     placeholder="Your username"
                     value= {this.state.username}
                    onChange={this.onChangeUsername}
                    hasError={this.state.errors.username && true}
                    error={this.state.errors.username}
                    />
                </div>
                <div className="col-12 mb-3">
                    <Input
                    label = "Password"
                     className="form-control"
                  placeholder="Your password" type="password"
                        value={this.state.password} 
                        onChange={this.onChangePassword}
                        hasError={this.state.errors.password && true}
                    error={this.state.errors.password}
                    />
                </div>
                <div className="col-12 mb-3">
                    <Input
                    label ="Password Repeat"
                     className="form-control"
                    placeholder="Repeat your password"
                     type="password"
                     value={this.state.repeatPassword}
                      onChange={this.onChangeRepeatPassword}
                      hasError={this.state.errors.repeatPassword && true}
                    error={this.state.errors.repeatPassword}
                      />
                </div>
                <div className="text-center">
                    <button
                     className="btn btn-primary" 
                     onClick={this.onClickSignUp}
                     disabled={this.state.pendingApiCall || !this.state.passwordRepeatConfirmed}>
                     {this.state.pendingApiCall && (<div className="spinner-border text-light spinner-border-sm ml-10">
                     <span className="sr-only"></span>
                     </div>) 
                     }
                      Sign Up
                     </button>
                </div>
            </div>
        )
    }
}

UserSignupPage.defaultProps = {
    actions : {
        postSignup : () => new Promise((resolve, reject) =>{
            resolve({});
        })
    }
}

export default UserSignupPage;
