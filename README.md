# Todo App API

This is a RESTful API for a Todo Application built using Express and PostgreSQL. Below are the API endpoints available for managing tasks, categories, users, and statuses.

## Base URL

http://localhost:3000

## Authentication

For simplicity, this API does not include authentication. You can manage users through the `users` endpoint.

## Endpoints

### 1. Categories

#### Create a New Category

- **URL:** `/categories`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "categoryName": "Work"
  }
  ```
- **Response:**
  ```json
  {
    "category_id": 1,
    "category_name": "Work"
  }
  ```

#### Get All Categories

- **URL:** `/categories`
- **Method:** `GET`
- **Response:**
  ```json
  [
    {
      "category_id": 1,
      "category_name": "Work"
    },
    {
      "category_id": 2,
      "category_name": "Personal"
    }
  ]
  ```

#### Delete Categories

- **URL:** `/categories/{id}`
- **Method:** `DELETE`
- **Response:**
  ```json
  [
      {"category delete successfully"}
  ]
  ```

### 2. Users

#### Create a New User

- **URL:** `/users`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "username": "JohnDoe",
    "email": "jhon@gmail.com"
  }
  ```
- **Response:**
  ```json
  {
    "user_id": 1,
    "username": "JohnDoe",
    "email": "jhon@gmail.com"
  }
  ```

#### Get All Users

- **URL:** `/users`
- **Method:** `GET`
- **Response:**
  ```json
  [
    {
      "user_id": 1,
      "username": "JohnDoe",
      "email": "jhon@gmail.com"
    },
    {
      "user_id": 2,
      "username": "JaneDoe",
      "email": "jhon@gmail.com"
    }
  ]
  ```

### 3. Task Status

#### Create a New Status

- **URL:** `/statuses`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "statusName": "Pending"
  }
  ```
- **Response:**
  ```json
  {
    "status_id": 1,
    "status_name": "Pending"
  }
  ```

#### Get All Statuses

- **URL:** `/statuses`
- **Method:** `GET`
- **Response:**
  ```json
  [
    {
      "status_id": 1,
      "status_name": "Pending"
    },
    {
      "status_id": 2,
      "status_name": "Completed"
    }
  ]
  ```

### 4. Tasks

#### Create a New Task

- **URL:** `/tasks`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "taskTitle": "Finish project report",
    "taskDescription": "Complete the report by the end of the week.",
    "userId": 1,
    "categoryId": 1,
    "statusId": 1,
    "dueDate": "2024-10-20"
  }
  ```
- **Response:**
  ```json
  {
    "task_id": 1,
    "task_title": "Finish project report",
    "task_description": "Complete the report by the end of the week.",
    "user_id": 1,
    "category_id": 1,
    "status_id": 1,
    "due_date": "2024-10-20"
  }
  ```

#### Get All Tasks

- **URL:** `/tasks`
- **Method:** `GET`
- **Response:**
  ```json
  [
    {
      "task_id": 1,
      "task_title": "Finish project report",
      "task_description": "Complete the report by the end of the week.",
      "due_date": "2024-10-20",
      "username": "JohnDoe",
      "category_name": "Work",
      "status_name": "Pending"
    }
  ]
  ```

#### Update Task Status

- **URL:** `/tasks/:id/status`
- **Method:** `PUT`
- **Request Body:**
  ```json
  {
    "statusId": 2
  }
  ```
- **Response:**
  ```json
  {
    "task_id": 1,
    "task_title": "Finish project report",
    "task_description": "Complete the report by the end of the week.",
    "user_id": 1,
    "category_id": 1,
    "status_id": 2,
    "due_date": "2024-10-20"
  }
  ```

#### Delete a Task

- **URL:** `/tasks/:id`
- **Method:** `DELETE`
- **Response:**
  ```json
  {
    "message": "Task deleted successfully"
  }
  ```

### Additional Notes

- Replace `:id` with the actual ID of the task you wish to update or delete.
- Ensure you have created the necessary categories, users, and statuses before creating tasks to avoid foreign key constraint errors.

## Running the Application

1. Ensure PostgreSQL is running.
2. Run `npm install` to install dependencies.
3. Start the server with `npm start`.

### Conclusion

This README provides a comprehensive overview of the Todo App API and the Postman requests you can use to interact with it. Adjust the details as necessary based on your project structure and requirements.
