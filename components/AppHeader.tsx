"use client";

import Link from "next/link";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export default function AppHeader() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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
            <li>Who We Are</li>
            <li>About Us</li>
            <li>Our Programs</li>
          </ul>

          <button className="app-header__content-ctas-contact-us">
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
          <li>Who We Are</li>
          <li>About Us</li>
          <li>Our Programs</li>
        </ul>

        <button className="app-header__popup-content-contact-us">
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
