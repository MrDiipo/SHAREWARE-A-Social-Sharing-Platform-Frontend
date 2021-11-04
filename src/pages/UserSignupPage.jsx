import React, { Component } from 'react'
import Input from '../components/Input';
import ButtonWithProgess from '../components/ButtonWithProgess';

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
        const errors = {...this.state.errors}
        delete errors.displayName
        this.setState({
            displayName : value, errors
        });
    }

    onChangeUsername = (event) =>{
        const value = event.target.value;
        const errors = {...this.state.errors}
        delete errors.username
        this.setState({
            username : value, errors
        });
    }

    onChangePassword = (event) =>{

        const value = event.target.value;
        const repeatConfirmed = this.state.repeatPassword === value;
        const errors = {...this.state.errors};
        delete errors.password
        errors.repeatPassword = repeatConfirmed ? '' : 'Does not match to password'

        this.setState({
            password : value,
             passwordRepeatConfirmed : repeatConfirmed,
             errors
        });  
    }
    onChangeRepeatPassword = (event) =>{
        const value = event.target.value;
        const repeatConfirmed = this.state.password === value;
        const errors = {...this.state.errors};
        errors.repeatPassword = repeatConfirmed ? '' : 'Does not match to password'

        this.setState({
            repeatPassword : value, 
            passwordRepeatConfirmed : repeatConfirmed,
            errors
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
                     className="mb-4" type="text" name="email" 
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
                    <ButtonWithProgess
                        onClick={this.onClickSignUp}
                        disabled={this.state.pendingApiCall || !this.state.passwordRepeatConfirmed}
                        pendingApiCall={this.state.pendingApiCall}
                        text="Sign Up"
                    />
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
