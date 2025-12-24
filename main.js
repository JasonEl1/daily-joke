const currentDate = new Date();
const currentMonth = currentDate.getMonth();

var API_URL = "";

if (currentMonth === 11) {
  API_URL = "https://v2.jokeapi.dev/joke/Christmas?safe-mode";
} else if (currentMonth == 9) {
  API_URL = "https://v2.jokeapi.dev/joke/Spooky?safe-mode";
} else {
  API_URL = "https://v2.jokeapi.dev/joke/Miscellaneous,Pun?safe-mode";
}

async function update(url) {
  const response = await fetch(url);
  const data = await response.json();

  if (data.type == "twopart") {
    const setup = document.getElementById("setup");
    setup.innerText = data.setup;
    const delivery = document.getElementById("delivery");
    const comeback = document.getElementById("comeback");
    delivery.innerText = data.delivery;
    const button_container = document.getElementById("buttondiv");
    const button = document.createElement("button");
    button.innerText = "Reveal";
    button.addEventListener("click", () => {
      delivery.classList.remove("hidden");
      delivery.classList.add("visible");
      comeback.classList.remove("hidden");
      comeback.classlist.add("visible");
    });
    button_container.appendChild(button);
  } else {
    const joke = document.getElementById("setup");
    joke.innerText = data.joke;
  }
}

update(API_URL);
