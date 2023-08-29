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

- `POST /users`: Create a new user.
- `GET /users`: Get a list of all users.
- `GET /users/:id`: Get details of a specific user by ID.
- `PUT /users/:id`: Update user details.
- `DELETE /users/:id`: Delete a user.

### Tickets

- `POST /tickets`: Create a new ticket.
- `GET /tickets`: Get a list of all tickets.
- `GET /tickets/:id`: Get details of a specific ticket by ID.
- `PUT /tickets/:id`: Update ticket details.
- `DELETE /tickets/:id`: Delete a ticket.

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

- Setup and Installation
- Clone this repository: git clone https://github.com/Saud-Alghamdi/node.js-ticketing-api
- Install dependencies: npm install
- Configure your database settings in src/models/dbConfig.js
- Run database migrations: npx sequelize-cli db:migrate
- Start the server: npm start
