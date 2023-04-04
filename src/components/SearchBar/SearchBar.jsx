import { useState } from "react";
import { useRouter } from "next/router";
import { useProcessStore } from "../../store/processes";
import React from 'react';

const SearchBar = () => {
    const router = useRouter();

    const { findProcess, tjId, process } = useProcessStore((state) => ({
        findProcess: state.findProcess,
        tjId: state.tjId,
        process: state.process,
    }));

    const [value, setValue] = useState("");

    const handleClick = (e) => {
        findProcess(value, tjId);

        if (process) {
            router.push('/process')
        }
    }

    return (
        <div className="flex gap-4">
            <div className="flex items-center justify-center flex-col">
                <input className="h-14 pl-2 placeholder-300 border-4 rounded-md text-3xl border-gray-400 bg-gray-100 outline-none"
                    type="text"
                    data-testid='input'
                    onChange={(e) => { setValue(e.target.value) }}
                    placeholder='Número do processo'
                />
            </div>
            <div>
                <button data-testid="button" onClick={(e) => handleClick(e)} className="h-14 w-20 border-4 border-gray-400 rounded-md hover:bg-gray-300 md:transition-all">
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
