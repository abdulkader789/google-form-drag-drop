// Function to create a form with options
function createForm() {
    let optionCount = 0;

    // Create the form container
    const form = document.createElement('div');
    form.classList.add('bg-white', 'p-10', 'my-5');

    // Create the question input field
    const questionInput = document.createElement('input');
    questionInput.classList.add('text-3xl', 'w-full', 'pb-2', 'mb-3', 'border-b-2', 'border-gray-400', 'focus:border-indigo-600', 'focus:outline-none');
    questionInput.setAttribute('type', 'text');
    questionInput.setAttribute('placeholder', 'Untitled Question');
    form.appendChild(questionInput);

    // Create the options container
    const optionContainer = document.createElement('div');
    optionContainer.id = 'option-container';
    form.appendChild(optionContainer);

    // Create the initial option
    createOption();

    // Create the 'Add Option' button
    const addOptionBtn = document.createElement('button');
    addOptionBtn.id = 'add-option';
    addOptionBtn.textContent = 'Add Option';
    addOptionBtn.classList.add('mt-4', 'px-4', 'py-2', 'bg-green-500', 'text-white', 'rounded-md', 'shadow-md', 'hover:bg-green-600', 'focus:outline-none', 'focus:ring-2', 'focus:ring-green-500', 'focus:ring-opacity-50');
    addOptionBtn.addEventListener('click', createOption);
    form.appendChild(addOptionBtn);

    // Append the form to the drop container
    const dropContainer = document.querySelector('.drop-container');
    dropContainer.appendChild(form);

    // Function to create a new option
    function createOption() {
        optionCount++;
        const newOption = document.createElement('div');
        newOption.classList.add('flex', 'pb-2', 'mb-3');
        newOption.innerHTML = `
            <p class='m-2'>${optionCount}.</p> 
            <input class='text-xl w-full border-b-2 border-gray-400 focus:border-indigo-600 focus:outline-none' value='Option'></input>
        `;
        optionContainer.appendChild(newOption);
    }
}

// Event listener when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get draggable options and drop container
    const draggableOptions = document.querySelectorAll(".draggable-option");
    const dropContainer = document.querySelector(".drop-container");

    // Add dragstart event listener to draggable options
    draggableOptions.forEach(option => {
        option.addEventListener("dragstart", function (event) {
            event.dataTransfer.setData("choice", option.getAttribute("data-choice"));
        });
    });

    // Add dragover event listener to drop container
    dropContainer.addEventListener("dragover", function (event) {
        event.preventDefault();
    });

    // Add drop event listener to drop container
    dropContainer.addEventListener("drop", function (event) {
        event.preventDefault();
        const choice = event.dataTransfer.getData("choice");
        console.log("Dropped choice: " + choice);
        // Create form based on dropped choice
        if (choice === "radio") {
            createForm();
            // Handle other choices if needed
        }
    });
});
