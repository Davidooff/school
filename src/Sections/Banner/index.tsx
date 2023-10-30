import "./banner.css";

function Banner() {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1 className="banner-title">
          Name’s Online <br /> School Tutoring
        </h1>
        <p className="rich-text banner-text">Together to Success</p>
        <a href="#Contact" className="banner-btn">
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Banner;
