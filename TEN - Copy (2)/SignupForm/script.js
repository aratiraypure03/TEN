document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Store the data in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Signup successful! Data saved.');
    this.reset(); // Reset the form
});
var selectElement = document.getElementById('country');

// Sort the countries alphabetically
countries.sort();

// Iterate over the sorted countries and add them to the select element
for (var i = 0; i < countries.length; i++) {
    var option = document.createElement('option');
    option.value = countries[i];
    option.text = countries[i];
    selectElement.appendChild(option);
}

        const checkbox = document.getElementById('myCheckbox');
const billingAddressContainer = document.querySelector('.billing-address-container');

checkbox.addEventListener('change', function() {
    if (this.checked) {
        billingAddressContainer.classList.add('hidden');
    } else {
        billingAddressContainer.classList.remove('hidden');
    }
});
