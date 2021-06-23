# FS1010-2021-course-project

## Description

This web app was created for a course project for FS1010 Web UI Concepts and Frameworks course from York University's certificate in full-stack web development. React is used for the frontend and Express is used for the backend. This project is an example implementation connecting backend including protected routes. It is assumed backend is running locally on port `4000`. 

### Technologies used

In addition to using HTML, CSS, and JavaScript, here are some of the other main technologies used by this app:

* [React](https://reactjs.org/)
* [Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/)
* [Reactstrap](https://reactstrap.github.io/)
* [Node](https://nodejs.org/en/about/)
* [Express](https://expressjs.com/)
* [React Router](https://reactrouter.com/web/guides/quick-start)

## Getting Started

Git clone this project. Npm install will need to be run twice: once while in the frontend folder and once while in the backend folder. You can check the package.json files in each folder for a list of dependencies and scripts.

### Environment Setup
Create a .env file in the root of your backend folder. In this file add the following variables:
* PORT=4000
* JWT_SECRET=(assign any value)
* DATA_USERS_LOCATION=./data/users.json
* DATA_ENTRIES_LOCATION=./data/entries.json

### Data
In the backend folder some sample data is made available in the users.json and entries.json files. You may wish to add these files to gitignore. To test the login functionality you can use the email test@gmail.com with the password 12345678 (note: passwords are hashed using bcrypt before being added to users.json).
