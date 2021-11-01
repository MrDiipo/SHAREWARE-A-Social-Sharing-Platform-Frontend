import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import {UserSignupPage} from './UserSignupPage';


beforeEach(cleanup);

describe('UserSignupPage', () =>{

    describe('Layout', ()=>{

        it('has header of Sign Up', ()=>{
           const { container } = render(<UserSignupPage/>);
           const header = container.querySelector('h1');
           expect(header).toHaveTextContent('Sign Up');
        });

        it('has input for display name', ()=>{
            const {queryByPlaceholderText } = render(<UserSignupPage/>);
            const displayNameInput = queryByPlaceholderText('Your display name');
            expect(displayNameInput).toBeInTheDocument();
        })

        it('has input for username', ()=>{
            const {queryByPlaceholderText } = render(<UserSignupPage/>);
            const usernameInput = queryByPlaceholderText('Your username');
            expect(usernameInput).toBeInTheDocument();
        })

        it('has input for password', ()=>{
            const {queryByPlaceholderText } = render(<UserSignupPage/>);
            const passwordInput = queryByPlaceholderText('Your password');
            expect(passwordInput).toBeInTheDocument();
        })

        it('has password type for password input', ()=>{
            const {queryByPlaceholderText } = render(<UserSignupPage/>);
            const passwordInput = queryByPlaceholderText('Your password');
            expect(passwordInput.type).toBe('password');
        })

        it('has input for password repeat', ()=>{
            const {queryByPlaceholderText } = render(<UserSignupPage/>);
            const passwordInput = queryByPlaceholderText('Repeat your password');
            expect(passwordInput.type).toBe('password');
        })

        it('has submt button', ()=>{
            const {container} = render(<UserSignupPage/>);
            const submitButton = container.querySelector('button');
            expect(submitButton).toBeInTheDocument();
        })
    })

    describe('Interactions', ()=>{

        const changeEvent = (content) => {
            return {
                target : {
                    value: content
                }
            }
        };

        let button, displayNameInput, userNameInput, passwordInput, passwordRepeatInput;

        const setForSubmit = (props)=>{

            const rendered  = render(<UserSignupPage {...props}/>);

            const {container, queryByPlaceholderText} = rendered
            
             displayNameInput = queryByPlaceholderText('Your display name');
             userNameInput = queryByPlaceholderText('Your username');
             passwordInput = queryByPlaceholderText('Your password');
             passwordRepeatInput = queryByPlaceholderText('Repeat your password');

            fireEvent.change(displayNameInput, changeEvent('my-display-name'));
            fireEvent.change(userNameInput, changeEvent('my-user-name'));
            fireEvent.change(passwordInput, changeEvent('my-password'));
            fireEvent.change(passwordRepeatInput, changeEvent('my-repeat-password'));

             button = container.querySelector('button');

            return rendered;
        }
        
        it('Sets the displayName', ()=>{
            const {queryByPlaceholderText } = render(<UserSignupPage/>);
            const displayNameInput = queryByPlaceholderText('Your display name');
            
            fireEvent.change(displayNameInput, changeEvent('my-display-name'));
            expect(displayNameInput).toHaveValue('my-display-name');
        })

        it('Sets the username value into state', ()=>{
            const {queryByPlaceholderText } = render(<UserSignupPage/>);
            const userNameInput = queryByPlaceholderText('Your username');
            
            fireEvent.change(userNameInput, changeEvent('my-user-name'));
            expect(userNameInput).toHaveValue('my-user-name');
        })

        it('Sets the password value into state', ()=>{
            const {queryByPlaceholderText } = render(<UserSignupPage/>);
            const passwordInput = queryByPlaceholderText('Your password');
            
            fireEvent.change(passwordInput, changeEvent('my-password'));
            expect(passwordInput).toHaveValue('my-password');
        })

        it('Sets the repeat password value into state', ()=>{ 
            const {queryByPlaceholderText } = render(<UserSignupPage/>);
            const passwordRepeatInput = queryByPlaceholderText('Repeat your password');
            
            fireEvent.change(passwordRepeatInput, changeEvent('my-repeat-password'));
            expect(passwordRepeatInput).toHaveValue('my-repeat-password');
        })

        it('call postSignup when fields are valid and the actions are provided in props', ()=>{
            const actions = {
                postSignup : jest.fn().mockResolvedValueOnce({})
            }

            setForSubmit({actions});

            fireEvent.click(button);
            expect(actions.postSignup).toHaveBeenCalledTimes(1);
        })

        it('does not throw exception when clicking the button when actions not provided in props', ()=>{
         
            setForSubmit();
            expect(()=> fireEvent.click(button)).not.toThrow();
        })

        it('call post with user body when the fields are valid', ()=>{
            const actions = {
                postSignup : jest.fn().mockResolvedValueOnce({})
            }

            setForSubmit({actions});

            fireEvent.click(button);

            const expectedUserObject = {
                username: 'my-user-name ',
                displayName: 'my-display-name',
                password: 'P4ssword' 
            };
            expect(actions.postSignup).toHaveBeenCalledWith(expectedUserObject);
        })
    })

})