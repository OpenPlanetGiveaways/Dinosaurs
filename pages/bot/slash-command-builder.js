document.getElementById('templateSelect').addEventListener('change', function() {
    const selectedTemplate = this.value;
    const commandNameInput = document.getElementById('commandName');
    const commandDescriptionInput = document.getElementById('commandDescription');
    const parametersDiv = document.getElementById('parameters');

    // Clear existing parameters
    parametersDiv.innerHTML = '<h3>Parameters</h3>';

    switch (selectedTemplate) {
        case 'greet':
            commandNameInput.value = 'greet';
            commandDescriptionInput.value = 'Sends a greeting message';
            addParameter('user', 'string');
            break;
        case 'ban':
            commandNameInput.value = 'ban';
            commandDescriptionInput.value = 'Bans a user from the server';
            addParameter('user', 'string');
            addParameter('reason', 'string');
            break;
        case 'kick':
            commandNameInput.value = 'kick';
            commandDescriptionInput.value = 'Kicks a user from the server';
            addParameter('user', 'string');
            break;
        default:
            commandNameInput.value = '';
            commandDescriptionInput.value = '';
            break;
    }
});

function addParameter(name, type) {
    const paramDiv = document.createElement('div');
    paramDiv.className = 'parameter';
    paramDiv.innerHTML = `
        <input type="text" class="paramName" value="${name}" placeholder="Parameter name">
        <select class="paramType">
            <option value="string" ${type === 'string' ? 'selected' : ''}>String</option>
            <option value="integer" ${type === 'integer' ? 'selected' : ''}>Integer</option>
            <option value="boolean" ${type === 'boolean' ? 'selected' : ''}>Boolean</option>
        </select>
        <button type="button" class="removeParamBtn">Remove</button>
    `;
    document.getElementById('parameters').appendChild(paramDiv);

    paramDiv.querySelector('.removeParamBtn').addEventListener('click', function() {
        paramDiv.remove();
    });
}

document.getElementById('addParamBtn').addEventListener('click', function() {
    addParameter('', 'string');
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
