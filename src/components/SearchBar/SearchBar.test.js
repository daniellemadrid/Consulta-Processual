import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import SearchBar from './SearchBar';


jest.mock('next/router', () => require('next-router-mock'));

describe('SearchBar component', () => {

    it('should render the SearchBar component', () => {
        render(<SearchBar />)

        const searchBarElement = screen.getByRole('textbox');
        expect(searchBarElement).toBeInTheDocument();
        expect(screen.getByTestId("button")).toBeInTheDocument();
    });

    describe('validate Cnj', () => {
        it('should return true for a valid CNJ code', () => {
            expect(validateCnjCode('0000000-00.0000.0.00.0000')).toBe(true);
        });

        it('should return false for an invalid CNJ code', () => {
            expect(validateCnjCode('0000000-00.0000.0.00')).toBe(false);
        });
    });
});