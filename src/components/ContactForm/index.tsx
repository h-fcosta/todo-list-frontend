import "./ContactForm.css";

export default function ContactForm() {
  return (
    <div className="columns" id="formulario">
      <div className="column is-half is-offset-one-quarter">
        <div className="column is-half is-offset-one-quarter"></div>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <div className="box-icon">
                <i className="fa-sharp fa-solid fa-envelope-open-text"></i>
              </div>
            </div>
            <div className="media-content">
              <div className="content" style={{ textAlign: "left" }}>
                <p>
                  GET IN
                  <br />
                  <strong>TOUCH</strong>
                </p>
              </div>
            </div>
          </article>
          <br />
          <form action="">
            <div className="field">
              <label className="label">Your Name</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  placeholder="type your name here"
                />
              </div>
            </div>
            <div className="field is-grouped">
              <p className="control is-expanded">
                <label className="label">E-mail</label>
                <input
                  type="text"
                  className="input"
                  placeholder="example@example.com"
                />
              </p>
              <p className="control">
                <label className="label">Phone Number</label>
                <input
                  type="text"
                  className="input"
                  placeholder="(  ) _____-____"
                />
              </p>
            </div>
            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="type your message here"
                ></textarea>
              </div>
            </div>
            <div className="field box-btn-form">
              <button className="btn-form">SEND NOW</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
