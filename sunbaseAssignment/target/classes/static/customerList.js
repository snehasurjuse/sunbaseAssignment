document.addEventListener('DOMContentLoaded', function() {
    fetchCustomers();

    const searchValue = document.getElementById('searchValue');

        searchValue.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                searchCustomer(document.getElementById('searchField').value, searchValue.value);
                // Clear the search input field
                searchValue.value = '';
            }
        });

    function fetchCustomers() {
        const token = localStorage.getItem('token');
        fetch('/api/customers', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch customers');
            }
            return response.json();
        })
        .then(customers => {
            const tbody = document.querySelector('#customerTable tbody');
            tbody.innerHTML = '';
            customers.forEach(customer => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${customer.first_name}</td>
                    <td>${customer.last_name}</td>
                    <td>${customer.street}</td>
                    <td>${customer.address}</td>
                    <td>${customer.city}</td>
                    <td>${customer.state}</td>
                    <td>${customer.email}</td>
                    <td>${customer.phone}</td>
                    <td>
                        <button class="action-btn edit-btn" onclick="editCustomer(${customer.id})">
                            <i class="fas fa-pen"></i>
                        </button>
                        <button class="action-btn delete-btn" onclick="deleteCustomer(${customer.id})">
                            <i class="fas fa-minus"></i>
                        </button>
                    </td>
                `;
                tbody.appendChild(row);
            });
        })
        .catch(error => console.error('Error:', error));
    }

    window.addCustomer = function() {
        window.location.href = 'addCustomer.html';
    }

    window.searchCustomer = function() {
        const searchTerm = prompt('Enter search term:');
        const token = localStorage.getItem('token');
        fetch(`/api/customers/search?searchTerm=${searchTerm}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to search customers');
            }
            return response.json();
        })
        .then(customers => {
            const tbody = document.querySelector('#customerTable tbody');
            tbody.innerHTML = '';
            customers.content.forEach(customer => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${customer.first_name}</td>
                    <td>${customer.last_name}</td>
                    <td>${customer.street}</td>
                    <td>${customer.address}</td>
                    <td>${customer.city}</td>
                    <td>${customer.state}</td>
                    <td>${customer.email}</td>
                    <td>${customer.phone}</td>
                    <td>
                        <button class="action-btn edit-btn" onclick="editCustomer(${customer.id})">
                            <i class="fas fa-pen"></i>
                        </button>
                        <button class="action-btn delete-btn" onclick="deleteCustomer(${customer.id})">
                            <i class="fas fa-minus"></i>
                        </button>
                    </td>
                `;
                tbody.appendChild(row);
            });
        })
        .catch(error => console.error('Error:', error));
    }

    window.syncCustomers = function() {
        const token = localStorage.getItem('token');
        fetch('/api/customers/sync', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                fetchCustomers();
                alert('Customers synchronized successfully');
            } else {
                throw new Error('Failed to sync customers');
            }
        })
        .catch(error => console.error('Error:', error));
    }

    window.editCustomer = function(id) {
        const token = localStorage.getItem('token');

        fetch(`/api/customers/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch customer');
            }
            return response.json();
        })
        .then(customer => {
            // Show the edit form
            document.getElementById('editCustomerForm').style.display = 'block';

            // Populate form fields with customer data for editing
            document.getElementById('first_name').value = customer.first_name;
            document.getElementById('last_name').value = customer.last_name;
            document.getElementById('street').value = customer.street;
            document.getElementById('address').value = customer.address;
            document.getElementById('city').value = customer.city;
            document.getElementById('state').value = customer.state;
            document.getElementById('email').value = customer.email;
            document.getElementById('phone').value = customer.phone;

            // Update form submission to handle update
            document.getElementById('customerForm').onsubmit = function(e) {
                e.preventDefault(); // Prevent default form submission
                const updatedCustomer = {
                    first_name: document.getElementById('first_name').value,
                    last_name: document.getElementById('last_name').value,
                    street: document.getElementById('street').value,
                    address: document.getElementById('address').value,
                    city: document.getElementById('city').value,
                    state: document.getElementById('state').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('phone').value
                };

                updateCustomer(id, updatedCustomer); // Call update function with customer id and updated data
            };
        })
        .catch(error => console.error('Error:', error));
    }

    // Function to update customer data
    function updateCustomer(id, updatedCustomer) {
        const token = localStorage.getItem('token');

        fetch(`/api/customers/${id}`, {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedCustomer) // Convert updated customer object to JSON string
        })
        .then(response => {
            if (response.ok) {
                alert('Customer updated successfully');
                window.location.reload(); // Refresh the page to reflect updated data
            } else {
                throw new Error('Failed to update customer');
            }
        })
        .catch(error => console.error('Error:', error));
    }

    window.deleteCustomer = function(id) {
        const token = localStorage.getItem('token');

        fetch(`/api/customers/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        .then(response => {
            if (response.ok) {
                alert('Customer deleted successfully');
                window.location.reload(); // Refresh the page to reflect updated data
            } else {
                throw new Error('Failed to delete customer');
            }
        })
        .catch(error => console.error('Error:', error));
    }
});
