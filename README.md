# Recipe API

![License](https://img.shields.io/badge/license-MIT-brightgreen)

## Table of Contents

-   [Overview](#overview)
-   [Features](#features)
-   [Technologies Used](#technologies-used)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
    -   [Database Setup](#database-setup)
    -   [Running the Application](#running-the-application)
-   [API Endpoints](#api-endpoints)
-   [Example Requests](#example-requests)
-   [Testing](#testing)
-   [Contributing](#contributing)
-   [License](#license)
-   [Acknowledgments](#acknowledgments)

## Overview

The Recipe API is a RESTful service designed for managing recipes. Built with Node.js and TypeScript, this API allows users to create, read, update, and delete recipes efficiently and effectively.

## Features

-   Create a new recipe
-   Retrieve all recipes
-   Get a specific recipe by ID
-   Update an existing recipe
-   Delete a recipe

## Technologies Used

-   **Node.js**: JavaScript runtime for building server-side applications
-   **TypeScript**: Superset of JavaScript for building robust applications
-   **Express**: Web framework for Node.js
-   **Sequelize**: Promise-based ORM for Node.js to interact with the database
-   **MySQL**: Relational database management system

## Getting Started

### Prerequisites

-   Node.js (v14 or higher | Node.js v18.17.1)
-   MySQL database

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/sahil811/recipe-api.git
    ```
2. Navigate to the project directory:
    ```bash
    cd recipe-api
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

### Database Setup

Create the database using the create.sql script:

Open your MySQL client and run:

```sql
SOURCE path/to/sql/create.sql;
```

### Running the Application

1. Start the development server:
    ```bash
    npm run dev
    ```
2. Build the application for production (optional):
    ```bash
    npm run build
    ```
3. Run the production server:
    ```bash
    npm start
    ```

## API Endpoints

| Method | Endpoint     | Description             |
| ------ | ------------ | ----------------------- |
| POST   | /recipes     | Create a new recipe     |
| GET    | /recipes     | Retrieve all recipes    |
| GET    | /recipes/:id | Retrieve a recipe by ID |
| PATCH  | /recipes/:id | Update a recipe         |
| DELETE | /recipes/:id | Delete a recipe         |

## Example Requests

### Create a Recipe

Request:

```http
POST /recipes
Content-Type: application/json

{
  "title": "Tomato Soup",
  "making_time": "15 min",
  "serves": "5 people",
  "ingredients": "onion, tomato, seasoning, water",
  "cost": "450"
}
```

Response:

```json
{
    "message": "Recipe successfully created!",
    "recipe": {
        "id": 3,
        "title": "Tomato Soup",
        "making_time": "15 min",
        "serves": "5 people",
        "ingredients": "onion, tomato, seasoning, water",
        "cost": "450",
        "created_at": "2024-09-28 14:10:12",
        "updated_at": "2024-09-28 14:10:12"
    }
}
```

### Retrieve All Recipes

Request:

```http
GET /recipes
```

Response:

```json
{
    "recipes": [
        {
            "id": 1,
            "title": "Chicken Curry",
            "making_time": "45 min",
            "serves": "4 people",
            "ingredients": "onion, chicken, seasoning",
            "cost": "1000"
        },
        {
            "id": 2,
            "title": "Rice Omelette",
            "making_time": "30 min",
            "serves": "2 people",
            "ingredients": "onion, egg, seasoning, soy sauce",
            "cost": "700"
        }
    ]
}
```

## Testing

You can run tests using your preferred testing framework. Ensure to cover all endpoints and their respective functionalities.

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a new branch for your feature (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

-   Express
-   Sequelize
-   TypeScript
-   MySQL
