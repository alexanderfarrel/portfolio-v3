import { useState } from "react";
import useWindowWidth from "../services/hooks/windowWidth";
import Navbar from "../templates/components/navbar";
import ContactView from "../templates/views/contactView";

export default function ContactPage() {
  const windowWidth = useWindowWidth();
  const [isLeaving, setIsLeaving] = useState(false);

  return (
    <>
      <Navbar setIsLeaving={setIsLeaving} isLeaving={isLeaving} />
      <ContactView windowWidth={windowWidth} isLeaving={isLeaving} />
    </>
  );
}
