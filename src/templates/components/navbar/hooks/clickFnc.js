export default function clickFnc({
  open,
  setOpen,
  isHidden,
  setOptions,
  timeoutId,
}) {
  return () => {
    if (isHidden) {
      // Update state only if it's necessary
      if (isHidden) {
        setOptions({ isHidden: false, startCount: false });
        setTimeout(() => {
          setOpen(true);
        }, 100);
      }
    } else if (open) {
      // Update state only if it's necessary
      if (open) {
        setOpen(false);
        setOptions({ startCount: true });
      }
    } else {
      // Update state only if it's necessary
      if (!open) {
        setOpen(true);
        setOptions({ startCount: false });

        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      }
    }
  };
}
