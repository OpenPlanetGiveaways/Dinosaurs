document.getElementById('getStartedBtn').addEventListener('click', function() {
    document.getElementById('botSetup').style.display = 'block';
});

document.getElementById('createBotBtn').addEventListener('click', function() {
    const botToken = document.getElementById('botToken').value;
    if (botToken) {
        alert('Bot token received. Creating and logging in to the bot...');
        // Here you would typically send the token to a server to handle bot creation and login
        // For security reasons, do not handle bot tokens directly in client-side JavaScript
    } else {
        alert('Please enter a valid bot token.');
    }
});
