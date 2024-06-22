import useWindowWidth from "../services/hooks/windowWidth";
import { BgStars, Navbar } from "../templates/components/importComponents";
import HomeView from "../templates/views/homeView";

export default function Home() {
  const windowWidth = useWindowWidth();

  return (
    <>
      <Navbar />
      <HomeView windowWidth={windowWidth} />
      <BgStars factor={windowWidth < 1000 ? "5" : "3"} delay={2} />
    </>
  );
}
