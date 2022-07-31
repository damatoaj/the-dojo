import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';

test('App should render on the screen without a user', async ()=> {
    render(<AuthContextProvider><App /></AuthContextProvider>)
    expect(await screen.findByText(/log in/i)).toBeInTheDocument();
})