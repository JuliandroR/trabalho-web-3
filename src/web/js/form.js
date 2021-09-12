window.onload = function () {
  const bornDateInput = document.getElementById('bornDate');
  const infoResponsavel = document.getElementById('info-responsavel');

  const secondPart = document.getElementById('secondPart')
  const nextButton = document.getElementById('next-button')

  const form = document.getElementById('form');

  bornDateInput.addEventListener('change', () => {
    let dateNow = new Date().getFullYear();
    let bornDate = new Date(bornDateInput.value).getFullYear();

    if (dateNow - bornDate < 18) {
      infoResponsavel.style.display = 'block';
      infoResponsavel.classList.add('fadeInAnimation');
    } else {
      infoResponsavel.style.display = 'none';
    }


  });


  nextButton.addEventListener('click', () => {
    secondPart.classList.add('reveal-animation')
  })

  form.onsubmit = processDataFromForm;

  this.applyMask = initMasks();
}

function initMasks() {
  masks = {
    // (00) 00000-0000
    phone: input => {
      input.value = input.value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2 ')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(\d{4})\d/, '$1');
    },
    cpf: input => {
      input.value = input.value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1");
    }
  }

  return (input, mask) => masks[mask](input);
}

function processDataFromForm(submitEvent) {
  submitEvent.preventDefault();
  form = submitEvent.target;

  if (!validateRegisterForm(form)) return;

  const data = new FormData(submitEvent.target);
  console.log(data.get('photo'));
  const value = Object.fromEntries(data.entries());

  fetch('form', {
    method: 'POST',
    headers: {
      'Accept': 'application/json'
    },
    body: data
  })
    .then(resp => resp.json().then(treatReturn))
}

function validateRegisterForm(form) {
  let valid = true;
  let targetFocus;

  const {
    iname: { value: nameText },
    cpf: { value: cpfText },
    email: { value: emailText },
    phone: { value: phoneText },
    state: { value: stateText },
    city: { value: cityText },
    bornDate: { value: bornDateText }
  } = form;

  const makeInvalid = (input) => {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');

    if (valid) targetFocus = input;

    valid = false;
  }

  const makeValid = (input) => {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
  }

  // Name validadion
  if (nameText.trim().length)
    makeValid(iname);
  else
    makeInvalid(iname);

  // CPF validation
  if (cpfText.replace(/[^\d]/g, '').length == 11)
    makeValid(cpf);
  else
    makeInvalid(cpf);

  // E-mail validation
  if (emailText.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/))
    makeValid(email);
  else
    makeInvalid(email);

  // Phone validation
  if (phoneText.replace(/[^\d]/g, '').length == 11)
    makeValid(phone);
  else
    makeInvalid(phone);

  // State validation
  if (stateText.trim().length)
    makeValid(state);
  else
    makeInvalid(state);

  // City validation
  if (cityText.trim().length)
    makeValid(city);
  else
    makeInvalid(city);

  // Born date validation
  if (bornDateText.trim().length)
    makeValid(bornDate);
  else
    makeInvalid(bornDate);

  // Focus in fist validation error
  if (!valid) {
    targetFocus.focus();
  }

  return valid
}

function treatReturn(response) {
  let modal


  if (!response.error)
    modal = new bootstrap.Modal(document.getElementById('successSendModal'))
  else
    modal = new bootstrap.Modal(document.getElementById('failureSendModal'))

  modal.show()
}