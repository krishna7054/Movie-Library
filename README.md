# Movie Library App

A movie library web application built with Node.js, Express, React, and Tailwind CSS. This application allows users to sign up, sign in, search for movies using the OMDB API, and create and manage movie lists that can be either public or private.

## Description

The Movie Library application aims to provide a personalized and organized way for users to keep track of their favorite movies. By leveraging modern web technologies, the app offers a seamless and interactive experience for movie enthusiasts. Here’s a closer look at what the application offers:

### Key Features

- **User Authentication**: Users can create an account and log in securely using JWT (JSON Web Token) for authentication.
- **Movie Search**: Users can search for movies using the OMDB API, which provides access to a vast database of movie information.
- **Movie Lists**: Users can create multiple movie lists, similar to playlists on YouTube, to categorize and save their favorite movies.
- **Public and Private Lists**: Each list can be set to public (viewable by anyone with the link) or private (viewable only by the creator), offering flexibility in sharing preferences.
- **Responsive Design**: The application is designed to be responsive, providing a good user experience on both desktop and mobile devices.

### Use Cases

1. **Movie Enthusiasts**: Keep track of movies watched or plan to watch.
2. **Recommendations**: Share public lists with friends and family for movie recommendations.
3. **Organization**: Categorize movies into different lists based on genres, favorites, or watch status.

### Tech Stack

- **Backend**: Node.js, Express, MongoDB
- **Frontend**: React, Tailwind CSS
- **API**: OMDB API for movie data

## File Structure
```bash
movie-library-app/
├── backend/
│ ├── controllers/
│ │ └── moviesController.js
| | └── listController.js
| | └── userController.js
│ ├── models/
│ │ ├── List.js
│ │ └── User.js
│ ├── routes/
│ │ ├── listRoutes.js
│ │ └── movieRoutes.js
| | └── userRoutes.js
│ ├── middleware/
│ │ └── authMiddleware.js
│ ├── config/
│ │ └── db.js
│ ├── utils/
│ │ └── generateToken.js
| | └── omdbApi.js
│ ├── server.js
│ ├── .env
│ └── package.json
| |
├── frontend/
│ ├── public/
│ │ └── index.html
│ ├── src/
│ │ ├── components/
│ │ │ └── Navbar.js
│ │ ├── pages/
│ │ │ ├── SignIn.js
│ │ │ └── SignUp.js
│ │ │ └── Home.js
│ │ │ └── ListDetils.js
│ │ │ └── CreateList.js
│ │ ├── services/
│ │ │ └── api.js
│ │ ├── App.js
│ │ ├── index.js
│ │ └── index.css
│ ├── tailwind.config.js
│ ├── .env
│ └── package.json
├── README.md
└── .gitignore
```


## Installation

### Backend

1. **Navigate to the `backend` directory**:

    ```bash
    cd backend
    ```

2. **Create a `.env` file** with the following variables:

    ```
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    OMDB_API_KEY=your_omdb_api_key
    ```

3. **Install dependencies**:

    ```bash
    npm install
    ```

4. **Start the server**:

    ```bash
    node server.js
    or
    npm run dev
    ```

### Frontend

1. **Navigate to the `frontend` directory**:

    ```bash
    cd frontend
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Start the development server**:

    ```bash
    npm start
    ```

## Running the Application

1. **Backend**: Ensure the backend server is running at `http://localhost:5000`.
2. **Frontend**: Ensure the frontend development server is running at `http://localhost:3000`.

## Deployment

- **Backend**: Render
- **Frontend**: Netlify

## Project Structure Details

### Backend

- **controllers/**: Contains the controllers for handling requests.
  - `moviesController.js`: Handles movie-related operations.
  - `listController.js`: Handles movie-list-related operations.
  - `userController.js`: Handles user-related operations.
- **models/**: Contains the Mongoose models for MongoDB.
  - `List.js`: Movie model schema.
  - `User.js`: User model schema with password hashing.
- **routes/**: Contains the route definitions.
  - `userRoutes.js`: Authentication routes (Sign In/Sign Up).
  - `moviesRoutes.js`: Movie-related routes (search, add to list).
  - `listRoutes.js`: Movie-related routes (add to list, list management).
- **middleware/**: Contains the middleware for request handling.
  - `authMiddleware.js`: Middleware for JWT authentication.
- **config/**: Contains configuration files.
  - `db.js`: Database connection configuration.
- **utils/**: Contains API/Token files.
  - `omdbApi.js`: Handles omdbApi-related operations.
  - `generateToken.js`: Handles Token-related operations
- `server.js`: Main server file.
- `.env`: Environment variables.
- `package.json`: Backend dependencies and scripts.

### Frontend

- **public/**: Contains the public HTML file.
  - `index.html`: Main HTML file.
- **src/**: Contains the source code for the React application.
  - **components/**: Contains the React components.
    - `Navbar.js`: Navbar component.
  - **pages/**: Contains the React pages.
    - `SignIn.js`: Sign In page.
    - `SignUp.js`: Sign Up page.
    - `Home.js`: Home page with movie search and list functionality.
    - `ListDetils.js`: List Detils page.
    - `CreateList.js`: Create lists page.
  - **services/**: Contains the API service functions.
    - `api.js`: API service for making HTTP requests.
  - `App.js`: Main App component.
  - `index.js`: Entry point for the React application.
  - `index.css`: Global CSS file.
- `tailwind.config.js`: Tailwind CSS configuration.
- `package.json`: Frontend dependencies and scripts.

## Live Application

- [Live Application](https://coruscating-churros-aea073.netlify.app)

## Preview
### Sign Up
![image](https://github.com/krishna7054/Movie-Library/assets/102844052/029c86d7-bb14-4890-8ab6-550f40820d76)

### Sign In
![image](https://github.com/krishna7054/Movie-Library/assets/102844052/224532ee-3bbd-4a50-bd0d-c8d7116ba951)

### Home
![image](https://github.com/krishna7054/Movie-Library/assets/102844052/62be3175-82fe-47e8-bc3a-77b6e5682539)

![image](https://github.com/krishna7054/Movie-Library/assets/102844052/1cd708c1-91db-4051-94c6-c7b51975731b)

### Create Movie List
![image](https://github.com/krishna7054/Movie-Library/assets/102844052/c7cf273c-0ce7-41ef-9785-fb429144a512)

### Movie List
![image](https://github.com/krishna7054/Movie-Library/assets/102844052/4dd91ba6-a157-447a-8aae-b934365f9c14)
