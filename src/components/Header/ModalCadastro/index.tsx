import { useState } from "react";
import http from "../../../http";
import LoginBanner from "./LoginBanner";
import "./ModalCadastro.css";

export default function ModalCadastro({ onClose = () => {} }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const user = {
      nome,
      email,
      senha,
      confirmaSenha,
    };

    await http
      .post("/auth/cadastro", user)
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        setNome("");
        setEmail("");
        setSenha("");
        setConfirmaSenha("");
        onClose();
      })
      .catch((err) => {
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
                  <label className="label">Name</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      onChange={(e) => setNome(e.target.value)}
                      value={nome}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column is-half is-offset-one-quarter">
                <div className="field">
                  <label className="label">E-mail:</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
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
                      className="input"
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
                <div className="field">
                  <label htmlFor="" className="label">
                    Confirm Password:
                  </label>
                  <div className="control">
                    <input
                      type="password"
                      className="input"
                      onChange={(e) => setConfirmaSenha(e.target.value)}
                      value={confirmaSenha}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column is-half is-offset-one-quarter">
                <button className="button-login has-text-centered">
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
