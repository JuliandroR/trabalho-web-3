import React, { Component } from "react";
import "./login.css";

import login from "../../assets/login.png";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: "",
    };
  }
  render() {
    return (
      <div className="container-md w-100 h-100 d-flex mt-5">
        <div className="row d-flex align-items-center card-login w-75 m-auto">
          <div className="col-md-5 p-0 m-0">
            <img
              src={login}
              className="w-100 p-0 m-0"
              alt=""
            />
          </div>
          <div className="col-md-7 p-5 m-0  d-flex row align-items-center justify-content-start h-75">
            <div className="row d-flex justify-content-start mb-3">
              <h1 className="h2 text-left title">Entrar</h1>
              <div className="title-bar mb-3"></div>
            </div>

            <form id="form" className="row w-75" action="">
              <div className="form-group">
                <label for="email">Usuário:</label>
                <input
                  type="text"
                  id="user"
                  className="form-control"
                  value={this.state.user}
                  onChange={(e) => this.setState({ user: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label for="email">Senha:</label>
                <input
                  type="password"
                  id="user"
                  className="form-control"
                  value={this.state.password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </div>
              <button type="submit" className="btn btn-primary w-50 m-3">
                Acessar
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
