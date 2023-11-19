import "./about.css";
import Face from "./assets/faceEbalo.png";

function About() {
  return (
    <section className="about">
      <div className="content join-asides">
        <aside className="about-text-side second-side side">
          <aside className="about-face-side first-side side">
            <h2 className="side-title about-title">About Me</h2>
            <img src={Face} alt="" />
          </aside>
          <p className="text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but
            <br />
            <br />
            <br />
            The leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
        </aside>
      </div>
    </section>
  );
}

export default About;
