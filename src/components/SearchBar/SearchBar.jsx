import { useState } from "react";
import { useRouter } from "next/router";
import { useProcessStore } from "../../store/processes";
import React from 'react';

const SearchBar = () => {
    const router = useRouter();

    const { findProcess, process } = useProcessStore((state) => ({
        findProcess: state.findProcess,
        process: state.process
    }));

    const [formEmptyError, setFormEmptyError] = useState(false);
    const [value, setValue] = useState("");

    const handleClick = (e) => {
        !value ? setFormEmptyError(true) : setFormEmptyError(false)

        findProcess(value)

        if (process) {
            router.push('/process')
        } else {
            alert("Processo não encontrado")
        }
    }

    return (
        <div className="flex gap-4">
            <div className="flex items-center justify-center flex-col">
                <input className="h-14 pl-2 placeholder-300 border-4 rounded-md text-3xl border-gray-400 outline-none"
                    type="text"
                    data-testid='input'
                    onChange={(e) => { setValue(e.target.value); e.preventDefault(); }}
                    placeholder="Número do processo"
                />
                {formEmptyError ?
                    <div className="text-red-600">
                        FAZER VALIDACOES COM ESSES 3 CASOS:
                        Preencha pelo menos um dos campos
                        Selecione pelo menos um tribunal relacionado a este CNJ
                        Por favor digite um código com o formato NNNNNNN-NN.NNNN.N.NN.NNNN
                    </div>
                    :
                    <></>
                }
            </div>

            <div>
                <button data-testid="button" onClick={(e) => handleClick(e)} className="h-14 w-20 border-4 border-gray-400 rounded-md hover:bg-gray-300 md:transition-all " type='submit'>
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
