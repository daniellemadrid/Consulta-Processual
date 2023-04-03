import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Movements from './Movements';

jest.mock('next/router', () => require('next-router-mock'));

describe('Movements component', () => {

    it('should render the Movements component', () => {
        render(<Movements />)

        const movementsElement = screen.getByText('Movimentações');
        expect(movementsElement).toBeInTheDocument();

    });

});