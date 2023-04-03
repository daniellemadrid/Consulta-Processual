import { create } from "zustand"
const processesMock = require("../mock/processesMock.json")

const mappedProcesses = processesMock.map((process) => process)

export const useProcessStore = create((set, get) => ({
    processes: [],
    processId: "",
    tjId: "",
    tjName: "",
    process: [],

    setProcesses: (processes) => set({ processes }),
    setTjId: (tjId) => set({ tjId }),
    setTjName: (tjName) => set({ tjName }),
    setProcessId: (processId) => set({ processId }),
    findProcess: async (processId) => set({
        process: mappedProcesses.find((process) => process.id === processId && process.idTJ == get().tjId ? process : null),
    })
}))