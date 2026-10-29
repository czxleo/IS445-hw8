const paintingsTable = document.querySelector("#paintings");
const paintingsURL =
  "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json";

fetch(paintingsURL)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    return response.json();
  })
  .then((paintings) => {
    paintings.forEach((painting) => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = painting.name;

      const yearCell = document.createElement("td");
      yearCell.textContent = painting.year;

      const artistCell = document.createElement("td");
      artistCell.textContent = painting.artist;

      row.appendChild(nameCell);
      row.appendChild(yearCell);
      row.appendChild(artistCell);
      paintingsTable.appendChild(row);
    });
  })
  .catch((error) => {
    console.error("Could not load the paintings:", error);
  });