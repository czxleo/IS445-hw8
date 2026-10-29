const travelData = {
  name: "Leo Chen",
  countries: [
    {
      name: "United States",
      year: 2015
    },
    {
      name: "China",
      year: 2020
    },
    {
      name: "Japan",
      year: 2021
    },
    {
      name: "Korea",
      year: 2022
    },
  ]
};

fetch("https://thejsway-server.herokuapp.com/api/countries", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(travelData)
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    return response.text();
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("Could not send the travel data:", error);
  });