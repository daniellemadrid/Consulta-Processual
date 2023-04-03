import React from 'react';
import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';
import '@testing-library/jest-dom'

jest.mock('next/router', () => require('next-router-mock'));

describe('Dropdown component', () => {

    it.only('should render the Dropdown component', () => {
        render(<Dropdown />)

        const dropdownElement = screen.getByText('Tribunais');
        expect(dropdownElement).toBeInTheDocument();
    });
});