const showButton = document.querySelector("#show-favs");

showButton.addEventListener("click", () => {
  // only ones clickable!
  idbApp.getAllJokes();
});
