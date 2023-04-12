import { create } from "zustand"
const processesMock = require("../mock/processesMock.json")

const mappedProcesses = processesMock.map((process) => process)

export const useProcessStore = create((set, get) => ({
    processes: [],
    processId: "",
    tjId: "",
    tjName: "",
    errorMessage: "",
    process: [],

    setProcesses: (processes) => set({ processes }),
    setErrorMessage: (errorMessage) => set({ errorMessage }),
    setTjId: (tjId) => set({ tjId }),
    setTjName: (tjName) => set({ tjName }),
    setProcessId: (processId) => set({ processId }),
    clearData: () => set({ processId: null, tjId: null, tjName: null, errorMessage: null, process: null }),
    findProcess: async (processId, tjId) => {
        set({ errorMessage: '' })
        if (processId == null || processId == '') {
            set({ errorMessage: "Digite um número de processo" })
            return
        }
        if (!tjId) {
            set({ errorMessage: "Selecione um tribunal" })
            return
        }
        if (mappedProcesses.find((process) => process.id == processId && process.idTJ != tjId)) {
            set({ errorMessage: "Processo não existe no tribunal selecionado" })
            return
        }
        if (mappedProcesses.find((process) => process.id == processId) == null) {
            set({ errorMessage: "Número do processo não encontrado" })
            return
        }
        if (get().processId == processId) {
            return
        }
        if (get().errorMessage == '') {
            set({ process: mappedProcesses.find((process) => process.id === processId) })
        }
    }
}))