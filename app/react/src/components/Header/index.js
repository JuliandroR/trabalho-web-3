import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header class="navbar navbar-expand-lg navbar-light bg-light p-3 ps-5 shadow">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <strong>NEGRITUDE EM DEBATE</strong>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <nav class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item ms-4">
                <a class="nav-link active" aria-current="page" href="#">
                  Projetos
                </a>
              </li>
              <li class="nav-item ms-4">
                <a class="nav-link" href="#">
                  Equipe
                </a>
              </li>
              <li class="nav-item ms-4">
                <a class="nav-link" href="#">
                  Álbum Digital
                </a>
              </li>
              <li class="nav-item ms-4">
                <a class="nav-link" href="#">
                  Fale com a gente
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
