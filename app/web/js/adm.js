if (localStorage.token !== null) {
  let time_token = new Date(parseInt(localStorage.time_token) * 1000);
  let now = new Date();
  console.log(time_token);
  console.log(now);

  if (time_token - now < 0) {
    localStorage.time_token = 0;
    localStorage.token = null;
    window.location.href = "/login.html";
  }
}

window.onload = function () {
  document.getElementById("logout").addEventListener("click", function () {
    if (confirm("Tem certeza que deseja sair?")) {
      localStorage.setItem("token", null);
      localStorage.setItem("time_token", null);
      window.location.href = "/login.html";
    }
  });
};

fetch("/api/images", {
  method: "GET",
  headers: {
    authorization: "Bearer " + localStorage.token,
  },
}).then((resp) => resp.json().then(createCards));

function createCards(data) {
  let registers = data;

  for (const key in registers) {
    let date = new Date(registers[key].collaborator.bornDate);

    let div = document.createElement("div");
    div.classList.add("col-sm-5", "m-3");
    div.id = key;
    div.innerHTML = `
        <div class="card-photo row d-flex align-items-center justify-content-between">
          <div class="col-5 m-0 p-0">
            <img
              src="${registers[key].img}"
              class="w-100"
            />
          </div>
          <div class="d-flex flex-column col-7">
            <h3 class="h3 mb-3">${registers[key].collaborator.name}</h3>
            <p>
              <strong>Data de Nascimento: </strong>
              ${date.getDate() + 1}/${date.getMonth() + 1}/${date.getFullYear()}
            </p>
            <p>
              <strong>Fotógrafo: </strong>
              ${registers[key].photographer}
            </p>
            <p>
              <strong>Título: </strong>
              ${registers[key].title}
            </p>
              <span class="view" onClick="viewMore(${key}, true)">
                <ion-icon
                  style="color: #f56b39; font-size: 36px"
                  name="add-circle-outline"
                />
              </span>
              <span class="hidden display-none" onClick="viewMore(${key}, false)">
                <ion-icon
                  style="color: #f56b39; font-size: 36px"
                  name="remove-circle-outline"
                />
              </span>
          </div>
            <div class="row d-flex align-items-center justify-content-between mt-4 more-information display-none">
              <div class="col-7">
                <p>
                  <strong>Localidade: </strong>
                  ${registers[key].collaborator.city}/${
      registers[key].collaborator.state
    }
                </p>
                <p>
                  <strong>E-mail: </strong>
                  ${registers[key].collaborator.email}
                </p>
                <p>
                  <strong>Telefone: </strong>
                  ${registers[key].collaborator.phone}
                </p>
                <p>
                  <strong>CPF: </strong>
                  ${registers[key].collaborator.cpf}
                </p>
              </div>
              ${
                registers[key].collaborator.Responsible.name !== null
                  ? `
                <div class="col-5 ">
                  <h4 class="h4">Dados do responsável</h4>

                  <p>
                    <strong>Nome: </strong>
                    ${registers[key].collaborator.Responsible.name}
                  </p>

                  <p>
                    <strong>CPF: </strong>
                    ${registers[key].collaborator.Responsible.cpf}
                  </p>
                </div>
              `
                  : ""
              }
            </div>
        </div>
        `;

    document.getElementById("register_container").appendChild(div);
  }
}

function viewMore(id, status) {
  let containers = document.getElementsByClassName("more-information");
  let view_buttons = document.getElementsByClassName("view");
  let hidden_buttons = document.getElementsByClassName("hidden");
  if (status == true) {
    containers[id].classList.remove("display-none");
    view_buttons[id].classList.add("display-none");
    hidden_buttons[id].classList.remove("display-none");
  } else {
    containers[id].classList.add("display-none");
    view_buttons[id].classList.remove("display-none");
    hidden_buttons[id].classList.add("display-none");
  }
}
