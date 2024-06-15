import { create } from "zustand";

export const useStoreGlobal = create((set) => ({
  cursorVariant: "default",
  customCursor: "default",
  setCursorVariant: (cursorVariant) => {
    set({ cursorVariant });
  },
  setCustomCursor: (customCursor) => {
    set({ customCursor });
  },
}));
