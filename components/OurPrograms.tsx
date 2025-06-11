"use client";

import gsap from "gsap";
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function OurPrograms() {
  const Gsap = gsap;
  const scrollTrigger = ScrollTrigger;

  useEffect(() => {
    Gsap.registerPlugin(scrollTrigger);

    Gsap.utils
      .toArray(".our-programs__content__texts > *")
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

    Gsap.utils
      .toArray(".our-programs__content-cards-card")
      .forEach((attr: any, i) => {
        Gsap.fromTo(
          attr,
          {
            y: 30, // Start position (30px below)
          },
          {
            y: 0, // End position (original position)
            duration: 0.8,

            scrollTrigger: {
              trigger: attr,
              start: "top 96%",
              end: "bottom 85%",
              scrub: true, // Smoothly animate the movement as you scroll
              toggleActions: "play none none reverse",
            },
            delay: i * 0.1, // Stagger the animation
          }
        );
      });

    // fade in the texts in the cards .our-programs__content-cards-card
    Gsap.utils
      .toArray(".our-programs__content-cards-card__texts > *")
      .forEach((attr: any, i) => {
        Gsap.fromTo(
          attr,
          {
            y: 5,
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

  const [programs] = useState([
    {
      image: "/our-programs/faith-based.jpg",
      title: "Faith-Based Rehabilitation",
      description:
        "A structured, 12-month live-in program combining spiritual discipleship, addiction counselling, and trauma recovery for individuals seeking total freedom",
    },
    {
      image: "/our-programs/therapeutic.jpg",
      title: "Therapeutic Activities",
      description: `We integrate group therapy, individual counseling, creative expression, physical wellness
routines, and community-building exercises to support healing`,
    },
    {
      image: "/our-programs/life-skill.jpg",
      title: "Life Skills & Empowerment",
      description:
        "Our residents receive training in financial literacy, vocational skills, leadership, and personal",
    },
    {
      image: "/our-programs/aftercare.jpg",
      title: "Aftercare Support",
      description: `Continued mentorship, spiritual accountability, and emotional support help maintain freedom
long after program completion`,
    },
  ]);

  return (
    <div className="our-programs" id="our-programs">
      <div className="our-programs__content">
        <div className="our-programs__content__texts">
          <h2> PROGRAMS</h2>
          <h3>Our Programs</h3>
          <p>
            From spiritual renewal to life skills training, each part of our
            12-month journey is designed to heal the whole person—body, mind,
            soul, and spirit.
          </p>
        </div>

        <div className="our-programs__content-cards">
          {programs.map((item) => (
            <div className="our-programs__content-cards-card" key={item.title}>
              <div className="our-programs__content-cards-card__image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="our-programs__content-cards-card__texts">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
