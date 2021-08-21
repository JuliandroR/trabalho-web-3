const bornDateInput = document.getElementById("bornDate");
const infoResponsavel = document.getElementById("info-responsavel");

const secondPart = document.getElementById("secondPart")
const nextButton = document.getElementById("next-button")

bornDateInput.addEventListener("change", () => {
  let dateNow = new Date().getFullYear();
  let bornDate = new Date(bornDateInput.value).getFullYear();

  if (dateNow - bornDate < 18) {
    infoResponsavel.style.display = "block";
    infoResponsavel.classList.add("fadeInAnimation");
  } else {
    infoResponsavel.style.display = "none";
  }
});


nextButton.addEventListener("click", () => {
    secondPart.classList.add("reveal-animation")
})