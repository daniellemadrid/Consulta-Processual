import Dropdown from "../../components/Dropdown/Dropdown";
import SearchBar from "../../components/SearchBar/SearchBar";
import Movements from "../../components/Movements/Movements";
import { useProcessStore } from '../../store/processes';
const courtMock = require("../../mock/courtMock.json");
import { useRouter } from "next/router";
import ProcessDetails from "../../components/ProcessDetails/ProcessDetails";
import React, { useEffect } from 'react';

const Process = () => {
    const router = useRouter();

    const { process, clearData } = useProcessStore((state) => ({
        process: state.process,
        clearData: state.clearData
    }));

    const courtNameById = courtMock.map((court) => {
        if (court.id == process?.idTJ) {
            return court.name
        }
    })

    const handleRedirect = () => {
        clearData();
        router.push('/');
    }

    return (
        <div className="flex flex-col">
            <div className="flex justify-center gap-4 bg-gray-100 w-full py-4">
                <div className="p-4" data-testid="buttonBack">
                    <i onClick={handleRedirect} className="fas fa-arrow-left cursor-pointer" />
                </div>
                <Dropdown />
                <SearchBar />
            </div>
            <div className="flex flex-col pl-48">
                <span data-testid="processNumber" className="text-2xl m-4 p-4">Processo n. {process?.id} do {courtNameById}</span>
                <span className="text-xl m-4 p-4">Distribuído em: {process?.date}</span>
            </div>
            <div className="flex w-full justify-around">
                <Movements />
                <ProcessDetails process={process} />
            </div>
        </div >

    )
}

export default Process;
