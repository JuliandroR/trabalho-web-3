window.onload = function () {
  const form = document.getElementById("form");

  form.onsubmit = processDataFromForm;
};

function processDataFromForm(submitEvent) {
  submitEvent.preventDefault();
  form = submitEvent.target;

  const data = new FormData(submitEvent.target);
  const value = Object.fromEntries(data.entries());

  fetch("/api/user", {
    method: "POST",
    headers: {
      'Accept': "application/json",
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(value),
  }).then((resp) => resp.json().then(treatReturn));
}

function treatReturn(response) {
  let modal;

  if (!response.error)
    modal = new bootstrap.Modal(document.getElementById("successSendModal"));
  else modal = new bootstrap.Modal(document.getElementById("failureSendModal"));

  modal.show();
}
