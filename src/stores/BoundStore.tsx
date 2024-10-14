import { create } from "zustand";
import createSettingsSlice, { SettingsSlice } from "./SettingsSlice";
import createGameSlice, { GameSlice } from "./GameSlice";

const useBoundStore = create<SettingsSlice & GameSlice>()((...a) => ({
  ...createSettingsSlice(...a),
  ...createGameSlice(...a),
}));

export default useBoundStore;
