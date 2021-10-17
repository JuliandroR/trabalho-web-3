import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer class="d-flex flex-column align-items-center pb-5">
        <div class="d-inline-flex mb-4 mt-4">
          <ion-icon class="display-6" name="logo-instagram"></ion-icon>
          <ion-icon class="display-6 mx-4" name="logo-youtube"></ion-icon>
          <ion-icon class="display-6" name="logo-facebook"></ion-icon>
        </div>

        <strong>Desenvolvido por Bruno Casas e Juliando Rocha</strong>
      </footer>
    );
  }
}
