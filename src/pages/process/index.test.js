import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Process from './index.jsx';


jest.mock('next/router', () => require('next-router-mock'));

describe('Process page', () => {

    it('should render the Process page', () => {
        render(<Process />)

        const buttonBackElement = screen.getByTestId('buttonBack');
        expect(buttonBackElement).toBeInTheDocument();

        expect(screen.getByTestId("button")).toBeInTheDocument();

        const searchBarElement = screen.getByRole('textbox');
        expect(searchBarElement).toBeInTheDocument();

        const dropdownElement = screen.getByText('Tribunais');
        expect(dropdownElement).toBeInTheDocument();

        const numberOfProcessElement = screen.getByText('Processo n. do');
        expect(numberOfProcessElement).toBeInTheDocument();

        const dateOfProcessElement = screen.getByText('Distribuído em:');
        expect(dateOfProcessElement).toBeInTheDocument();

        const movementsElement = screen.getByText('Movimentações');
        expect(movementsElement).toBeInTheDocument();

        const detailsElement = screen.getByText('Detalhes do processo');
        expect(detailsElement).toBeInTheDocument();

        const courtElement = screen.getByText('Endereço do tribunal');
        expect(courtElement).toBeInTheDocument();

        const processDetailsElement = screen.getByText('Partes envolvidas');
        expect(processDetailsElement).toBeInTheDocument();

        const authorElement = screen.getByText('Parte envolvida - Exequente');
        expect(authorElement).toBeInTheDocument();

        const defendedElement = screen.getByText('Parte envolvida - Apelante');
        expect(defendedElement).toBeInTheDocument();

    });

});