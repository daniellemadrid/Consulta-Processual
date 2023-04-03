import { useState } from "react";
const courtMock = require("../../mock/courtMock.json");
import { useProcessStore } from '../../store/processes';
import React from 'react';

const Dropdown = () => {
    const { setTjId, setTjName, tjName } = useProcessStore((state) => ({
        setTjId: state.setTjId,
        setTjName: state.setTjName,
        tjName: state.tjName,
    }));

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleSelect = (option) => {
        setTjName(option.name);
        setTjId(option.id);
        setOpen(!open);
    };

    return (
        <div data-testid="select" className="relative border-4 rounded-md border-gray-400 w-28 outline-none" onClick={handleOpen}>
            <div className="hover:bg-gray-200 cursor-pointer md:transition-all w-full h-full flex justify-center">
                <button className="font-semibold text-gray-500">
                    {tjName ? tjName : 'Tribunais'}
                    <i className={`${open ? 'fas fa-chevron-up' : 'fas fa-chevron-down'} pl-2`} />
                </button>
            </div>
            {open ?
                <ul className="absolute top-16 list-none mx-[5px] border-2 gap-y-2 border-gray-400 rounded-md w-full flex items-center flex-col">
                    <li className="w-full flex justify-center hover:bg-gray-200" onClick={() => { setSelected(null) }}>
                        <button>Tribunais</button>
                    </li>
                    {courtMock.map((option, key) => (
                        <li className="w-full flex justify-center hover:bg-gray-200" key={key} onClick={(e) => { handleSelect(option); e.preventDefault() }}>
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
