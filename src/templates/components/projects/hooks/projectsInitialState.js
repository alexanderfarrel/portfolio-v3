import { useEffect, useState } from "react";

export default function projectsInitialState() {
  const [initial, setInitial] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setInitial(false);
    }, 500);

    return () => clearTimeout(timeout);
  });

  return { initial };
}
