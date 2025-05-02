import React, { useState } from "react";
import useWindowWidth from "../services/hooks/windowWidth";
import Navbar from "../templates/components/navbar";
import ProjectsView from "../templates/views/projectsView";

export default function Projects() {
  const windowWidth = useWindowWidth();
  const [isLeaving, setIsLeaving] = useState(false);

  return (
    <React.Fragment>
      <Navbar setIsLeaving={setIsLeaving} isLeaving={isLeaving} />
      <ProjectsView windowWidth={windowWidth} isLeaving={isLeaving} />
    </React.Fragment>
  );
}
