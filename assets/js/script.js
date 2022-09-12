// References to DOM elements
const projectFormEl = $("#projectForm");
const projectNameEl = $("#projectName");
const projectTypeEl = $("#projectType");
const hourlyWageEl = $("#hourlyWage");
const datepickerEl = $("#datepicker");
const tableBodyEl = $("tbody");
const formModalEl = $("#formModal");

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
    console.log(datepicker);

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

    // Append all td elements to the table row created
    tRow.append(tdProjectName, tdProjectType, tdHourlyWage, tdDatepicker, tdDaysUntilDueDate, tdEstimatedTotal);

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


