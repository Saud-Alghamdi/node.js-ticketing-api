# Node.js Ticketing API

This repository contains a Ticketing API built with Node.js and Express.js. It provides an interface for managing Users and Tickets in a ticketing system.

## Table Of Contents

- [Technologies](#technologies)
- [Database Schema](#database-schema)
- [API Endpoints](#api-endpoints)
- [API Responses](#api-responses)
- [Setup and Installation](#setup-and-installation)

## Technologies

- Node.js
- Express.js
- Sequelize (for database interaction)
- MySQL (using mysql2)

## Database Schema

In our application, we have two models: `User` and `Ticket`.

**User**

- `name`: (varchar(255), not null)
- `email`: (varchar(255), not null, unique)
- `role`: (enum, 'user', 'admin', 'superadmin', not null)
- `createdAt`: (datetime, not null)
- `updatedAt`: (datetime, not null)

**Ticket**

- `id`: (int(11), not null, auto-increment)
- `title`: (varchar(255), not null)
- `description`: (text, not null)
- `status`: (varchar(255), not null, default 'Open')
- `assignedTo`: (int(11), foreign key, references `id` in `User` model, default null)
- `createdAt`: (datetime, not null)
- `updatedAt`: (datetime, not null)
- `createdBy`: (int(11), foreign key, references `id` in `User` model, default null)

## API Endpoints

### Users

- `POST /api/users`: Create a new user.
- `GET /api/users`: Get a list of all users.
- `GET /api/users/:id`: Get details of a specific user by ID.
- `PUT /api/users/:id`: Update user details.
- `DELETE /api/users/:id`: Delete a user.

### Tickets

- `POST /api/tickets`: Create a new ticket.
- `GET /api/tickets`: Get a list of all tickets.
- `GET /api/tickets/:id`: Get details of a specific ticket by ID.
- `PUT /api/tickets/:id`: Update ticket details.
- `DELETE /api/tickets/:id`: Delete a ticket.

## API Requests

All requests to the API should be made with an HTTP client like curl, Postman, or any other client you prefer.

**Users**:

- Create a New User (POST /users)

This request must contain all the required fields of the User model except those that are auto-generated or have default values. Here is an example of a valid request body.

`POST http://localhost:3000/api/users`

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "role": "user"
}
```

- Get a List of All Users (GET /users)

This request does not require any parameters. Here is an example of how to make this request.

`GET http://localhost:3000/api/users`

- Get Details of a Specific User by ID (GET /users/:id)

This request requires the user ID in the URL path. For example, to get details of the user with ID 1.

`GET http://localhost:3000/api/users/1`

- Update User Details (PUT /users/:id)

The user ID should be provided in the URL path. The fields to be updated should be provided in the request body (At least one field must be present).

`PUT http://localhost:3000/api/users/1`

```json
{
  "name": "John Doe",
  "role": "admin"
}
```

- Delete a User (DELETE /users/:id)

Replace :id with the ID of the user you want to delete.

`DELETE http://localhost:3000/api/users/1`

**Tickets**:

- Create a New Ticket (POST /tickets)

The request must contain all the required fields of the Ticket model except those that are auto-generated or have default values.

`POST http://localhost:3000/api/tickets`

```json
{
  "title": "This is a title.",
  "description": "This is a description.",
  "createdBy": 2,
  "assignedTo": 4
}
```

- Get a List of All Tickets (GET /tickets)

No request body is required for this endpoint.

`GET http://localhost:3000/api/tickets`

- Get Details of a Specific Ticket by ID (GET /tickets/:id)

Replace :id with the ID of the ticket you want to get details of.

`GET http://localhost:3000/api/tickets/1`

- Update Ticket Details (PUT /tickets/:id)

The ticket ID should be provided in the URL path. The fields to be updated should be provided in the request body (At least one field must be present).

`PUT http://localhost:3000/api/tickets/1`

```json
{
  "title": "Changing the title"
}
```

- Delete a Ticket (DELETE /tickets/:id)

Replace :id with the ID of the ticket you want to delete.

`DELETE http://localhost:3000/api/tickets/1`

## API Responses

Responses from the API come in the following format:

```json
{
  "isSuccess": true,
  "message": "Operation was successful.",
  "data": {...}
}
```

In cases where there is no data to return (e.g., deleting a ticket), the response will not contain the data field:

```json
{
  "isSuccess": true,
  "message": "Operation was successful."
}
```

## Setup and Installation

1. Setup and Installation
2. Clone this repository: `git clone https://github.com/Saud-Alghamdi/node.js-ticketing-api`
3. Install dependencies: `npm install`
4. Configure your database settings in `src/models/dbConfig.js`
5. Run database migrations: `npx sequelize-cli db:migrate`
6. Start the server: `npm start`
