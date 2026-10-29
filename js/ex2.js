const githubForm = document.querySelector("#github-form");
const loginInput = document.querySelector("#login");
const pictureContainer = document.querySelector("#profile-picture");

const lookupUser = (login) => {
  const userURL = `https://api.github.com/users/${encodeURIComponent(login)}`;

  fetch(userURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`User lookup failed: ${response.status}`);
      }

      return response.json();
    })
    .then((user) => {
      pictureContainer.replaceChildren();

      const picture = document.createElement("img");
      picture.src = user.avatar_url;
      picture.alt = `${user.login}'s GitHub profile picture`;
      picture.className = "profile-picture";
      pictureContainer.appendChild(picture);

      document.querySelector("#name").textContent = user.name || "null";
      document.querySelector("#blog").textContent = user.blog || "";
      document.querySelector("#created").textContent = user.created_at;
    })
    .catch((error) => {
      console.error("Could not load the GitHub profile:", error);
    });
};

githubForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const login = loginInput.value.trim();

  if (login !== "") {
    lookupUser(login);
  }
});

lookupUser(loginInput.value);