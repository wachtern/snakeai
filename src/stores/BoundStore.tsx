import { create } from "zustand";
import createSettingsSlice, { SettingsSlice } from "./SettingsSlice";

const useBoundStore = create<SettingsSlice>()((...a) => ({
  ...createSettingsSlice(...a),
}));

export default useBoundStore;
