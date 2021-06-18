# FS1020-winter2021-course-project

## Description

A backend application for a contact us form. While entries can be submitted by anyone, the listing of messages will be restricted to authenticated users only.

## Routes

1. Route to create an entry when the user submits their contact form:
    `POST /contact_form/entries`

2. Route to create a user:
    `POST /users`

3. Route to log in a registered user to create a JWT (JSON Web Token):
    `POST /auth`

4. Route to get a listing of all submissions when given a valid JWT is provided:
    ```
    GET /contact_form/entries
    Authorization: bearer token
    ```

5. Route to get a specific submission when given an ID alongside a valid JWT:    
    ```
    GET /contact_form/entries/:id
    Authorization: bearer token
    ```

## Dependencies
After cloning this project, in your Terminal (while in the local repo) run the command "npm install" which will create a node_modules folder that contains the following dependencies:

bcrypt ; dotenv ; esm ; express ; jsonwebtoken ; nodemon (as a dev dependency) ; uuid

## Environment Setup
Create a .env file in your main folder. In this file add the following variables: PORT, JWT_SECRET, DATA_USERS_LOCATION, DATA_ENTRIES_LOCATION. Assign appropriate values to these variables.

## Scripts
These are shortcuts for commands you can enter in the Terminal. ex: you could enter "npm start" instead of "npm node index.js"

"start": "node -r esm index.js"

"dev": "nodemon -r esm index.js" (ex: "npm run dev")







