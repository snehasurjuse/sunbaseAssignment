document.getElementById('customerForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    const customer = {
        first_name: document.getElementById('first_name').value,
        last_name: document.getElementById('last_name').value,
        street: document.getElementById('street').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
    };

    const token = localStorage.getItem('token'); // Retrieve JWT token from localStorage

    fetch('/api/customers', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customer) // Convert customer object to JSON string
    })
    .then(response => {
        if (response.ok) {
            alert('Customer added successfully');
            window.location.href = 'customerList.html'; // Redirect to customer list page upon success
        } else {
            throw new Error('Failed to add customer');
        }
    })
    .catch(error => console.error('Error:', error));
});
