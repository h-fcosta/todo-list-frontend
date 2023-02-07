import "./LoginBanner.css";

export default function LoginBanner() {
  return (
    <nav className="level">
      <div className="level-item">
        <img
          src={`${process.env.PUBLIC_URL}/assets/image1.png`}
          className="image is-128x128"
          alt=""
        />
        <div>
          <h1 className="is-size-1 welcome-form-top ">Sign in</h1>
          <h1 className="is-size-3 welcome-form-bottom">to access your list</h1>
        </div>
      </div>
    </nav>
  );
}
