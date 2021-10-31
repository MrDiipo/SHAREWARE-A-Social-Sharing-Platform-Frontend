import React from "react";
import { render } from "react-dom";
import '@testing-library/jest-dom/extend-expect';


describe('UserSignupPage', () =>{

    describe('Layout', ()=>{

        it('has header of Sign Up', ()=>{
            render (<UserSignupPage/>);
        })

    })

})