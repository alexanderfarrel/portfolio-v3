import { useStoreGlobal } from "../zustand/store";

const setCustomCursor = (customCursor = "default") => {
  useStoreGlobal.setState({ customCursor });
};

export const cursorSend = (isDisabled = false) =>
  !isDisabled && setCustomCursor("send");
export const cursorCircular = (isDisabled = false) =>
  !isDisabled && setCustomCursor("circular");

const setCursorVariant = (cursorVariant) => {
  useStoreGlobal.setState({ cursorVariant });
};

export const cursorHidden = () => setCursorVariant("hidden");
export const textEnter = (isDisabled = false) =>
  !isDisabled && setCursorVariant("text");
export const linkEnter = (isDisabled = false) =>
  !isDisabled && setCursorVariant("link");

export const cursorDefault = () => {
  setCustomCursor("default"), setCursorVariant("default");
};
