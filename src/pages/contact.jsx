import useWindowWidth from "../services/hooks/windowWidth";
import Navbar from "../templates/components/navbar";
import ContactView from "../templates/views/contactView";

export default function ContactPage() {
  const windowWidth = useWindowWidth();
  return (
    <>
      <Navbar />
      <ContactView windowWidth={windowWidth} />
    </>
  );
}
