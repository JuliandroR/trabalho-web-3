window.onload = function () {
  const form = document.getElementById("form");

  form.onsubmit = processDataFromForm;
};

function processDataFromForm(submitEvent) {
  submitEvent.preventDefault();
  form = submitEvent.target;

  console.log(submitEvent.target);
  const data = new FormData(submitEvent.target);

  fetch("/user", {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: data,
  }).then((resp) => resp.json().then(treatReturn));
}

function treatReturn(response) {
  let modal;

  if (!response.error)
    modal = new bootstrap.Modal(document.getElementById("successSendModal"));
  else modal = new bootstrap.Modal(document.getElementById("failureSendModal"));

  modal.show();
}
