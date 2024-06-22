import useWindowWidth from "../services/hooks/windowWidth";
import AchievementsView from "../templates/views/achievementsView";

export default function Achievements() {
  const windowWidth = useWindowWidth();
  return <AchievementsView windowWidth={windowWidth} />;
}
