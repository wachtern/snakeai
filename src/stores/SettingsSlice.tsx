import { StateCreator } from "zustand";

export interface SettingsSlice {
  fieldSize: number;
  setFieldSize: (size: number) => void;
}

const createSettingsSlice: StateCreator<SettingsSlice> = (set) => ({
  fieldSize: 7,
  setFieldSize: (size) => set({ fieldSize: size }),
});

export default createSettingsSlice;
