export default function IndexHero() {
  return (
    <div className="index-hero">
      <video
        id="video"
        playsInline
        loop
        muted
        autoPlay
        data-wf-ignore="true"
        data-object-fit="cover"
      >
        <source src="hero.mp4" data-wf-ignore="true" />
      </video>
      <div className="index-hero__content">
        <div className="index-hero__content-text">
          <h1 className="merriweather-font">
            At Free At Last, Recovery Isn’t A One-Day Miracle. It’s A One-Year
            Journey.
          </h1>
          <p>
            One full year of consistent care. One year of healing—physically,
            mentally, emotionally, and spiritually.
          </p>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
}
