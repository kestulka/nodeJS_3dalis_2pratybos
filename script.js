// Sample data to simulate databases
const directorsDatabase = [];
const moviesDatabase = [];
 
// Function to create a form
function createForm(formId, formHeader, inputFields, buttonText, onClickFunction) {
    const form = document.createElement("form");
    form.id = formId;
 
    // Create form header
    const header = document.createElement("h2");
    header.textContent = formHeader;
    form.appendChild(header);
 
    // Create input fields
    inputFields.forEach(inputField => {
        const label = document.createElement("label");
        label.textContent = inputField.label + ":";
        form.appendChild(label);
 
        const input = document.createElement("input");
        input.type = inputField.type;
        input.name = inputField.name;
        form.appendChild(input);
    });
 
    // Create buttons
    buttonText.forEach(buttonLabel => {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = buttonLabel;
        button.onclick = onClickFunction;
        form.appendChild(button);
    });
 
    return form;
}
 
// Function to create and append forms to the app container
function initializeForms() {
    const app = document.getElementById("app");
 
    // Directors Form
    const directorsFormElement = createForm(
        "directorsForm",
        "Directors",
        [
            { label: "First Name", type: "text", name: "firstName" },
            { label: "Last Name", type: "text", name: "lastName" },
            { label: "Oscars", type: "number", name: "oscars" },
            { label: "Country", type: "text", name: "country" }
        ],
        ["Create", "Read", "Update", "Delete"],
        handleDirectorsForm
    );
    app.appendChild(directorsFormElement);
 
    // Movies Form
    const moviesFormElement = createForm(
        "moviesForm",
        "Movies",
        [
            { label: "Movie Director", type: "text", name: "movieDirector" },
            { label: "Title", type: "text", name: "title" },
            { label: "Year", type: "number", name: "year" },
            { label: "Genre", type: "text", name: "genre" }
        ],
        ["Create", "Read", "Update", "Delete"],
        handleMoviesForm
    );
    app.appendChild(moviesFormElement);
}
 
// Function to handle Directors Form actions
function handleDirectorsForm() {
    // Implement actions for Directors Form
    console.log("Directors Form action");
}
 
// Function to handle Movies Form actions
function handleMoviesForm() {
    // Implement actions for Movies Form
    console.log("Movies Form action");
}
 
// Function to handle button clicks for CRUD operations
function handleButtonClick() {
    const action = this.textContent.toLowerCase();
    console.log(`Button Clicked: ${action}`);
    // Implement actions based on the clicked button
}
 
// Initialize forms when the page loads
window.onload = initializeForms;