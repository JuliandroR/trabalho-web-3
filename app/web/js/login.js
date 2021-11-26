window.onload = function () {
  const form = document.getElementById("form");

  form.onsubmit = processDataFromForm;
};

function processDataFromForm(submitEvent) {
  submitEvent.preventDefault();
  form = submitEvent.target;

  const data = new FormData(submitEvent.target);
  const value = Object.fromEntries(data.entries());

  fetch("/api/auth", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  }).then((resp) => resp.json().then((data) => treatReturn(data, resp.status)));
}

function treatReturn(response, status) {
  let modal;

  if (status === 401) {
    modal = new bootstrap.Modal(document.getElementById("failurePassModal"));
    modal.show();
  } else if (status === 500) {
    modal = new bootstrap.Modal(document.getElementById("failureSendModal"));
    modal.show();
  } else {
    localStorage.setItem("token", response.data.token);
    window.location.href = "/adm.html"
  }
}
