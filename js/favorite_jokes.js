const showButton = document.querySelector("#show-favs");
const ClearButton = document.querySelector("#clear-all-jokes");
const FindJokeButton = document.querySelector("#find-joke");

showButton.addEventListener("click", () => {
  idbApp.getAllJokes();
});

ClearButton.addEventListener("click", () => {
  idbApp.removeAllJokes();
});

FindJokeButton.addEventListener("click", () => {
  const keyword = document.querySelector("#search").value;
  idbApp.findJoke(keyword);
});
