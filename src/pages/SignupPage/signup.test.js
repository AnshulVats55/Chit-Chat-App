import CreateAccount from './CreateAccount';
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import "@testing-library/jest-dom";
import store from '../../store/index';
import { Provider } from 'react-redux';

test("renders correctly", () => {
    render(
        <Provider store={store}>
            <Router>
                <CreateAccount />
            </Router>
        </Provider>
    );
    const inputElement = screen.getAllByRole("link");
    expect(inputElement[0]).toBeInTheDocument();
});

test("function test logs a message with a name", () => {
    console.log = jest.fn();

    render(
        <Provider store={store}>
            <Router>
                <CreateAccount />
            </Router>
        </Provider>);

    const testBtn = screen.getByText('Test Button');
    fireEvent.click(testBtn);
    expect(console.log).toHaveBeenCalledWith('Anshul clicked this button');
});