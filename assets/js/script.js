// References to DOM elements
const projectFormEl = $("#projectForm");
const projectNameEl = $("#projectName");
const projectTypeEl = $("#projectType");
const hourlyWageEl = $("#hourlyWage");
const datepickerEl = $("#datepicker");
const tableBodyEl = $("tbody");
const formModalEl = $("#formModal");
const projectDisplay = $("#projectDisplay");

// Submit event listener to the form element
projectFormEl.on("submit", handleFormSubmit);
//  jQuery event delegation to attach an event listener to each of the delete buttons
projectDisplay.on("click", ".btn", deleteProject);

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

    // Reset the jQuery object
    projectFormEl[0].reset();
}

// Handle printing project data
function printProjectData(projectName, projectType, hourlyWage, datepicker) {
    // Creates a table row element
    const tRow = $("<tr>");

    // Creates table detail elements
    const tdProjectName = $("<td>").text(projectName);
    const tdProjectType = $("<td>").text(projectType);
    const tdHourlyWage = $("<td>").text(hourlyWage);
    const tdDatepicker = $("<td>").text(datepicker);

    const tdDaysUntilDueDate = $("<td>");
    const daysUntilDueDate = calculateDaysUntilDueDate(datepicker);
    tdDaysUntilDueDate.text(daysUntilDueDate);
    
    const tdEstimatedTotal = $("<td>");
    tdEstimatedTotal.text(calculateEstimatedTotal(hourlyWage, daysUntilDueDate));

    // Button for deleting the project from the list
    const tdDelete = $("<td>").addClass("btn").text("X");

    // Append all td elements to the table row created
    tRow.append(tdProjectName, tdProjectType, tdHourlyWage, tdDatepicker, tdDaysUntilDueDate, tdEstimatedTotal, tdDelete);

    // Append the entire row to tbody element
    tableBodyEl.append(tRow);

    // Closes the modal
    formModalEl.modal("hide");
}

// Calculates the difference between the due date and the current time in days
function calculateDaysUntilDueDate(date) {
    const dueDate = moment(date);
    const currentDate = moment().format("MM/DD/YYYY");
    return dueDate.diff(currentDate, "days");
}

// Calculates the estimated total earned
function calculateEstimatedTotal(hourlyWage, daysUntilDueDate) {
    // We work an 8 hour day. So, multiply the hourly rate by 8 to get the daily rate, then multiply that value by how many days until the project is due to get the estimated total earned.
    return hourlyWage * 8 * daysUntilDueDate;
}

// Delete project from table
function deleteProject(event) {
    const buttonClicked = $(event.target);
    // The parent tr element is removed from the page
    buttonClicked.parent("tr").remove();
}

