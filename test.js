// CREATE EVENT LISTENER

const form = document.getElementById("directorsForm");
const createBtn = document.getElementById("directorsCreateButton");

createBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  fetch("/api/directors", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("director created: ", data);
    })
    .catch((error) => console.error("error creating director: ", error));
});

// ---------------------------------------------
