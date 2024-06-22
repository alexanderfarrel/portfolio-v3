import { useEffect, useState } from "react";

export default function handleYValue({ url }) {
  const [yValue, setYValue] = useState(0); // bg blue animation
  const [defaultYValue, setDefaultYValue] = useState(0);
  useEffect(() => {
    if (url === "/") {
      setDefaultYValue(-80);
      setYValue(-80);
    } else if (url === "/achievements") {
      setDefaultYValue(40);
      setYValue(40);
    } else if (url === "/projects") {
      setDefaultYValue(80);
      setYValue(80);
    } else if (url === "/contact") {
      setDefaultYValue(-40);
      setYValue(-40);
    } else if (url === "/home") {
      setDefaultYValue(-80);
      setYValue(-80);
    }
  }, []);

  return { yValue, setYValue, defaultYValue };
}
