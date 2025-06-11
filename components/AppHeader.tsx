"use client";

import Link from "next/link";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default function AppHeader() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const Gsap = gsap;

  Gsap.registerPlugin(ScrollToPlugin);

  type sections = "#who-we-are" | "#about-us" | "#our-programs" | "#contact-us";

  const scrollToSection = (sectionId: sections) => {
    console.log(`Scrolling to section: ${sectionId}`);

    gsap.to(window, {
      duration: 1.5,
      scrollTo: {
        y: sectionId,
        autoKill: false, // Prevents the scroll from being interrupted
        offsetY: sectionId === "#our-programs" ? 100 : 50, // Adjusts the scroll position to account for fixed headers
      },
      ease: "power2.inOut",
    });
    setShowMobileMenu(false); // Close the mobile menu after scrolling
  };

  return (
    <div className="app-header">
      <div className="app-header__content">
        <Link href="/">
          <img
            src="/logo.png"
            className="app-header__content-logo"
            alt="Free at last logo"
          />
        </Link>

        <div className="app-header__content-ctas">
          <ul className="app-header__content-ctas-links">
            <li onClick={() => scrollToSection("#who-we-are")}>Who We Are</li>
            <li onClick={() => scrollToSection("#about-us")}>About Us</li>
            <li onClick={() => scrollToSection("#our-programs")}>
              Our Programs
            </li>
          </ul>

          <button
            className="app-header__content-ctas-contact-us"
            onClick={() => scrollToSection("#contact-us")}
          >
            Contact Us
          </button>
        </div>
        <button
          className="app-header__content-ctas-mobile-menu-trigger"
          onClick={() => {
            setShowMobileMenu((prev) => !prev);
          }}
        >
          {showMobileMenu ? <IoClose /> : <IoIosMenu />}
        </button>
      </div>

      <div
        className={`app-header__popup-content ${showMobileMenu && "active"}`}
      >
        <ul className="app-header__popup-content-links">
          <li onClick={() => scrollToSection("#who-we-are")}>Who We Are</li>
          <li onClick={() => scrollToSection("#about-us")}>About Us</li>
          <li onClick={() => scrollToSection("#our-programs")}>Our Programs</li>
        </ul>

        <button
          className="app-header__popup-content-contact-us"
          onClick={() => scrollToSection("#contact-us")}
        >
          Contact Us
        </button>
      </div>

      <div
        className="app-header-popup-backdrop"
        style={{ display: showMobileMenu ? "block" : "none" }}
        onClick={() => {
          setShowMobileMenu(false);
        }}
      ></div>
    </div>
  );
}
