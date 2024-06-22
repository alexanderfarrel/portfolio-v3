export default function handleFlipFnc({
  isDisabled,
  setIsDisabled,
  isAnimating,
  setIsAnimating,
  isFlipped,
  setIsFlipped,
}) {
  if (isDisabled) return;
  setIsDisabled(true);
  setIsAnimating(!isAnimating);
  setTimeout(() => {
    setIsFlipped(!isFlipped);
  }, 500);
  setTimeout(
    () => {
      setIsDisabled(false);
    },
    isFlipped ? 1500 : 2200
  );
}
