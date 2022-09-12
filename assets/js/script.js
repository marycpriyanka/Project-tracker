// References to DOM elements
const projectFormEl = $("#projectForm");
const projectNameEl = $("#projectName");
const projectTypeEl = $("#projectType");
const hourlyWageEl = $("#hourlyWage");
const datepickerEl = $("#datepicker");

// Submit event listener to the form element
projectFormEl.on("submit", handleFormSubmit);

$(function () {
    let dateElement = $("#date");
    let timer = setInterval(function () {
        dateElement.text(moment().format("MMM DD YYYY, h:mm:ss a"));
    }, 1000);

    // Datepicker widget with minimum date setting
    datepickerEl.datepicker({ minDate: new Date(moment()) });
});

// Submit event listener to the form element
function handleFormSubmit(event) {
    event.preventDefault();

    // Capture input values from the form
    const projectName = projectNameEl.val().trim();
    const projectType = projectTypeEl.val().trim();
    const hourlyWage = hourlyWageEl.val().trim();
    const datepicker = datepickerEl.val().trim();

    // Pass the captured data to printProjectData function
    printProjectData(projectName, projectType, hourlyWage, datepicker);
}

// Handle printing project data
function printProjectData(projectName, projectType, hourlyWage, datepicker) {
    
}


