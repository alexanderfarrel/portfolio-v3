import { useEffect, useState } from "react";

export default function handleAnimationAndTransition({ open, url }) {
  const [initial, setInitial] = useState(true); // animation initialization
  const [timeoutId, setTimeoutId] = useState(null); // bg blue animation
  const [options, setOptions] = useState({
    isHidden: false,
    startCount: false,
  });

  // initial animation
  const { isHidden, startCount } = options;
  useEffect(() => {
    const time = setTimeout(
      () => {
        setInitial(false);
        setOptions({ isHidden: false, startCount: true });
      },
      url == "/" ? 8500 : url == "/home" ? 3200 : 3000
    );

    return () => clearTimeout(time);
  }, []);

  // transitition close after 3 seconds
  useEffect(() => {
    if (!startCount) {
      return;
    }
    const id = setTimeout(() => {
      if (!open) {
        setOptions({ isHidden: true, startCount: false });
      }
    }, 3000);
    setTimeoutId(id);

    return () => clearTimeout(id);
  }, [startCount, open]);

  return { initial, setOptions, isHidden, timeoutId };
}
