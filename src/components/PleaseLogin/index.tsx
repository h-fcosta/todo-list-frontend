import "./PleaseLogin.css";

export default function PleaseLogin() {
  return (
    <div className="columns is-centered box">
      <div className="column is-half">
        <div
          className="please-login-task"
          style={{ textAlign: "center", fontSize: "2em" }}
        >
          <strong>login, please</strong>
        </div>
      </div>
    </div>
  );
}
