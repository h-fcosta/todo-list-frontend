import "./NewsGallery.css";
import coworkers from "../../assets/funcionarios.png";
import artisan from "../../assets/artesao.png";
import stitch from "../../assets/costura.png";

export default function NewsGallery() {
  return (
    <div className="section section-background">
      <p className="title" style={{ color: "white" }}>
        <strong>good things</strong>
      </p>
      <div className="columns" style={{ textAlign: "justify" }}>
        <div className="column is-one-third">
          <div className="card">
            <div className="card-image">
              <figure className="image">
                <img src={coworkers} alt="two coworkers" />
              </figure>
            </div>
            <div className="card-content">
              Organize your daily job enhance your life performance
              <br />
              <a className="read-more" href="google.com" target="_blank">
                read more
              </a>
            </div>
          </div>
        </div>
        <div className="column is-one-third">
          <div className="card">
            <div className="card-image">
              <figure className="image">
                <img
                  src={artisan}
                  alt="artisan placing his craft on a wooden table"
                />
              </figure>
            </div>
            <div className="card-content">
              Mark one activity as done makes your brain understands the power
              of doing.
              <br />
              <a className="read-more" href="google.com" target="_blank">
                read more
              </a>
            </div>
          </div>
        </div>
        <div className="column is-one-third">
          <div className="card">
            <div className="card-image">
              <figure className="image">
                <img
                  src={stitch}
                  alt="hand of a seamstress using a stitching machine"
                />
              </figure>
            </div>
            <div className="card-content">
              Careful with missunderstanding the difference between a list of
              things and a list of desires.
              <br />
              <a className="read-more" href="google.com" target="_blank">
                read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
