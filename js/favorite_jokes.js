const showButton = document.querySelector("#show-favs");
const ClearButton = document.querySelector("#clear-all-jokes");

showButton.addEventListener("click", () => {
  // only ones clickable!
  idbApp.getAllJokes();
});

ClearButton.addEventListener("click", () => {
  idbApp.removeAllJokes();
});
