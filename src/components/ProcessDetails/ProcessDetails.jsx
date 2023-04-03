import React from 'react';

const ProcessDetails = ({ process }) => {
    return (
        <div className="flex flex-col gap-y-3 text-xl">
            <div className='flex flex-col gap-y-2 border-b-2 border-gray-300'>
                <span className="text-2xl">Detalhes do processo</span>
                <div className="flex flex-col">
                    <span className="font-medium">Endereço do tribunal</span>
                    <span className="text-indigo-500 font-bold">{process?.adress}</span>
                </div>
                <div className="flex flex-col pb-3">
                    <span className="font-medium">Valor a ser pago</span>
                    <span className="text-indigo-500 font-bold">R$ {process?.value}</span>
                </div>
            </div>
            <div className='flex flex-col gap-y-3'>
                <span className="text-2xl">Partes envolvidas</span>
                <div className="flex flex-col">
                    <span className="text-indigo-500 font-bold">{process?.author}</span>
                    <span className="font-normal">Parte envolvida - Exequente</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-indigo-500 font-bold">{process?.defendent}</span>
                    <span className="font-normal">Parte envolvida - Apelante</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-indigo-500 font-bold">{process?.authorLawyer}</span>
                    <span data-testid="authorLawyer" className="font-normal">Parte envolvida - Advogado</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-indigo-500 font-bold">{process?.defendentLawyer}</span>
                    <span data-testid="defendedLawyer" className="font-normal">Parte envolvida - Advogado</span>
                </div>
            </div>
        </div>

    );
};

export default ProcessDetails;
