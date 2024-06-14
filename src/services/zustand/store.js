import { create } from "zustand";

export const useStoreGlobal = create((set) => ({
  cursorVariant: "default",
  setCursorVariant: (cursorVariant) => {
    set({ cursorVariant });
  },
}));
