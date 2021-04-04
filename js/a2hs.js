let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';

// triggered once navigator have validated A2HS (Add to Home Screen) criteria for this app
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    // Stash event for later
    deferredPrompt = e;
    // Notify user he can install the web app
    addBtn.style.display = 'block';

    addBtn.addEventListener('click', (e) => {
        // Hide the button
        addBtn.style.display = 'none';
        // Show the prompt
        deferredPrompt.prompt('mon message');
        // Wait user to respond the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt.');
            } else {
                console.log('User refused the A2HS prompt.');
            }
        });
    });
});
