// script.js

document.addEventListener('DOMContentLoaded', function() {
    var createPostLink = document.getElementById('create-post-link');
    var newPostBox = document.querySelector('.new-post-box');
    var journalContainer = document.body; // Assuming you want to append new posts to the body

    if (createPostLink && newPostBox && journalContainer) {
        createPostLink.addEventListener('click', function(e) {
            e.preventDefault();

            // Toggle the visibility of the new post box
            newPostBox.style.display = newPostBox.style.display === 'none' || newPostBox.style.display === '' ? 'block' : 'none';
        });

        // Add an event listener to the Submit button inside the new post box
        var submitButton = document.getElementById('submit-post');
        if (submitButton) {
            submitButton.addEventListener('click', function() {
                // Get the user-entered title and content
                var title = document.getElementById('post-title').value;
                var content = document.getElementById('post-content').value;

                // Perform any additional logic or submit the data to the server here
                console.log('Title:', title);
                console.log('Content:', content);

                // Create a new section element for the submitted post
                var newSection = document.createElement('section');
                newSection.innerHTML = `
                    <h3>${title}</h3>
                    <p class="inline">${content}</p>
                `;

                // Append the new post section to the journal container
                journalContainer.appendChild(newSection);

                // Optionally, hide the new post box after submission
                newPostBox.style.display = 'none';
            });
        }
    }
});
