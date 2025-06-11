"use client";

import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ContactUs() {
  const Gsap = gsap;
  const scrollTrigger = ScrollTrigger;

  useEffect(() => {
    Gsap.registerPlugin(scrollTrigger);

    Gsap.utils
      .toArray(".contact-us__content-writeup > *")
      .forEach((attr: any, i) => {
        Gsap.fromTo(
          attr,
          {
            opacity: 0,
          },
          {
            duration: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: attr,
              start: "top 95%",
              end: "bottom 85%",
              scrub: true, // Smoothly animate the movement as you scroll
              toggleActions: "play none none reverse",
              onUpdate: (self) => {
                const progress = self.progress.toFixed(2);
                attr.style.opacity = progress;
              },
            },
          }
        );
      });

    //move who-we-are__content-image down gradually on scroll
    Gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-us__content-form",
        start: "top center",
        end: "bottom top",
        scrub: true, // Smoothly animate the movement as you scroll
      },
    }).fromTo(
      ".contact-us__content-form",
      {
        y: -15, // Start position (100px above)
        duration: 1.5, // Duration of the animation
      },
      {
        y: 20, // End position (original position)
        duration: 1.5, // Duration of the animation
      }
    );
  }, []);
  return (
    <div className="contact-us" id="contact-us">
      <div className="contact-us__content">
        <div className="contact-us__content-writeup">
          <div className="contact-us__content-writeup-titles">
            <h2>CONTACT US</h2>
            <h3>We’d Love to Hear From You</h3>
            <p>Have questions about our program or how to get involved?</p>
          </div>
          <ul className="contact-us__content-writeup-details merriweather-font ">
            <li>
              <span>Email | </span>
              <a href="mailto:falrehabfoundation@gmail.com">
                falrehabfoundation@gmail.com
              </a>
            </li>
            <li>
              <span>Phone Number | </span>
              <a href="tel:+2348031234567">+234 803 123 4567</a>
            </li>
            <li>
              <span>Admission | </span> Address | D and T Estate, Ojogobi
              Avenue, Sabon, Lugbe, Abuja, Nigeria
            </li>
            <li>
              Socials
              <div style={{ marginLeft: "3px" }}>
                | Instagram @falrehabfoundation <br /> | Facebook
                @falrehabfoundation
              </div>
            </li>
          </ul>
        </div>
        <form className="contact-us__content-form">
          <div className="form-input__row">
            <div className="form-input">
              <label htmlFor="">Name</label>
              <input type="text" required />
            </div>
            <div className="form-input">
              <label htmlFor="">Email</label>
              <input type="email" required />
            </div>
          </div>
          <div className="form-input__row">
            <div className="form-input">
              <label htmlFor="">Phone Number</label>
              <input type="numeric" required />
            </div>
            <div className="form-input">
              <label htmlFor="">Subject</label>
              <input type="text" required />
            </div>
          </div>
          <div className="form-input__row">
            <div className="form-input">
              <label htmlFor="">Description</label>
              <textarea rows={6} required />
            </div>
          </div>
          <div className="form-input__row">
            <div>
              <button className="form-btn">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
