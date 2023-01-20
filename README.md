# Project-tracker
![badge](https://img.shields.io/badge/MIT-License-blue.svg)

## Description

Project tracker is an application using Bootstrap, jQuery, jQueryUI, Moment, and Google Fonts.

## Table of Contents 

- [Installation](#installation)
- [Features](#features)
- [Technologies used](#technologies-used)
- [License](#license)
- [Deployed link](#deployed-link)
- [License](#license)
- [Future development](#future-development)
- [How to Contribute](#how-to-contribute)
- [Questions](#questions)

## Installation

This program can be run through a browser using the link to the deployed application. Alternatively, to run this application locally you will need to:

- Clone this repository to receive all of the files.
- Open the index.html file in your default browser.

## Features

- The webpage contains a header/hero area that welcomes users to the application and displays the current time and date.
- There is also a card explaining the instructions of how to use the app and a button named 'Add project' to open a modal dialog.

![Homepage](https://github.com/marycpriyanka/Project-tracker/blob/main/assets/images/screenshots/Initial%20screen.png)

- When the user clicks on the 'Add project' button, a modal will pop up containing  a form asking users to fill in the following data:
   - The name of the project
   - The type of project (a drop-down)
   - The hourly wage for the project (a minimum of 15 is set)
   - The due date for the project (a datepicker with minimum date set as current date)
 
![Modal](https://github.com/marycpriyanka/Project-tracker/blob/main/assets/images/screenshots/AddProjectModal.png)
   
- When the user clicks on 'Save changes' button after filling the form, the input values are captured, modal is closed and the captured values are displayed in a table in the web page.
- The days until the due date is also calculated and displayed in the table. It is the difference between the due date and the current time in days.
- Estimated total earned is also displayed in the table. It is calculated by hourly wage at 8 hours per day multiplied by the number of days until the due date

![ProjectAdded](https://github.com/marycpriyanka/Project-tracker/blob/main/assets/images/screenshots/ProjectAdded.png)

- There is one more column in table containing a button named 'X'. It is used to delete the corresponding project from the list.

- The web page is mobile responsive too.

## Technologies used

HTML, CSS, Bootstrap, JavaScript, Responsive design, jQuery, jQueryUI, Moment, Google Fonts

## License

Project Tracker is available under the MIT License.

## Future development

Make the project information persist. 
 
## Deployed link

https://marycpriyanka.github.io/Project-tracker/

## How to Contribute

Contributions and ideas are welcome. Before submitting an issue, please take a moment to look over the contributing guidelines in https://www.contributor-covenant.org/ . Before submitting pull requests, ensure the following:

Fork the repo and create your branch from develop. Test your code. 

## Questions

https://github.com/marycpriyanka

For any addditional questions, reach me at marycpriyanka@gmail.com.

