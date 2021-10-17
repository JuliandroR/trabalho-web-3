import React, { Component } from "react";
import CardRegister from "../../components/CardRegister";
import "./adm.css";

export default class Adm extends Component {
  render() {
    return (
      <>
        <header class="navbar navbar-expand-lg navbar-light bg-light p-3 ps-5 shadow">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <strong>NEGRITUDE EM DEBATE</strong>
            </a>

            <a href="#">
              <ion-icon
                style={{ color: "#f56b39", fontSize: 36 }}
                name="exit-outline"
              ></ion-icon>
            </a>
          </div>
        </header>

        <main className="container-md">
          <div class="row d-flex justify-content-center mt-5">
            <h1 class="h2 text-center title">Fotos Enviadas</h1>
            <div class="title-bar mb-2"></div>
          </div>

          <div className="row d-flex justify-content-around flex-wrap">
          <CardRegister /><CardRegister /><CardRegister />
          </div>
        </main>
      </>
    );
  }
}
