import {create} from 'zustand'
import {darkTheme} from "@/styles/theme";

interface BearState {
    themeBoolean: boolean,
    switchTheme: (bool: boolean) => void,
}

export const useBearStore = create<BearState>((set, get) => ({
    themeBoolean: true,
    switchTheme: (bool) => set({themeBoolean: bool})
}))
