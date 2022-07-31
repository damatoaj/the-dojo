import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Login from './Login';
import { AuthContextProvider } from '../../context/AuthContext';

beforeEach(()=> {
    render(<AuthContextProvider><Login /></AuthContextProvider>)
})

const typeIntoForm = ({ email, password }) =>{
    const emailInputEl = screen.getByRole('textbox', { name : /email/i});
    const passwordInputEl = screen.getByLabelText(/password/i);

    if (email) {
        userEvent.type(emailInputEl, email);
    }

    if(password) {
        userEvent.type(passwordInputEl, password)
    }

    return { emailInputEl, passwordInputEl }
};

const clickSubmit = () => {
    const submitBtnEl = screen.getByText(/login!/i);
    userEvent.click(submitBtnEl);
}

test('form should initially be empty', ()=> {
    expect(screen.getByRole('textbox', { name : /email/i}).value).toBe('');
    expect(screen.getByRole('textbox', {type: /password/i}).value).toBe('');
})

test('type into the inputs', ()=> {
    const { emailInputEl } = typeIntoForm({ email:'a@a.com'});
    const { passwordInputEl } = typeIntoForm({ password:'123123123'});

    expect(emailInputEl.value).toBe('a@a.com');
    expect(passwordInputEl.value).toBe('123123123')
})

test('login to the app', async ()=> {
    const { emailInputEl } = typeIntoForm({ email:'a@a.com'});
    const { passwordInputEl } = typeIntoForm({ password:'123123123'});

    clickSubmit();
    expect(await screen.getAllByText(/dashboard/i)).toBeInTheDocument();
})