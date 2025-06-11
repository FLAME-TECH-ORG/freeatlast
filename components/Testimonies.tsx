"use client";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { Autoplay } from "swiper/modules";
import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Testimonies() {
  let featuredSwiper: Swiper;
  const Gsap = gsap;
  const scrollTrigger = ScrollTrigger;

  const [testimonies] = useState([
    {
      text: `“I came to Free At Last with nothing but regret and shame. I didn’t believe I could change—but they did. Through every prayer, every class, and every tear, I found healing. I found purpose. Today, I’m free—and I’m not going back.”`,
      name: "Chinwe",
    },
    {
      text: `“When I first arrived, I was lost and broken. But through the support of the staff and the community, I found my way back to myself. I learned that my past doesn’t define me—I define me.”`,
      name: "John",
    },
    {
      text: `“Free At Last isn’t just a program; it’s a family. They welcomed me with open arms and helped me rebuild my life from the ground up. I’m forever grateful for their love and support.”`,
      name: "Sarah",
    },
    {
      text: `“I thought I was beyond help. But Free At Last showed me that it’s never too late to change. They believed in me when I didn’t believe in myself, and now I’m living proof that transformation is possible.”`,
      name: "Michael",
    },
    {
      text: `“The journey wasn’t easy, but it was worth it. Free At Last gave me the tools I needed to overcome my addiction and reclaim my life. I’m proud of who I am today.”`,
      name: "Emily",
    },
  ]);

  const move = (way: string) => {
    if (way === "back") featuredSwiper.slidePrev();
    else featuredSwiper.slideNext();
  };

  useEffect(() => {
    featuredSwiper = new Swiper("#testimoniesSlide", {
      slidesPerView: "auto",
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      speed: 800,
      modules: [Pagination, Autoplay],
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    Gsap.registerPlugin(scrollTrigger);

    Gsap.utils
      .toArray(".testimonies__content__texts > *")
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

    // fade in
    Gsap.utils
      .toArray(".testimonies__content__testimonials")
      .forEach((attr: any, i) => {
        Gsap.fromTo(
          attr,
          {
            y: 40,
          },
          {
            y: 0, // End position (original position)
            duration: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: attr,
              start: "top 95%",
              end: "bottom bottom",
              snap: 1,
              scrub: true, // Smoothly animate the movement as you scroll
              toggleActions: "play none none reverse",
            },
          }
        );
      });
  }, []);
  return (
    <div className="testimonies">
      <div className="testimonies__content">
        <div className="testimonies__content__texts">
          <h2> TESTIMONIES</h2>
          <h3>Stories Of Freedom</h3>
          <p>
            Real people. Real pain. Real transformation. Hear from those who
            walked in broken—and walked out whole. These stories remind us that
            hope is never lost, and freedom is always possible.
          </p>
        </div>

        <div className="testimonies__content__testimonials">
          <button
            className="testimonies__content__testimonials-action"
            onClick={() => {
              move("back");
            }}
          >
            <FaChevronLeft />
          </button>
          <div id="testimoniesSlide" className="swiper">
            <div className="swiper-wrapper">
              {testimonies.map((testimony, index) => (
                <div
                  key={index}
                  className="testimonies__content__testimonials-item swiper-slide"
                >
                  <div className="testimonies__content__testimonials-item__values">
                    <p className="testimonies__content__testimonials-item__values-text">
                      {testimony.text}
                    </p>
                    <span className="testimonies__content__testimonials-item__values-author  merriweather-font">
                      {testimony.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="testimonies__content__testimonials-action"
            onClick={() => {
              move("forward");
            }}
          >
            <FaChevronRight />
          </button>
        </div>

        {/*  mobile actions */}
        <div className="testimonies__content-mobile-actions">
          <button
            className="testimonies__content-mobile-actions-action"
            onClick={() => {
              move("back");
            }}
          >
            <FaChevronLeft />
          </button>
          <button
            className="testimonies__content-mobile-actions-action"
            onClick={() => {
              move("forward");
            }}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
