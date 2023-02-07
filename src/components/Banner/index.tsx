import "./Banner.css";

export default function Banner() {
  return (
    <div>
      <section className="hero">
        <div className="hero-body banner">
          <div>
            <p className="title text-title">To-do List</p>
          </div>
          <br />
          <div className="subtitle text-content">
            <p>Drag and drop to set your main properties,</p>
            <p>check when done and create what's new.</p>
          </div>
        </div>
      </section>
      <br />
    </div>
  );
}
