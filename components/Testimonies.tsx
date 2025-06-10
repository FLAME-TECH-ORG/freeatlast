"use client";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

export default function Testimonies() {
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
          <button className="testimonies__content__testimonials-action">
            <FaChevronLeft />
          </button>
          <div className="testimonies__content__testimonials-cards"></div>
          <button className="testimonies__content__testimonials-action">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
