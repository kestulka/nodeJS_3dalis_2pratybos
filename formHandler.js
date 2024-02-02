const form = document.getElementById("directorsForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstName = document.getElementById("directorsFirstNameInput").value;
  const lastName = document.getElementById("directorsLastNameInput").value;
  const oscars = document.getElementById("directorsOscarsInput").value;
  const country = document.getElementById("directorsCountryInput").value;

  const directorData = {
    firstname: firstName,
    lastname: lastName,
    oscars: oscars,
    country: country,
  };

  fetch("/api/directors", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(directorData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HHTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Director created sucessfully: ", data);
    })
    .catch((error) => {
      console.error("error creating director:", error);
      console.log("response from server: ", error.response);
    });
});
