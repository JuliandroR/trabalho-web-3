import React, { Component } from "react";
import "./cardRegister.css";

export default class CardRegister extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewMore: false,
    };
  }
  render() {
    return (
      <div className="col-sm-5 m-3">
        <div className="card-photo row d-flex align-items-center justify-content-between">
          <div className="col-5 m-0 p-0">
            <img
              src="https://images.pexels.com/photos/8185942/pexels-photo-8185942.jpeg"
              className="w-100"
            />
          </div>
          <div className="d-flex flex-column col-7">
            <h3 className="h3 mb-3">Lorem ipsum idolor</h3>
            <p>
              <strong>Data de Nascimento: </strong>
              99/99/99
            </p>
            <p>
              <strong>Fotógrafo: </strong>
              Lorem Ipsum
            </p>
            <p>
              <strong>Título: </strong>
              Lorem Ipsum
            </p>

            {!this.state.viewMore && (
              <span
                onClick={() => {
                  this.setState({ viewMore: true });
                }}
              >
                <ion-icon
                  style={{ color: "#f56b39", fontSize: 36 }}
                  name="add-circle-outline"
                />
              </span>
            )}

            {this.state.viewMore && (
              <span
                onClick={() => {
                  this.setState({ viewMore: false });
                }}
              >
                <ion-icon
                  style={{ color: "#f56b39", fontSize: 36 }}
                  name="remove-circle-outline"
                />
              </span>
            )}
          </div>
          {this.state.viewMore && (
            <div className="row d-flex align-items-center justify-content-between  mt-4">
              <div className="col-6">
                <p>
                  <strong>Localidade: </strong>
                  Lorem Ipsum/LI
                </p>
                <p>
                  <strong>E-mail: </strong>
                  lorem@ipsum.com
                </p>
                <p>
                  <strong>Telefone: </strong>
                  (67) 9 9999-9999
                </p>
                <p>
                  <strong>CPF: </strong>
                  999.999.999-99
                </p>
              </div>
              <div className="col-6">
                <h4 className="h4">Dados do responsável</h4>

                <p>
                  <strong>Nome: </strong>
                  Lorem Ipsum
                </p>

                <p>
                  <strong>CPF: </strong>
                  999.999.999-99
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
