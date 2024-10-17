import { StateCreator } from "zustand";

export interface GameSlice {
  stepsRemaining: number;
  setStepsRemaining: (steps: number) => void;
  generation: number;
  setGeneration: (gen: number) => void;
  individual: number;
  setIndividual: (individual: number) => void;
  individualsPerGen: number;
  setIndividualsPerGen: (individuals: number) => void;
  score: number;
  setScore: (score: number) => void;
  highscore: number;
  setHighscore: (highscore: number) => void;
  fitness: number;
  setFitness: (fitness: number) => void;
  highestFitness: number;
  setHighestFitness: (highestFitness: number) => void;
  timePassed: number;
  setTimePassed: (time: number) => void;
}

const createGameSlice: StateCreator<GameSlice> = (set) => ({
  stepsRemaining: 100,
  setStepsRemaining: (steps) => set({ stepsRemaining: steps }),
  generation: 1,
  setGeneration: (gen) => set({ generation: gen }),
  individual: 1,
  setIndividual: (individual) => set({ individual: individual }),
  individualsPerGen: 100,
  setIndividualsPerGen: (individuals) =>
    set({ individualsPerGen: individuals }),
  score: 0,
  setScore: (score) => set({ score: score }),
  highscore: 0,
  setHighscore: (highscore) => set({ highscore: highscore }),
  fitness: 0,
  setFitness: (fitness) => set({ fitness: fitness }),
  highestFitness: 0,
  setHighestFitness: (highestFitness) =>
    set({ highestFitness: highestFitness }),
  timePassed: 0,
  setTimePassed: (time) => set({ timePassed: time }),
});

export default createGameSlice;
