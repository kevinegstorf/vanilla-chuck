// Maybe add another property which tells what page i am on to determain heart needs to be filled or not

function renderJoke(joke, selected) {
  // creates elements to make Joke Card
  const li = document.createElement("li");
  const div = document.createElement("div");
  const heartElement = document.createElement("div");
  const p = document.createElement("p");
  // const parent = document.getElementById("joke-placeholder");

  let selectedHeart = false;
  selectedHeart = selected;

  // adds classes to created elements for Joke
  li.classList.add("card");
  heartElement.classList.add("heart");
  heartElement.setAttribute("id", joke.id);

  // Adds Empty Heart icon to Joke Card
  heartElement.innerHTML = "♡";

  // Adds Joke to paragraph element
  p.innerText = joke.joke;

  // Appending Children to build Card element correctly
  // parent.appendChild(div);
  div.appendChild(p);
  li.appendChild(div);
  li.appendChild(heartElement);
  selectedHeart
    ? (heartElement.innerHTML = "♥")
    : heartElement.innerHTML === "♡";

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
