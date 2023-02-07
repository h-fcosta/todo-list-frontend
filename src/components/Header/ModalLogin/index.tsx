import http from "../../../http";
import { useState } from "react";
import LoginBanner from "./LoginBanner";
import "./ModalLogin.css";
import useSession from "../../../hooks/useSession";

interface PropsModalLogin {
  onClose: () => void;
  aoEfetuarLogin: () => void;
}

export default function ModalLogin({
  onClose,
  aoEfetuarLogin,
}: PropsModalLogin) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { handleSignIn } = useSession();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const user = {
      email,
      senha,
    };

    await http
      .post("/auth/login", user)
      .then((res) => {
        handleSignIn(res.data);
        setEmail("");
        setSenha("");
        aoEfetuarLogin();
      })
      .catch((err) => {
        alert("E-mail or password incorrect.");
        console.log(err);
      });
  }

  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="box">
          <button className="close-modal" onClick={onClose}>
            close
          </button>
          <LoginBanner />
          <form onSubmit={handleSubmit}>
            <div className="columns">
              <div className="column is-half is-offset-one-quarter">
                <div className="field">
                  <label className="label">E-mail:</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      id="emailLogin"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column is-half is-offset-one-quarter">
                <div className="field">
                  <label htmlFor="" className="label">
                    Password:
                  </label>
                  <div className="control">
                    <input
                      type="password"
                      className="input is-centered"
                      id="password"
                      onChange={(e) => setSenha(e.target.value)}
                      value={senha}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column is-half is-offset-one-quarter">
                <button className="button-login has-text-centered">
                  Sign in
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
