import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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
});