Factures d'Achats

Overview

This project is a web application designed to manage purchase invoices. It allows users to add, update, and delete invoices, and provides a summary of the entered data. The application uses HTML, CSS (via Tailwind CSS), and JavaScript (with jQuery) to create a responsive and interactive user interface.


Design Choices

HTML

Semantic HTML: The HTML structure uses semantic tags like <header>, <section>, and <table> to improve readability and accessibility.

Tailwind CSS: Tailwind CSS is used for styling to ensure a modern and responsive design with minimal custom CSS.

jQuery: jQuery simplifies DOM manipulation and event handling, making the JavaScript code more concise and easier to manage.

JavaScript

Asynchronous Operations: The addDataAsync function simulates asynchronous operations, such as API calls, to demonstrate how the application can handle real-world scenarios.

Dynamic Table Updates: The application dynamically updates the invoice, supplier, and payment tables based on user input, providing immediate feedback.

Event Handling: Event listeners are used to handle button clicks for adding, updating, and deleting invoices, ensuring a smooth user experience.

How to Run the Project

Prerequisites

A web browser (e.g., Chrome, Firefox)

An internet connection to load external libraries (Tailwind CSS and jQuery)

Steps

Clone the Repository: Clone the project repository to your local machine.

Navigate to the Project Directory: Open the project directory.

Open page.html in a Web Browser: Double-click the page.html file or open it with your preferred web browser.

Usage

Add an Invoice: Fill in the invoice details in the input fields and click the "Ajouter" button. The invoice will be added to the tables.

Update an Invoice: Click "edt" to update the invoice.

Delete an Invoice: Click the "sup" button next to an invoice to remove it from the tables.

External Libraries

Tailwind CSS: Used for styling the application.

jQuery: Used for DOM manipulation and event handling.

File Structure

page.html: The main HTML file containing the structure of the web page.

script.js: The JavaScript file containing the logic for adding, updating, and deleting invoices.

Conclusion

This project demonstrates a simple yet effective way to manage purchase invoices using modern web technologies. The design choices ensure a responsive and interactive user experience, while the use of external libraries like Tailwind CSS and jQuery simplifies development and maintenance.
