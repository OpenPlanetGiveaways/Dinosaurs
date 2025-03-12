document.getElementById('saveSettingsBtn').addEventListener('click', function() {
    const botName = document.getElementById('botName').value;
    const botDescription = document.getElementById('botDescription').value;
    const botIcon = document.getElementById('botIcon').value;
    const botToken = document.getElementById('botToken').value;
    const botStatus = document.getElementById('botStatus').value;
    const botActivity = document.getElementById('botActivity').value;

    // Simulate saving settings
    alert('Settings saved:\n' +
          'Name: ' + botName + '\n' +
          'Description: ' + botDescription + '\n' +
          'Icon URL: ' + botIcon + '\n' +
          'Token: ' + botToken + '\n' +
          'Status: ' + botStatus + '\n' +
          'Activity: ' + botActivity);

    // In a real application, you would send this data to a server to update the bot's settings
});
