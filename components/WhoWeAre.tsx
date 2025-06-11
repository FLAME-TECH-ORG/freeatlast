"use client";

import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function WhoWeAre() {
  const Gsap = gsap;
  const scrollTrigger = ScrollTrigger;

  useEffect(() => {
    Gsap.registerPlugin(scrollTrigger);

    Gsap.utils.toArray(".who-we-are-points").forEach((attr: any, i) => {
      Gsap.fromTo(
        attr,
        {
          scale: 0,
        },
        {
          scale: 1,
          duration: 0.3,
          ease: "power4.out",

          scrollTrigger: {
            trigger: ".who-we-are__content",
            start: "top 90%",
            end: "bottom top",
          },
          delay: i * 0.2,
        }
      );
    });
  }, []);

  return (
    <div className="who-we-are" id="who-we-are">
      <div className="who-we-are__content">
        <div className="who-we-are__content-writeup">
          <div className="who-we-are__content-writeup-top">
            <h2>WHO WE ARE</h2>
            <h3>
              Welcome to Free At Last <br /> Rehabilitation Foundation
            </h3>
            <p>
              A faith-based, transformative rehabilitation center dedicated to
              restoring hope, rebuilding lives, and renewing purpose. We walk
              with each individual through:
            </p>
          </div>
          <ul className="who-we-are__content-writeup-bottom">
            <li className="who-we-are-points merriweather-font">
              <span>
                <img src="who/daily-support.svg" alt="" />
              </span>
              Daily Structure <br /> And Support
            </li>
            <li className="who-we-are-points merriweather-font">
              <span>
                <img src="who/balanced-nutrition.svg" alt="" />
              </span>
              Balanced <br /> Nutritious Meals
            </li>
            <li className="who-we-are-points merriweather-font">
              <span>
                <img src="who/mental-health.svg" alt="" />
              </span>
              Mental Health <br /> Therapy
            </li>
            <li className="who-we-are-points merriweather-font">
              <span>
                <img src="who/medical-care.svg" alt="" />
              </span>
              Professional Medical <br /> And Clinical Care
            </li>
            <li className="who-we-are-points merriweather-font">
              <span>
                <img src="who/spiritual.svg" alt="" />
              </span>
              Spiritual Growth <br /> And Guidance
            </li>
            <li className="who-we-are-points merriweather-font">
              <span>
                <img src="who/skill-acqusition.svg" alt="" />
              </span>
              Skill Acquisition And <br /> Vocational Training
            </li>
            <li className="who-we-are-points merriweather-font">
              <span>
                <img src="who/safe-environment.svg" alt="" />
              </span>
              A Safe And Loving Environment To <br /> Enhance Wholeness And A
              Fresh Start
            </li>
          </ul>
        </div>
        <div className="who-we-are__content-image">
          <img src="who-we-are.jpg" alt="Who We Are" />
        </div>
      </div>
    </div>
  );
}
