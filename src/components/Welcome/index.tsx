import "./Welcome.css";
import foto1 from "../../assets/foto1.png";

export default function Welcome() {
  return (
    <div>
      <nav className="level section-home">
        <div className="level-left">
          <div>
            <h1 className="is-size-1 black-text">Organize</h1>
            <h1 className="is-size-2 green-text">your daily jobs</h1>
            <br />
            <h1 className="is-size-4 black-text">
              The only way to get things done
            </h1>
            <a href="#to-dos">
              <button className="btn-to-do">Go to To-do list</button>
            </a>
          </div>
        </div>
        <div className="level-right">
          <div>
            <img className="image" src={foto1} alt="Foto de um escritório" />
          </div>
        </div>
      </nav>
      <div style={{ textAlign: "center", fontSize: "2em" }}>
        <p>
          <i className="fa-sharp fa-solid fa-arrow-down"></i>
        </p>
      </div>
    </div>
  );
}
