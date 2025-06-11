"use client";

import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Partnership() {
  const Gsap = gsap;
  const scrollTrigger = ScrollTrigger;

  useEffect(() => {
    Gsap.registerPlugin(scrollTrigger);

    // fade in partnership once they appear on the screen

    Gsap.timeline({
      scrollTrigger: {
        trigger: ".partnership__content",
        start: "top center",
        end: "bottom top",
        scrub: true, // Smoothly animate the movement as you scroll
      },
    }).fromTo(
      ".partnership__content",
      {
        y: -20, // Start position (100px above)
      },
      {
        y: 20, // End position (original position)
        duration: 4, // Duration of the animation
      }
    );
  }, []);

  return (
    <div className="partnership">
      <div className="partnership__content">
        <div className="partnership__content-wrapper">
          <h2>PARTNER WITH US</h2>
          <h3>Be A Vessel Of Hope</h3>
          <p>
            Join us in transforming lives. Whether through mentorship,
            donations, or offering your professional services, we welcome your
            support.
          </p>
          <div className="partnership__content-actions">
            <button>Partner With Us</button>
            <button className="secondary">Donate Now</button>
          </div>
        </div>
      </div>
      <div className="partnership-overlay"></div>
    </div>
  );
}
