import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer bg ">
      <div className="content has-text-centered">
        <p className="text-footer">Need help?</p>
        <p className="text-footer">
          <a href="mailto:coopers@coopers.pro"> coopers@coopers.pro</a>
        </p>
        <p style={{ fontSize: "0.75em" }}>
          <i className="fa-regular fa-copyright"></i>
          2021 Coopers. All rights reserved.
        </p>
      </div>
      <div className="columns">
        <div className="column is-half is-offset-one-quarter shape-bottom"></div>
      </div>
    </footer>
  );
}
