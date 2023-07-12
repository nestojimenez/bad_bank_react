# Project Title

Bad Bank.

## Description/Motivation:

The intention for this project is to demostrate the use of the tools learned on the MIT "Professional Certificate in Coding: Full Stack Development with MERN".

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Installation Guidelines:

Download and install
- git clone repository 
- npm install

MongoDB
- docker run -p 27017:27017 --name badbank -d mongo

Run server
- get into path "/server"
- npm start, this will run server on port 8000

Run React-app
- return to path "/bad_bank_react"
- npm start, this will run your react app on port 3000


## Screenshots:

![BadBankInit](https://github.com/nestojimenez/bad_bank_react/assets/117302789/0c56b67a-b284-4251-9312-17dbf99ef029
![Create user](../bad_bank_react/images/BadBankCreate.PNG)
![All Data](../bad_bank_react/images/BadBankAll.PNG)

### Technology used:

This app was created mainly with the following technologies.
- react-create-app
- mongodb
- express
- Bootstrap
- react-router
- nodemon
- cors

### Features

Current Features:
- Init page
- Create Account on Mongo
- View all accunts getting data from Mongo

Work in progress, I will add:
- Formik
- Firebase Authentication
- Include user Authorization
- Complete Login, Withdraw, Deposit and Balance functionalty

### License
ISC
