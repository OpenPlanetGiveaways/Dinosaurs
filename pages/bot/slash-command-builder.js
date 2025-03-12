document.getElementById('addParamBtn').addEventListener('click', function() {
    const paramDiv = document.createElement('div');
    paramDiv.className = 'parameter';
    paramDiv.innerHTML = `
        <input type="text" class="paramName" placeholder="Parameter name">
        <select class="paramType">
            <option value="string">String</option>
            <option value="integer">Integer</option>
            <option value="boolean">Boolean</option>
        </select>
        <button type="button" class="removeParamBtn">Remove</button>
    `;
    document.getElementById('parameters').appendChild(paramDiv);

    paramDiv.querySelector('.removeParamBtn').addEventListener('click', function() {
        paramDiv.remove();
    });
});

document.getElementById('saveCommandBtn').addEventListener('click', function() {
    const commandName = document.getElementById('commandName').value;
    const commandDescription = document.getElementById('commandDescription').value;
    const parameters = Array.from(document.querySelectorAll('.parameter')).map(paramDiv => ({
        name: paramDiv.querySelector('.paramName').value,
        type: paramDiv.querySelector('.paramType').value
    }));

    // Simulate saving command
    alert('Command saved:\n' +
          'Name: ' + commandName + '\n' +
          'Description: ' + commandDescription + '\n' +
          'Parameters: ' + JSON.stringify(parameters, null, 2));

    // In a real application, you would send this data to a server to register the command with Discord
});
