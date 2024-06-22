import { useStoreGlobal } from "../zustand/store";

const setCursorVariant = (cursorVariant) => {
  useStoreGlobal.setState({ cursorVariant });
};
export const cursorHidden = () => setCursorVariant("hidden");
export const textEnter = (isDisabled = false) =>
  !isDisabled && setCursorVariant("text");
export const linkEnter = (isDisabled) =>
  !isDisabled && setCursorVariant("link");

const setCustomCursor = (customCursor) => {
  useStoreGlobal.setState({ customCursor });
};
export const cursorSend = (isDisabled) =>
  !isDisabled && setCustomCursor("send");
export const cursorCircular = (isDisabled) =>
  !isDisabled && setCustomCursor("circular");
export const cursorLink = () => setCustomCursor("link");
export const cursorDownload = () => setCustomCursor("download");
export const cursorSlide = () => setCustomCursor("slide");
export const cursorClose = () => setCustomCursor("close");
export const cursorBackToTop = () => setCustomCursor("backToTop");

export const cursorDefault = () => {
  setCustomCursor("default"), setCursorVariant("default");
};
