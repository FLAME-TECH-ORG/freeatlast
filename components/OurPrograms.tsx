"use client";

import { useState } from "react";

export default function OurPrograms() {
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
    <div className="our-programs">
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
