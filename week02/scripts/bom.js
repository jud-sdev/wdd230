// Declaring const variables to hold references to the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Adding a click event listener for the Add Chapter button
button.addEventListener('click', () => {
    // Check if the input is not blank
    if (input.value !== '') {
        // Create the list item (li) element
        const li = document.createElement('li');
        
        // Create the delete button
        const deleteButton = document.createElement('button');
        
        // Populate the li element with the input value
        li.textContent = input.value;
        
        // Set the delete button text to '❌'
        deleteButton.textContent = '❌';
        
        // Append the delete button to the li element
        li.append(deleteButton);
        
        // Append the li element to the unordered list in the HTML
        list.append(li);
        
        // Add an event listener to the delete button to remove the li element when clicked
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
        
        // Send the focus back to the input element
        input.focus();
        
        // Clear the input field
        input.value = '';
    } else {
        // Optionally, alert the user to enter a book and chapter if the input is blank
        alert('Please enter a book and chapter.');
        input.focus();
    }
});
