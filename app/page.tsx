"use client";

import { useEffect } from "react";
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
import { initLenis } from "../utils/lenis";

export default function Home() {
  useEffect(() => {
    const lenis = initLenis();

    return () => {
      // Cleanup Lenis instance on unmount
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);
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
