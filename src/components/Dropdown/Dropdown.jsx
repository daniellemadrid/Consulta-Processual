import { useEffect, useState } from "react";
const courtMock = require("../../mock/courtMock.json");
import { useProcessStore } from '../../store/processes';
import React from 'react';

const Dropdown = () => {
    const { setTjId, setTjName, tjName, tjId } = useProcessStore((state) => ({
        setTjId: state.setTjId,
        setTjName: state.setTjName,
        tjName: state.tjName,
        tjId: state.tjId
    }));

    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (tjId) {
            setOpen(false);
        }
    }, [tjId])

    const handleSelect = (option, e) => {
        e.preventDefault();
        setTjName(option.name);
        setTjId(option.id);
        setOpen(!open);
    };

    return (
        <div data-testid="select" className="relative border-4 rounded-md border-gray-400 w-28 h-14 outline-none" onClick={() => setOpen(!open)}>
            <div className="hover:bg-gray-200 cursor-pointer md:transition-all w-full h-full flex justify-center">
                <button className="font-semibold text-gray-500">
                    {tjName ? tjName : 'Tribunais'}
                    <i className={`${open ? 'fas fa-chevron-up' : 'fas fa-chevron-down'} pl-2`} />
                </button>
            </div>
            {open ?
                <ul className="absolute top-16 list-none mx-[5px] border-2 gap-y-2 border-gray-400 rounded-md w-full flex items-center flex-col">
                    <li className="w-full flex justify-center hover:bg-gray-200" onClick={() => { setTjName(null); setTjId(null) }}>
                        <button>Tribunais</button>
                    </li>
                    {courtMock.map((option, key) => (
                        <li key={key} className="w-full flex justify-center hover:bg-gray-200" onClick={(e) => { handleSelect(option, e) }}>
                            <button>{option.name}</button>
                        </li>
                    ))
                    }
                </ul>
                :
                <></>
            }
        </div>
    )
};

export default Dropdown;
