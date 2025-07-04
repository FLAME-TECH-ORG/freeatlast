"use client";

import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function WhoWeAre() {
  const Gsap = gsap;
  const scrollTrigger = ScrollTrigger;

  useEffect(() => {
    const mm = Gsap.matchMedia();

    Gsap.registerPlugin(scrollTrigger);

    Gsap.utils.toArray(".who-we-are-points").forEach((attr: any, i) => {
      Gsap.fromTo(
        attr,
        {
          y: 20, // Start position (30px below)
          opacity: 0, // Start with opacity 0
        },
        {
          y: 0, // End position (original position)
          duration: 0.8,

          scrollTrigger: {
            trigger: attr,
            start: "top 94%",
            end: "bottom 85%",
            scrub: true, // Smoothly animate the movement as you scroll
            snap: 1, // Snap to the nearest value
            toggleActions: "play none none reverse",
            // update the opacity and y position based on scroll position percentage
            onUpdate: (self) => {
              const progress = self.progress.toFixed(2) as any; // Get the progress as a percentage
              attr.style.opacity = progress;
            },
          },
          delay: i * 0.1, // Stagger the animation
        }
      );
    });

    // mobile just 30 y
    mm.add("(max-width: 1199px)", () => {
      Gsap.timeline({
        scrollTrigger: {
          trigger: ".who-we-are__content-image",
          start: "top center",
          end: "bottom top",
          scrub: true, // Smoothly animate the movement as you scroll
        },
      }).fromTo(
        ".who-we-are__content-image",
        {
          y: -15, // Start position (30px above)
        },
        {
          y: 16, // End position (original position)
          duration: 4, // Duration of the animation
        }
      );
    });

    //move who-we-are__content-image down gradually on scroll
    mm.add("(min-width: 1200px)", () => {
      Gsap.timeline({
        scrollTrigger: {
          trigger: ".who-we-are__content-image",
          start: "top center",
          end: "bottom top",
          scrub: true, // Smoothly animate the movement as you scroll
        },
      }).fromTo(
        ".who-we-are__content-image",
        {
          y: -55, // Start position (100px above)
        },
        {
          y: 65, // End position (original position)
          duration: 4, // Duration of the animation
        }
      );
    });

    // fade in the who-we-are__content-writeup children
    Gsap.utils
      .toArray(".who-we-are__content-writeup-top > *")
      .forEach((attr: any, i) => {
        Gsap.fromTo(
          attr,
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0, // End position (original position)
            // opacity: 1, // End with full opacity
            duration: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: attr,
              start: "top 95%",
              end: "bottom 85%",
              snap: 1,
              scrub: true, // Smoothly animate the movement as you scroll
              toggleActions: "play none none reverse",
              // change opacity based on scroll position percentage
              onUpdate: (self) => {
                const progress = self.progress.toFixed(2);
                attr.style.opacity = progress;
              },
            },
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
