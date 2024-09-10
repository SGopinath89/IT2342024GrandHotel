# Grand Hotel - Food Delivery Platform

## Description

Grand Hotel is a food delivery service platform designed to streamline the process of ordering and delivering food from a wide range of restaurants. The platform includes a user-friendly frontend for customers and an efficient backend system to manage orders, users, and restaurant data.

## Features

- **User Authentication:** Secure user registration and login using JWT and bcrypt.
- **Restaurant Management:** Add, update, and manage restaurant menus.
- **Order Processing:** Handle customer orders, payments, and order tracking.
- **File Uploads:** Manage images and other files using multer.
- **Data Validation:** Ensure data integrity with validator.
- **Cross-Origin Resource Sharing:** Enable API requests from different domains using CORS.
- **Environment Configuration:** Use dotenv to manage environment variables.

## Tech Stack

### Backend

- **Node.js & Express.js:** Backend framework for building RESTful APIs.
- **MongoDB & Mongoose:** Database and ORM for managing data.
- **JWT & Bcrypt:** Authentication and password hashing.
- **Multer:** Middleware for handling file uploads.
- **Nodemon:** Development tool for auto-restarting the server.

### Frontend

- **React.js:** Frontend library for building the user interface.
- **Vite:** Fast build tool for modern web projects.
- **Axios:** HTTP client for making API requests.
- **React Router:** Library for handling routing in React applications.

## Installation

### Prerequisites

- Node.js & npm
- MongoDB

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/grand_hotel.git
   cd grand_hotel
   ```

2. Navigate to the backend directory and install dependencies:

   ```bash
   cd backend
   npm install
   ```

3. Create a `.env` file in the `backend` directory and configure the following environment variables:

   ```env
   PORT=8080
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server:

   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory and install dependencies:

   ```bash
   cd ../frontend
   npm install
   ```

2. Start the frontend development server:

   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`.

## Usage

- **Admin Panel:** Manage restaurants, orders, and users.
- **Customer Interface:** Browse menus, place orders, and track deliveries.

