// Maybe add another property which tells what page i am on to determain heart needs to be filled or not
function cardElementsCreator(joke) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const heartElement = document.createElement("div");
  const p = document.createElement("p");

  // adds classes to created elements for Joke
  li.classList.add("card");
  heartElement.classList.add("heart");
  heartElement.setAttribute("id", joke.id);

  // Adds Empty Heart icon to Joke Card
  heartElement.innerHTML = "♡";

  // Adds Joke to paragraph element
  p.innerText = joke.joke;

  return {
    li,
    div,
    heartElement,
    p
  };
}

function renderJoke(joke, selected) {
  // creates elements to make Joke Card
  const { li, div, heartElement, p } = cardElementsCreator(joke);

  // Appending Children to build Card element correctly
  div.appendChild(p);
  li.appendChild(div);
  li.appendChild(heartElement);

  heartElement.innerHTML = selected ? "♥" : "♡";

  // Heart icon Click Handler to toggle favorite Joke.
  heartElement.addEventListener("click", e => {
    e.preventDefault();

    if (heartElement.innerHTML === "♡") {
      heartElement.innerHTML = "♥";
      idbApp.saveJoke(joke);
    } else if ((heartElement.innerHTML = "♥")) {
      heartElement.innerHTML = "♡";
      idbApp.removeJoke(joke);
      li.style.display = "none";
    }
  });
  return li;
}
