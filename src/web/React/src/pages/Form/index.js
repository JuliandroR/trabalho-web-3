import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./form.css";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      cpf: "",
      email: "",
      phone: "",
      state: "",
      city: "",
      bornDate: null,
      nameTutor: "",
      cpfTutor: "",
      photo: null,
      photoTitle: "",
      photoAuthor: "",

      displayResponsavel: false,
      displayNextPart: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeBornDate = this.handleChangeBornDate.bind(this);
    this.handleClickNextButton = this.handleClickNextButton.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
    console.log(this.state);
  }

  handleChangeBornDate(event) {
    this.setState({ bornDate: event.target.value });

    const dateNow = new Date().getFullYear();
    let bornDate = new Date(event.target.value).getFullYear();

    if (dateNow - bornDate < 18) {
      this.setState({ displayResponsavel: true });
    } else {
      this.setState({ displayResponsavel: false });
    }
    // console.log(this.state.displayResponsavel);
  }

  handleClickNextButton() {
    this.setState({ displayNextPart: true });
  }

  render() {
    return (
      <>
        <Header />
        <main class="container container-md container-lg mt-5">
          <div class="row d-flex justify-content-center">
            <h1 class="h2 text-center title">Álbum digital</h1>
            <div class="title-bar mb-2"></div>
          </div>
          <form id="form" class="row" action="">
            <div class="col-md-6 p-5 p-sm-3 px-lg-4" id="firstPart">
              <div class="form-group">
                <label for="name">Nome:</label>
                <input
                  type="text"
                  class="form-control"
                  id="iname"
                  placeholder="Ex.: João da silva"
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
              </div>
              <div class="form-group">
                <label for="cpf">CPF:</label>
                <input
                  type="text"
                  class="form-control"
                  id="cpf"
                  placeholder="Ex.: 123.123.123-12"
                  oninput="applyMask(this, 'cpf')"
                  value={this.state.cpf}
                  onChange={(e) => this.setState({ cpf: e.target.value })}
                />
              </div>
              <div class="form-group">
                <label for="email">E-mail:</label>
                <input
                  type="email"
                  id="email"
                  class="form-control"
                  placeholder="Ex.: seuemail@dominio.com"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>
              <div class="form-group">
                <label for="phone">Telefone/Whatsapp:</label>
                <input
                  id="phone"
                  class="form-control"
                  type="tel"
                  placeholder="Ex.: (67) 9 9999-9999"
                  oninput="applyMask(this, 'phone')"
                  value={this.state.phone}
                  onChange={(e) => this.setState({ phone: e.target.value })}
                />
              </div>
              <div class="row d-flex justify-content-between">
                <div class="form-group col-sm-3">
                  <label for="state">Estado:</label>
                  <select
                    class="form-control"
                    id="state"
                    value={this.state.state}
                    onChange={(e) => this.setState({ state: e.target.value })}
                  >
                    <option></option>
                    <option>MS</option>
                  </select>
                </div>
                <div class="form-group col-sm-9">
                  <label for="state">Cidade:</label>
                  <select
                    class="form-control"
                    id="city"
                    value={this.state.city}
                    onChange={(e) => this.setState({ city: e.target.value })}
                  >
                    <option></option>
                    <option>Água Clara</option>
                    <option>Alcinópolis</option>
                    <option>Amambai</option>
                    <option>Anastácio</option>
                    <option>Anaurilândia</option>
                    <option>Angélica</option>
                    <option>Antônio João</option>
                    <option>Aparecida do Taboado</option>
                    <option>Aquidauana</option>
                    <option>Aral Moreira</option>
                    <option>Bandeirantes</option>
                    <option>Bataguassu</option>
                    <option>Batayporã</option>
                    <option>Bela Vista</option>
                    <option>Bodoquena</option>
                    <option>Bonito</option>
                    <option>Brasilândia</option>
                    <option>Caarapó</option>
                    <option>Camapuã</option>
                    <option>Campo Grande</option>
                    <option>Caracol</option>
                    <option>Cassilândia</option>
                    <option>Chapadão do Sul</option>
                    <option>Corguinho</option>
                    <option>Coronel Sapucaia</option>
                    <option>Corumbá</option>
                    <option>Costa Rica</option>
                    <option>Coxim</option>
                    <option>Deodápolis</option>
                    <option>Dois Irmãos do Buriti</option>
                    <option>Douradina</option>
                    <option>Dourados</option>
                    <option>Eldorado</option>
                    <option>Fátima do Sul</option>
                    <option>Figueirão</option>
                    <option>Glória de Dourados</option>
                    <option>Guia Lopes da Laguna</option>
                    <option>Iguatemi</option>
                    <option>Inocência</option>
                    <option>Itaporã</option>
                    <option>Itaquiraí</option>
                    <option>Ivinhema</option>
                    <option>Japorã</option>
                    <option>Jaraguari</option>
                    <option>Jardim</option>
                    <option>Jateí</option>
                    <option>Juti</option>
                    <option>Ladário</option>
                    <option>Laguna Carapã</option>
                    <option>Maracaju</option>
                    <option>Miranda</option>
                    <option>Mundo Novo</option>
                    <option>Naviraí</option>
                    <option>Nioaque</option>
                    <option>Nova Alvorada do Sul</option>
                    <option>Nova Andradina</option>
                    <option>Novo Horizonte do Sul</option>
                    <option>Paraíso das Águas</option>
                    <option>Paranaíba</option>
                    <option>Paranhos</option>
                    <option>Pedro Gomes</option>
                    <option>Ponta Porã</option>
                    <option>Porto Murtinho</option>
                    <option>Ribas do Rio Pardo</option>
                    <option>Rio Brilhante</option>
                    <option>Rio Negro</option>
                    <option>Rio Verde</option>
                    <option>Rochedo</option>
                    <option>Santa Rita do Pardo</option>
                    <option>São Gabriel do Oeste</option>
                    <option>Selvíria</option>
                    <option>Sete Quedas</option>
                    <option>Sidrolândia</option>
                    <option>Sonora</option>
                    <option>Tacuru</option>
                    <option>Taquarussu</option>
                    <option>Terenos</option>
                    <option>Três Lagoas</option>
                    <option>Vicentina</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="bornDate">Data de nascimento:</label>
                <input
                  type="date"
                  id="bornDate"
                  class="form-control"
                  value={this.state.bornDate}
                  onChange={this.handleChangeBornDate}
                />
              </div>
              <div
                style={
                  this.state.displayResponsavel ? { display: "block" } : {}
                }
                class={`row ${
                  this.state.displayResponsavel ? "fadeInAnimation" : ""
                }`}
                id="info-responsavel"
              >
                <div class="col-sm-12">
                  <h3 class="h3 text-center">Dados do responsável</h3>
                  <div class="form-group">
                    <label for="nameResponsavel">Nome do responsável:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="nameResponsavel"
                      placeholder="Ex.: João da silva"
                      value={this.state.nameTutor}
                      onChange={(e) =>
                        this.setState({ nameTutor: e.target.value })
                      }
                    />
                  </div>
                  <div class="form-group">
                    <label for="cpfResponsavel">CPF do Responsável:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="cpfResponsavel"
                      placeholder="Ex.: 123.123.123-12"
                      oninput="applyMask(this, 'cpf')"
                      value={this.state.cpfTutor}
                      onChange={(e) =>
                        this.setState({ cpfTutor: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
              <button
                type="button"
                id="next-button"
                class="btn btn-primary"
                onClick={this.handleClickNextButton}
              >
                Próximo
              </button>
            </div>
            <div
              class={`col-md-6 p-5 p-sm-3 mt-5 mt-md-0 px-lg-4 ${
                this.state.displayNextPart ? "reveal-animation" : "null"
              }`}
              id="secondPart"
            >
              <div class="row justify-content-center">
                <div
                  class="
                col-7 col-sm-8 col-lg-6 col-xl-4
                d-flex
                justify-content-center
                flex-wrap
              "
                >
                  <img
                    src="https://images.pexels.com/photos/2825034/pexels-photo-2825034.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=200"
                    class="photo-album img-fluid"
                    alt=""
                  />
                  <div class="form-group">
                    <label for="photo" class="label-file">
                      <button type="button" class="btn btn-link" disabled>
                        📷 Escolha sua foto
                      </button>
                    </label>
                    <input
                      type="file"
                      class="form-control-file"
                      id="photo"
                      placeholder="Sua foto"
                      value={this.state.photo}
                      onChange={(e) => this.setState({ photo: e.target.value })}
                    />
                  </div>
                </div>
                <div class="col-sm-8 col-md-12 col-xl-8">
                  <div class="form-group">
                    <label for="titlePhoto">Título da foto:</label>
                    <input
                      type="text"
                      id="titlePhoto"
                      class="form-control"
                      placeholder="Ex.: Lindo sorriso"
                      value={this.state.photoTitle}
                      onChange={(e) =>
                        this.setState({ photoTitle: e.target.value })
                      }
                    />
                  </div>
                  <div class="form-group">
                    <label for="authorPhoto">Nome do fotógrafo:</label>
                    <input
                      type="text"
                      id="titlePhoto"
                      class="form-control"
                      placeholder="Ex.: João da Silva"
                      value={this.state.photoAuthor}
                      onChange={(e) =>
                        this.setState({ photoAuthor: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="objetivos">Objetivos:</label>
                <textarea class="form-control" id="objetivos" rows="5" disabled>
                  O projeto tem como objetivo visibilizar a beleza a cultura e a
                  ancestralidade negra existentes no Mato Grosso do Sul,
                  historicamente apagados e fora dos padrões estéticos
                  eurocêntricos. Oportunizará assim, as discussões
                  étnico-raciais capazes de qualificar e encorajar as
                  professoras e professores a trabalharem com a problemática da
                  população negra, em sala de aula, na tentativa de diminuir o
                  arranjo da desigualdade existente no país. Para isso, a partir
                  das fotografias selecionadas para a mostra fotográfica, irá se
                  elaborar um álbum de fotografias que ao ser finalizado, será
                  direcionado para escolas públicas, com a intenção de
                  contribuir com o debate da Lei 10.639/03 que determina o
                  ensino de História e Cultura Afro-brasileira nas escolas.
                </textarea>
              </div>
              <div class="form-group">
                <label for="regras">Regras:</label>
                <textarea class="form-control" id="regras" rows="5" disabled>
                  ✔️ Cada pessoa poderá participar com uma fotografia ✔️ A
                  fotografia deve ser no formato digital JPG/JPEG ✔️ A
                  fotografia poderá ser colorida ou preta e branco ✔️ A técnica
                  para criação é livre mas precisa seguir o tema Beleza Negra
                  Resiste ✔️ Cada pessoa só poderá ser premiada uma única vez ✔️
                  As fotografias serão selecionadas por um júri composto de
                  pessoas pretas, que julgará a beleza negra a partir dos
                  elementos que permitirão evidenciar as conexões com as raízes
                  negras, com a ancestralidade negra, com a diáspora negra, com
                  as pequenas Áfricas que existem em cada pessoa negra que vive
                  em Mato Grosso do Sul ✔️ Toda fotografia deve ser encaminhada
                  com a autorização de uso de imagem. A UFMS e o IFMS reservam
                  para si, desde já, o direito incontestável de reproduzir as
                  fotografias inscritas em seu material institucional a qualquer
                  momento e por tempo indeterminado, dando os devidos créditos
                  ao fotógrafo.
                </textarea>
              </div>
              <button type="submit" class="btn btn-primary">
                Enviar contribuição
              </button>
            </div>
          </form>
        </main>
        <Footer />
      </>
    );
  }
}
