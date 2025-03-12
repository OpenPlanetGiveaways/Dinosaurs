document.getElementById('addEventBtn').addEventListener('click', function() {
    const eventDiv = document.createElement('div');
    eventDiv.className = 'event';
    eventDiv.innerHTML = `
        <input type="text" class="triggerContent" placeholder="Trigger message content">
        <input type="text" class="responseContent" placeholder="Response message content">
        <button type="button" class="removeEventBtn">Remove</button>
    `;
    document.getElementById('events').appendChild(eventDiv);

    eventDiv.querySelector('.removeEventBtn').addEventListener('click', function() {
        eventDiv.remove();
    });
});

document.getElementById('saveEventsBtn').addEventListener('click', function() {
    const events = Array.from(document.querySelectorAll('.event')).map(eventDiv => ({
        trigger: eventDiv.querySelector('.triggerContent').value,
        response: eventDiv.querySelector('.responseContent').value
    }));

    // Simulate saving events
    alert('Events saved:\n' + JSON.stringify(events, null, 2));

    // In a real application, you would send this data to a server to configure the bot's message handling
});
