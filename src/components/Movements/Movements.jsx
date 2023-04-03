import React from 'react';
import { useProcessStore } from '../../store/processes';


const Movements = () => {

  const { process } = useProcessStore((state) => ({
    process: state.process
  }));

  console.log(process)

  return (
    <div className="flex flex-col gap-4 border-4 border-gray-300 w-2/5 py-3 mb-3">
      <div className="flex flex-col gap-4 w-fit">
        <label className="border-b-2 px-12 border-gray-300 text-2xl w-full">Movimentações</label>
        {process?.movements?.length == 0 || !process ?
          <div className="flex flex-col gap-4 w-full">
            <label className="px-12 text-2xl w-full">Nenhuma movimentação encontrada</label>
          </div>
          :
          <>
            {process?.movements?.map((process, key) => (
              <div key={key} className="px-12 flex flex-col py-2">
                <label className=" font-light">{process.date}</label>
                <label className="text-xl font-normal">{process.content}</label>
              </div>
            ))
            }
          </>
        }
      </div>
    </div>
  );
};

export default Movements;