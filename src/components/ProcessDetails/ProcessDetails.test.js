import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import ProcessDetails from './ProcessDetails';

jest.mock('next/router', () => require('next-router-mock'));

describe('ProcessDetails component', () => {

    it('should render the ProcessDetails component', () => {
        render(<ProcessDetails />)

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

        const authorLawyerElement = screen.getByTestId('authorLawyer');
        expect(authorLawyerElement).toBeInTheDocument();

        const defendedLawyerElement = screen.getByTestId('defendedLawyer');
        expect(defendedLawyerElement).toBeInTheDocument();

    });

});