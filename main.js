function createForm() {
    let optionCount = 0;

    const form = document.createElement('div');
    form.classList.add('bg-white', 'p-10', 'my-5');
    form.innerHTML = `
    <div class='w-full my-5 '> 
            <input class='text-3xl w-full pb-2 mb-3 border-b-2 border-gray-400 focus:border-indigo-600 focus:outline-none' style='line-height: 2rem' value='Untitled Question'></input>
        </div>
       <div id='option-container'>
           <!-- Initial option -->
           <div class='flex pb-2 mb-3 '>
               <p class='m-2'>${optionCount + 1}. </p> 
               <input class='text-xl w-full border-b-2 border-gray-400 focus:border-indigo-600 focus:outline-none' value='Option'></input>
           </div>
       </div>
       <button id="add-option" class="mt-4 px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">Add Option</button>
            
            
    `;

    const dropContainer = document.querySelector(".drop-container");
    dropContainer.appendChild(form);

    // Add event listener for adding options
    const addOptionBtn = document.getElementById('add-option');
    addOptionBtn.addEventListener('click', function () {
        optionCount++;
        const optionContainer = document.getElementById('option-container');
        const newOption = document.createElement('div');
        newOption.classList.add('flex', 'pb-2', 'mb-3');
        newOption.innerHTML = `
            <p class='m-2'>${optionCount + 1}.</p> 
            <input class='text-xl w-full border-b-2 border-gray-400 focus:border-indigo-600 focus:outline-none' value='Option'></input>
        `;
        optionContainer.appendChild(newOption);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const draggableOptions = document.querySelectorAll(".draggable-option");
    const dropContainer = document.querySelector(".drop-container");

    draggableOptions.forEach(option => {
        option.addEventListener("dragstart", function (event) {
            event.dataTransfer.setData("text", event.target.innerText);
            event.dataTransfer.setData("choice", event.target.getAttribute("data-choice"));
        });
    });

    dropContainer.addEventListener("dragover", function (event) {
        event.preventDefault();
    });

    dropContainer.addEventListener("drop", function (event) {
        event.preventDefault();
        const data = event.dataTransfer.getData("text");
        const choice = event.dataTransfer.getData("choice");
        // Handle drop based on the choice
        console.log("Dropped: " + data + ", Choice: " + choice);
        // Perform different actions based on the choice
        if (choice === "radio") {
            createForm()
            // Perform action for radio
        } else if (choice === "checkbox") {

        } else if (choice === "dropdown") {
            console.log("Perform action for dropdown");
            // Perform action for dropdown
        } else if (choice === "image") {
            console.log("Perform action for image");
            // Perform action for image
        } else if (choice === "text-field") {
            console.log("Perform action for text field");
            // Perform action for text field
        } else if (choice === "star-rating") {
            console.log("Perform action for star rating");
            // Perform action for star rating
        }
    });
});
