// Get references to input and output elements
const inputField = document.getElementById("input-field");
const outputField = document.getElementById("output-field");

// Get references to all buttons
const buttons = document.querySelectorAll(".btn");

// Function to update the output field
function updateOutput() {
    const text = inputField.value;
    let formattedText = text;

    // Clear the output field before updating (important)
    outputField.textContent = ""; // Empties the content

    // Loop through each button and apply formatting based on its class
    buttons.forEach(button => {
        const buttonClass = button.classList[1];
        switch (buttonClass) {
            case "uppercase":
                formattedText = formattedText.toUpperCase();
                break;
            case "lowercase":
                formattedText = formattedText.toLowerCase();
                break;
            case "capitalize":
                formattedText = formattedText.charAt(0).toUpperCase() + formattedText.slice(1).toLowerCase();
                break;
            case "bold":
                formattedText = `<strong>${formattedText}</strong>`;
                break;
            case "italic":
                formattedText = `<i>${formattedText}</i>`;
                break;
            case "underline":
                formattedText = `<u>${formattedText}</u>`;
                break;
            default:
                break;
        }
    });

    // Update the content of the output field with the formatted text
    outputField.innerHTML = formattedText; // Now uses innerHTML for element content
}

// Add event listeners to the input field and buttons
inputField.addEventListener("keyup", updateOutput);
buttons.forEach(button => button.addEventListener("click", updateOutput));

// Call the update function initially to display the default text
updateOutput();