import "./LoginBanner.css";

export default function LoginBanner() {
  return (
    <nav className="level">
      <div className="level-item">
        <img
          src={`${process.env.PUBLIC_URL}/assets/image1.png`}
          className="image is-96x96"
          alt=""
        />
        <div>
          <h1 className="is-size-3 welcome-form-top ">Sign up</h1>
          <h1 className="is-size-5 welcome-form-bottom">
            to create your to-do list
          </h1>
        </div>
      </div>
    </nav>
  );
}
