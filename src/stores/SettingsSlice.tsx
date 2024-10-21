import { StateCreator } from "zustand";

export interface SettingsSlice {
  fieldSize: number;
  setFieldSize: (size: number) => void;
  screen: boolean;
  setScreen: (newScreen: boolean) => void;
}

const createSettingsSlice: StateCreator<SettingsSlice> = (set) => ({
  fieldSize: 8,
  setFieldSize: (size) => set({ fieldSize: size }),
  screen: false,
  setScreen: (newScreen) => set({ screen: newScreen }),
});

export default createSettingsSlice;
