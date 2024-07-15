# Customer Management Application 

This project is a customer management application built with spring boot for the backend and html/css/javascripts for the frontend. It allows users to perform CRUD operations on customer data, including adding, editing, deleting, and searching customers.

## Features
 ** Backend (Spring Boot) **
 -  CURD operation for managing customer data
 -  Integration with MySQL
 -  sync with remote apis

 Endpoint: http://localhost:8080/api/customers
- This API endpoint retrieves a list of all customers.
- GET Method: Retrieves a JSON list of all customers.
- Data Fields: Includes customer details such as ID, name, email, phone, and address.

Endpoint: http://localhost:8080/api/customers/updateCustomerById/{id}
- This API endpoint updates an existing customer's information based on their ID.
- Method : PUT
- body :
 {
  "street": "MG Road",
  "address": "abc building",
  "city": "Mumbai",
  "state": "Maharashtra",
  "email": "rahul.sharma@example.com",
  "phone": "9876543210",
  "first_name": "Rahul",
  "last_name": "Sharma"
  }
- replace id in the url

Endpoint: http://localhost:8080/api/customers/addCustomer
- This API endpoint adds a new customer to the database.
- Method : POST
- body : 
{
  "street": "MG Road",
  "address": "abc building",
  "city": "Mumbai",
  "state": "Maharashtra",
  "email": "rahul.sharma@example.com",
  "phone": "9876543210",
  "first_name": "Rahul",
  "last_name": "Sharma"
  }

  Endpoint: http://localhost:8080/api/customers/deleteCustomerById/{id}
- Method : DELETE
- replace id in the enpoint url with the actual Id

 Endipoint: http://localhost:8080/api/customers/page
- This API endpoints retrieves a paginated list of customers.
- for ex : GET http://localhost:8080/api/customers/page?page=0&size=10&sort=id,asc
- page (optional, default: 0): Page number (zero-based index) for pagination.
- size (optional, default: 10): Number of records per page.
- sort (optional, default: "id,asc"): Sorting criteria in format property,direction (e.g., id,asc for ascending order by ID).

 Endpoint : GET http://localhost:8080/api/customers/search?searchTerm=example&page=0&size=10&sort=id,asc
- Searches customers based on a search term with pagination.
- searchTerm (required): Term to search for in customer records.
- page (optional, default: 0): Page number (zero-based index) for pagination. 
- size (optional, default: 10): Number of records per page.
- sort (optional, default: "id,asc"): Sorting criteria in format property,direction (e.g., id,asc for ascending order by ID).

Endpoint : POST http://localhost:8080/api/customers/sync
- Synchronizes customer data, updating existing customers or saving new ones.



 ** Frontend (html/css/javascript) **
 - user-friendly interface for managing customers

[//]: # ( - basic login screen)

 Endpoint:http://localhost:8080/customerList.html
- This API endpoint provides a customer management interface with the following functionalities:
- Customer List Screen: Displays a list of customers. 
- Add Customer: Allows adding a new customer. 
- Edit Customer Info: Enables editing customer details. 
- Search: Provides search functionality by email, first name, phone, and city. 
- Delete Customer: Allows deleting a customer from the list.

 Endpoint:http://localhost:8080/addCustomer.html
- This API endpoint provides a form to add customer information into the database.
- Form Submission: Allows users to fill in customer details such as name, email, phone, and address. 
- Submit Button: Enables users to submit the form to add the customer information into the database.

