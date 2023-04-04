
import React from 'react';
import Dropdown from '../../components/Dropdown/Dropdown';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useProcessStore } from '../../store/processes';
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {
  const [formError, setFormError] = useState(false);

  const { errorMessage, clearData } = useProcessStore((state) => ({
    errorMessage: state.errorMessage,
    clearData: state.clearData
  }));

  useEffect(() => {
    errorMessage ? setFormError(true) : setFormError(false)
  }, [errorMessage])

  useEffect(() => {
    clearData();
  }, [])


  return (
    <div className="w-screen h-screen flex flex-col items-center gap-y-11 justify-center gap-3 bg-gray-100">
      <div className="flex flex-col items-center">
        <label className="text-6xl p-10 font-bold">Busca de processos</label>
        <label className="text-xl"> Selecione um tribunal e busque pelo número unificado de um processo específico.</label>
      </div>
      <div className="flex gap-4">
        <Dropdown />
        <div className='flex flex-col'>
          <SearchBar />
          {formError ?
            <div className='flex '>
              <span className="flex gap-2 items-center">
                <i className='fas fa-exclamation-circle text-yellow-300 animate-pulse' />
                <label className="text-gray-600 text-lg font-light">{errorMessage}</label>
              </span>
            </div>
            :
            <></>
          }
        </div>
      </div>
    </div>
  );
};

export default Home;