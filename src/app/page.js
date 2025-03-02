import { Footer } from "src/components/Footer/page";
import Hero from "../components/Hero/Page";
import { Services } from "../components/Services/Page";
import { Work } from "src/components/Work/page";
import Cubed from "src/components/Cube";
import { Hook } from "src/components/Creativehook/Hook";
export default function Home() {
  const videoSrc = '/background.mp4';

  return (
    <div >
      <Hero videoSrc={videoSrc} />
      <Hook/>
      <Services/>
      <Work/>
      <Footer/>
    </div>
  );
}