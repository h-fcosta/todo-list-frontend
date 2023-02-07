import "./Header.css";
import { useState } from "react";
import Logo from "../../assets/Logo.png";
import ModalLogin from "./ModalLogin";
import ModalCadastro from "./ModalCadastro";

export default function Header() {
  const token = sessionStorage.getItem("token");

  const [modalLogin, setModalLogin] = useState(false);
  const [modalSignUp, setModalSignUp] = useState(false);
  const [usuarioLogado, setUsuarioLogado] = useState<boolean>(token != null);

  function aoEfetuarLogin() {
    setModalLogin(false);
    setUsuarioLogado(true);
  }

  function efetuarLogout() {
    setUsuarioLogado(false);
    sessionStorage.removeItem("token");
  }

  return (
    <div className="section">
      <nav className="level">
        <div className="level-left">
          <div className="level-item">
            <img src={Logo} alt="Logo da Coopers" />
          </div>
        </div>
        <div className="level-right">
          {!usuarioLogado && (
            <div className="level-item">
              <button
                className="btn-login is-size-6"
                type="button"
                onClick={() => setModalSignUp(true)}
              >
                sign up
              </button>
              {modalSignUp ? (
                <ModalCadastro onClose={() => setModalSignUp(false)} />
              ) : null}
            </div>
          )}

          {!usuarioLogado ? (
            <div className="level-item">
              <button
                className="btn-login is-size-6"
                type="button"
                onClick={() => setModalLogin(true)}
              >
                sign-in
              </button>
              {modalLogin ? (
                <ModalLogin
                  onClose={() => setModalLogin(false)}
                  aoEfetuarLogin={aoEfetuarLogin}
                />
              ) : null}
            </div>
          ) : (
            <div className="level-item">
              <button
                className="btn-login is-size-6"
                type="button"
                onClick={() => efetuarLogout()}
              >
                logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
