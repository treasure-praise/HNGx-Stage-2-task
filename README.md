# User Management API

This API allows you to manage user data, including creating, updating, deleting, and retrieving user information.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Creating a User](#creating-a-user)
  - [Getting All Users](#getting-all-users)
  - [Updating a User](#updating-a-user)
  - [Deleting a User](#deleting-a-user)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- MongoDB installed and running
- Git (optional, for version control)

### Installation

1. Clone the repository:

   ```bash
   git clone <https://github.com/treasure-praise/HNGx-Stage-2-task>
   ```

2. Install Dependencies
   cd <stage2>

```bash
  npm install
```

3. Configure environment variables:

Create a .env file in the project root and add your MongoDB connection string. For example:

```bash
 MONGO_URI=mongodb://localhost:27017/your-database

```

4. Start the Server

```bash
npm start
```

###Usage
Creating a User
Endpoint: POST /api

Request Body:

```bash
{
  "name": "John Doe"
}
```

Response

```bash
{
  "_id": "user-id",
  "name": "John Doe"
}
```

Getting All Users
Endpoint: GET /api

Response:

json

```bash
[
  {
    "_id": "user-id-1",
    "name": "John Doe"
  },
  {
    "_id": "user-id-2",
    "name": "Jane Smith"
  }
]

```

Updating a User
Endpoint: PUT /api/:id

Request Body:

```bash
{
  "name": "Updated Name"
}
```

Response:

```bash
{
  "_id": "user-id",
  "name": "Updated Name"
}
```

Deleting a User
Endpoint: DELETE /users/:id

Response:

```bash
204 No Content
```

API Endpoints
POST /users: Create a new user.
GET /users: Retrieve a list of all users.
PUT /users/:id: Update a user by ID.
DELETE /users/:id: Delete a user by ID.

UML Diagram
```bash
+---------------------+
| User |
+---------------------+
| - name: String |
+---------------------+
| + getName(): String |
| + setName(name: String): void |
| + save(): User |
+---------------------+
```

User is the class representing the Mongoose model.

- name: String represents an attribute of the User class. In this case, it's the name attribute with a data type of String.

* getName(): String represents a method to get the name attribute's value.
* setName(name: String): void represents a method to set the name attribute's value.
* save(): User represents a method to save the user instance to the database. This is a common Mongoose method for persisting data.
