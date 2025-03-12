document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const botId = urlParams.get('bot_ID');

    if (botId) {
        document.getElementById('botId').textContent = botId;
        // Simulate fetching bot data
        const botData = getBotData(botId);
        document.getElementById('uptime').textContent = botData.uptime;
        document.getElementById('errors').textContent = botData.errors;
        document.getElementById('info').textContent = botData.info;
    } else {
        alert('Bot ID not found in the URL.');
    }
});

function getBotData(botId) {
    // Simulate fetching data from a server or database
    // In a real application, you would fetch this data from a backend service
    return {
        uptime: '24 hours',
        errors: 'No errors',
        info: 'This is a sample bot with ID ' + botId
    };
}
