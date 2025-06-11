"use client";

import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutUs() {
  const Gsap = gsap;
  const scrollTrigger = ScrollTrigger;

  useEffect(() => {
    const mm = Gsap.matchMedia();

    Gsap.registerPlugin(scrollTrigger);

    // mobile just 30 y
    mm.add("(max-width: 1199px)", () => {
      Gsap.timeline({
        scrollTrigger: {
          trigger: ".about-us__content-image",
          start: "top center",
          end: "bottom top",
          scrub: true, // Smoothly animate the movement as you scroll
        },
      }).fromTo(
        ".about-us__content-image",
        {
          y: -20, // Start position (30px above)
        },
        {
          y: 30, // End position (original position)
          duration: 4, // Duration of the animation
        }
      );
    });

    //move who-we-are__content-image down gradually on scroll
    mm.add("(min-width: 1200px)", () => {
      Gsap.timeline({
        scrollTrigger: {
          trigger: ".about-us__content-image",
          start: "top center",
          end: "bottom top",
          scrub: true, // Smoothly animate the movement as you scroll
        },
      }).fromTo(
        ".about-us__content-image",
        {
          y: -60, // Start position (100px above)
          duration: 1.5, // Duration of the animation
        },
        {
          y: 65, // End position (original position)
          duration: 1.5, // Duration of the animation
        }
      );
    });
  }, []);

  return (
    <div className="about-us" id="about-us">
      <div className="about-us__content">
        <div className="about-us__content-image">
          <img src="about-us.jpg" alt="About us" />
        </div>
        <div className="about-us__content-texts">
          <div className="about-us__content-texts-headers">
            <h2>About Us</h2>
            <h3>Our Story : The Birth Of Free At Last</h3>
          </div>

          <p>
            Free At Last Rehabilitation Foundation was born from a deep burden
            and a vision to restore lives. After listening to countless stories
            from individuals, stories of brokenness and hopelessness, it became
            clear that many were not lost by choice. They were simply tired.
            Tired of the pain, tired of the cycle, tired of the darkness, tired
            of the life they no longer recognised and didn’t know how to escape.
          </p>

          <p>
            These cries for change sparked the birth of Free At Last
            Rehabilitation Foundation, a place where transformation is possible,
            and new stories can begin. From that place of compassion and a
            desire to see true change, Free At Last Rehabilitation Foundation
            was birthed.
          </p>

          <p>
            On March 29th, 2025 the vision came to life as the facility
            officially launched, not just as a facility, but as a home, opening
            its doors to men and women seeking true freedom. Since then, we have
            been committed to walking with each individual through a one-year
            journey of spiritual, emotional, mental, and physical healing. At
            Free At Last, we don’t just help individuals get clean, we help them
            become whole
          </p>
        </div>
      </div>
    </div>
  );
}
