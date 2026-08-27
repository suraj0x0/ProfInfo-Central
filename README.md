# ProfInfo Central

ProfInfo Central is a web application designed to facilitate communication between students and professors for project requests and approvals.

The application allows students to explore professors, request projects, and track the status of their requests. Professors can review, accept, or reject project requests.

## Deployment
Not deployed it.

## Features

- **Student Portal:** Students can request projects from specific professors.
- **Professor Portal:** Professors can review and manage project requests from students.
- **Authentication:** Users can register, log in, and log out securely.
- **Project Management:** Professors can accept or reject project requests, while students can track the status of their requests.
- **Database Integration:** MongoDB is used to store user information and project requests.
- **Responsive Design:** Built with React.js for a responsive user experience.

## Technologies Used

### Frontend

- **React.js:** Used to build the user interface.
- **Axios:** Used for making HTTP requests between the frontend and backend.
- **React Router DOM:** Used for navigation and routing within the application.

### Backend

- **Node.js:** JavaScript runtime used to run the backend.
- **Express.js:** Used to build the REST API and handle HTTP requests.
- **Mongoose:** Used for modeling and interacting with MongoDB.
- **JSON Web Token (JWT):** Used for authentication and session management.
- **bcryptjs:** Used for securely hashing passwords.
- **express-validator:** Used for validating and sanitizing incoming requests.
- **Morgan:** Used for HTTP request logging.
- **dotenv:** Used for managing environment variables.

### Database

- **MongoDB Atlas:** Cloud database used to store application data.

## Project Structure

```text
ProfInfo-Central/
│
├── Frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
│
└── backend/
    └── server/
        ├── Controllers/
        ├── Middleware/
        ├── Models/
        ├── Routes/
        ├── utils/
        ├── app.js
        ├── package.json
        └── ...



   

