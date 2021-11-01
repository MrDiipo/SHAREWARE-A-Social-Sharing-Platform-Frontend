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
            const passwordInput = queryByPlaceholderText('Repeat your password');
            
            fireEvent.change(passwordInput, changeEvent('my-repeat-password'));
            expect(passwordInput).toHaveValue('my-repeat-password');
        })
    })

})