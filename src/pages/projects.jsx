import React from "react";
import useWindowWidth from "../services/hooks/windowWidth";
import Navbar from "../templates/components/navbar";
import ProjectsView from "../templates/views/projectsView";

export default function Projects() {
  const windowWidth = useWindowWidth();

  return (
    <React.Fragment>
      <Navbar />
      <ProjectsView windowWidth={windowWidth} />
    </React.Fragment>
  );
}
