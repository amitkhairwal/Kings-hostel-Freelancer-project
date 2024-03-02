# Project Setup Guide

## Backend Setup

Follow these steps to set up the backend part of your project:

1. **Install Dependencies**
   - Navigate to the backend project directory.
   - Run the following command to install the necessary npm packages:
     ```
     npm i
     ```

2. **Start the Development Server**
   - Start the backend server in development mode by running:
     ```
     npm run dev
     ```

## Frontend Setup

To set up the frontend part of your project, perform the following steps:

1. **Navigate to the Frontend Directory**
   - Change to the frontend project directory (`my-project`):
     ```
     cd my-project
     ```

2. **Install Dependencies**
   - Install the required npm packages by running:
     ```
     npm i
     ```

3. **Start the Frontend Development Server**
   - Launch the development server with:
     ```
     npm start
     ```

## Adding Images to the Gallery

To add images to the gallery, use the following API endpoint:

- **POST** `http://localhost:3001/gallery/add/img`

Ensure your request includes the necessary image data as per the API's requirements.

---

Remember to check both backend and frontend documentation for any additional setup or environment configurations needed.
