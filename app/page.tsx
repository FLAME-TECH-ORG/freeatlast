import AboutUs from "../components/AboutUs";
import Admission from "../components/Admission";
import AnchorScripture from "../components/AnchorScripture";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import IndexHero from "../components/IndexHero";
import OurPrograms from "../components/OurPrograms";
import OurVisionAndMission from "../components/OurVisionAndMission";
import Partnership from "../components/Partnership";
import Testimonies from "../components/Testimonies";
import WhoWeAre from "../components/WhoWeAre";
import styles from "./home-page.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <IndexHero />
      <AnchorScripture />
      <WhoWeAre />
      <AboutUs />
      <OurVisionAndMission />
      <OurPrograms />
      <Admission />
      <Testimonies />
      <Partnership />
      <ContactUs />
      <Footer />
    </div>
  );
}
