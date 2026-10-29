const sampleForm = document.querySelector("#sample-form");
const formOutput = document.querySelector("#form-output");

sampleForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(sampleForm);

  const outputTable = document.createElement("table");
  const headerRow = document.createElement("tr");

  const keyHeader = document.createElement("th");
  keyHeader.textContent = "Key";

  const valueHeader = document.createElement("th");
  valueHeader.textContent = "Value";

  headerRow.appendChild(keyHeader);
  headerRow.appendChild(valueHeader);
  outputTable.appendChild(headerRow);

  formData.forEach((value, key) => {
    const row = document.createElement("tr");

    const keyCell = document.createElement("td");
    keyCell.textContent = key;

    const valueCell = document.createElement("td");
    valueCell.textContent = value;

    row.appendChild(keyCell);
    row.appendChild(valueCell);
    outputTable.appendChild(row);
  });

  formOutput.replaceChildren();

  const outputHeading = document.createElement("h3");
  outputHeading.textContent = "Form Data Entered";

  formOutput.appendChild(outputHeading);
  formOutput.appendChild(outputTable);
});