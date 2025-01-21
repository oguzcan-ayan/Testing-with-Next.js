import '@testing-library/jest-dom';

export const mockReplace = jest.fn();

jest.mock('next/navigation', () => {
    return {
        useRouter: function() {
            return {
                replace: mockReplace
            }
        }
    }
});

