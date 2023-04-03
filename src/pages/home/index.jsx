
import React from 'react';
import Dropdown from '../../components/Dropdown/Dropdown';
import SearchBar from '../../components/SearchBar/SearchBar';

const Home = () => {

  return (
    <div className="w-screen h-screen flex flex-col items-center gap-y-11 justify-center gap-3 bg-gray-100">
      <div className="flex flex-col items-center">
        <label className="text-6xl p-10 font-bold">Busca de processos</label>
        <label className="text-xl"> Selecione um tribunal para listar os processos ou busque pelo número
          unificado de um processo específico.</label>
      </div>
      <div className="flex gap-4">
        <Dropdown/>
        <SearchBar />
      </div>
    </div>
  );
};

export default Home;