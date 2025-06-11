"use client";

import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function OurVisionAndMission() {
  const Gsap = gsap;
  const scrollTrigger = ScrollTrigger;

  useEffect(() => {
    Gsap.registerPlugin(scrollTrigger);

    // fade in our-vision-and-mission-container__content once they appear on the screen
    Gsap.utils
      .toArray(".our-vision-and-mission-container__content")
      .forEach((attr: any, i) => {
        Gsap.fromTo(
          attr,
          {
            opacity: 0,
            y: 10,
          },
          {
            y: 0,
            duration: 0.5,
            ease: "power4.out",
            scrollTrigger: {
              trigger: attr,
              start: "top 94%",
              end: "bottom 85%",
              toggleActions: "play none none reverse",
              // change opacity based on scroll position percentage
              onUpdate: (self) => {
                const progress = self.progress.toFixed(2);
                attr.style.opacity = progress;
              },
            },
            delay: i * 0.2,
          }
        );
      });
  }, []);

  return (
    <div className="our-vision-and-mission">
      <div className="our-vision-and-mission-container mission">
        <div className="our-vision-and-mission-container__content">
          <div className="our-vision-and-mission-container-head">
            <h2>OUR MISSION</h2>
            <h3>Offering Holistic And Faith-Based Rehabilitation</h3>
          </div>
          <div className="our-vision-and-mission-container-text">
            <p>
              We offer holistic and faith-based rehabilitation through spiritual
              development, therapeutic interventions, life skills training, and
              community reintegration support
            </p>
          </div>
        </div>
      </div>

      <div className="our-vision-and-mission-container vision">
        <div className="our-vision-and-mission-container__content">
          <div className="our-vision-and-mission-container-head">
            <h2>OUR VISION</h2>
            <h3>Seeing Men And Women Live Fulfilled lives Through Christ</h3>
          </div>
          <div className="our-vision-and-mission-container-text">
            <p>
              To see men and women completely free from addiction, emotional
              bondage, and destructive cycles—living fulfilled lives through the
              power of Christ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
