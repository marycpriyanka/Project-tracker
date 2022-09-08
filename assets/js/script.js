$(function () {
    let dateElement = $("#date");
    let timer = setInterval(function () {
        dateElement.text(moment().format("MMM DD YYYY, h:mm:ss a"));
    }, 1000);

    // Datepicker widget with minimum date setting
    $("#datepicker").datepicker({ minDate: new Date(moment()) });
});
