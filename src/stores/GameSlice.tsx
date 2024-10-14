import { StateCreator } from "zustand";

export interface GameSlice {
  stepsRemaining: number;
  setStepsRemaining: (steps: number) => void;
}

const createGameSlice: StateCreator<GameSlice> = (set) => ({
  stepsRemaining: 100,
  setStepsRemaining: (steps) => set({ stepsRemaining: steps }),
});

export default createGameSlice;
