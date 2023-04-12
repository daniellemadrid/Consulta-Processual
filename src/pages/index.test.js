import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '.';
import '@testing-library/jest-dom'

jest.mock('next/router', () => require('next-router-mock'));

describe('Home page', () => {

    it('should render the home page', () => {
        render(<Home />)

        expect(screen.getByText("Busca de processos")).toBeInTheDocument();


        const dropdownElement = screen.getByText('Tribunais');
        expect(dropdownElement).toBeInTheDocument();

        const searchBarElement = screen.getByRole('textbox');
        expect(searchBarElement).toBeInTheDocument();
        expect(screen.getByTestId("button")).toBeInTheDocument();

    });
});