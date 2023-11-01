// script.js

document.addEventListener('DOMContentLoaded', function() {
    var createPostLink = document.getElementById('create-post-link');

    if (createPostLink) {
        createPostLink.addEventListener('click', function(e) {
            e.preventDefault();

            // Create a new section element for the new post box
            var newSection = document.createElement('section');
            var postId = 'post-' + new Date().getTime(); // Generate a unique ID for the new post
            newSection.id = postId;
            newSection.classList.add('new-post-box'); // Add the new class

            // Create input elements for post title and content
            var titleInput = document.createElement('input');
            titleInput.setAttribute('type', 'text');
            titleInput.setAttribute('placeholder', 'Enter Post Title');

            var contentInput = document.createElement('textarea');
            contentInput.setAttribute('placeholder', 'Enter Post Content');

            // Create a Submit button
            var submitButton = document.createElement('button');
            submitButton.textContent = 'Submit';

            // Add an event listener to the Submit button to create the post
            submitButton.addEventListener('click', function() {
                // Create a new h3 element with the user-entered title
                var newH3 = document.createElement('h3');
                newH3.textContent = titleInput.value;

                // Create a new p element with the user-entered content
                var newP = document.createElement('p');
                newP.textContent = contentInput.value;

                // Append the new elements to the new section
                newSection.appendChild(newH3);
                newSection.appendChild(newP);

                // Append the new section to the body
                document.body.appendChild(newSection);

                // Clear input fields
                titleInput.value = '';
                contentInput.value = '';
            });

            // Append input elements and Submit button to the new post box
            newSection.appendChild(titleInput);
            newSection.appendChild(contentInput);
            newSection.appendChild(submitButton);

            // Append the new post box to the body
            document.body.appendChild(newSection);
        });
    }
});
