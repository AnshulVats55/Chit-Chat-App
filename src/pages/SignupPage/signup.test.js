import CreateAccount from './CreateAccount';
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import "@testing-library/jest-dom";
import user from '@testing-library/user-event';

test("renders correctly", ()=>{
    render(
        <Router>
            <CreateAccount />
        </Router>
    );
    const inputElement = screen.getAllByRole("link");
    expect(inputElement[0]).toBeInTheDocument();
});

test("button renders correctly", async ()=>{
    // user.setup();
    // const signUpFunction = jest.fn();
    render(
        <Router>
            <CreateAccount />
        </Router>
    );

    const signUpBtn = screen.getByRole("button", {name:'Sign up'});
    expect(signUpBtn).toBeInTheDocument();
});
