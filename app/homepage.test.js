import { render, screen } from '@testing-library/react';
import HomePage from './page';
import userEvent from '@testing-library/user-event';
import { mockReplace } from '@/jest.setup';

describe('HomePage', () => {
    it('should render successfully', () => {
        render(<HomePage />)

        screen.debug();

        expect(screen.getByRole('heading', { name: 'Home Page' })).toBeInTheDocument();
    })

    it('should update input value state', async () => {
        render(<HomePage />)
        
        const inputElement = screen.getByPlaceholderText(/search some/i);
        await userEvent.type(inputElement, 'Hello, there');

        expect(inputElement).toHaveValue('Hello, there');
    })

    it('should submit when the button clicked', async () => {
        render(<HomePage />)

        const inputElement = screen.getByPlaceholderText(/search some/i);
        await userEvent.type(inputElement, 'Hello, there');

        const buttonElement = screen.getByRole('button', { name: 'Submit' });
        await userEvent.click(buttonElement);

        expect(mockReplace).toHaveBeenCalledTimes(1);
        expect(mockReplace).toHaveBeenCalledWith('/?test=Hello, there')
        expect(buttonElement).toHaveValue("");
    })
})