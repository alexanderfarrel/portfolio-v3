import { useState } from "react";
import useWindowWidth from "../services/hooks/windowWidth";
import Navbar from "../templates/components/navbar";
import AchievementsView from "../templates/views/achievementsView";

export default function Achievements() {
  const windowWidth = useWindowWidth();
  const [isLeaving, setIsLeaving] = useState(false);

  return (
    <>
      <Navbar setIsLeaving={setIsLeaving} isLeaving={isLeaving} />
      <AchievementsView windowWidth={windowWidth} isLeaving={isLeaving} />
    </>
  );
}
