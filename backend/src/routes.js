//Dependency imports:
import dotenv from 'dotenv' ;
dotenv.config();
import express from 'express' ;
import { v4 as uuidv4 } from 'uuid';
    // function uuidv4() to create a random uuid
import jwt from 'jsonwebtoken' ;
import path from 'path' ;

//Custom module imports:
import {
    validateCF,
    validateUser } from './middleware/validation.js' ;
import {
    createHash,
    verifyHash } from './util/hasher.js' ;
import jwtVerify from './middleware/jwtVerify.js' ;
import * as dataHandler from './util/dataHandler.js' ;

//Database filepaths:
const usersFile = path.resolve(process.env.DATA_USERS_LOCATION);
const entriesFile = path.resolve(process.env.DATA_ENTRIES_LOCATION);

const router = express.Router() ;

//1. Route to create an entry when the user submits their contact form
router.post('/contact_form/entries', validateCF, async (req, res, next) => {
    const newEntry = {
        id: uuidv4(),
        ...req.body
    };
    try {
        await dataHandler.addData(entriesFile, newEntry);
        return res.status(201).json(newEntry);
    } catch (err) {
        console.error(err);
        return next(err);
    };
});

//2. Route to create a user
router.post('/users', validateUser, (req, res, next) => {
    let password = req.body.password;
    createHash(password).then(hash => {
        req.body.password = hash;
        const newUser = {
            id: uuidv4(),
            ...req.body
        }; 
        return newUser;            
    }).then(async (newUser) => {
        try {
            await dataHandler.addData(usersFile, newUser);
            delete newUser.password;
            return res.status(201).json(newUser);
        } catch (err) {
            console.error(err);
            return next(err);
        };
    });    
});
  
//3. Route to log in a registered user to create a JWT
router.post('/auth', async (req, res) => {
    //In the event the email or password does not match:
    let users = await dataHandler.getAll(usersFile);
    let user = users.find(user => user.email == req.body.email);    
    if (user == undefined) {
        return res.status(401).json({message: "incorrect credentials provided"});
    };  
    let password = req.body.password;
    let storedHash = user.password;
    verifyHash(password, storedHash).then(valid => {
        if (!valid) {
            return res.status(401).json({message: "incorrect credentials provided"});
        };
        //Upon successful login: 
        const userEmail = req.body.email;
        const token = jwt.sign({userEmail}, process.env.JWT_SECRET, {expiresIn: "2h"});      
        return res.json({token});
    });
});

//4. Route to get a listing of all submissions when given a valid JWT is provided from the route defined above
router.get('/contact_form/entries', jwtVerify, async (req, res, next) => {
    try {
        let entries = await dataHandler.getAll(entriesFile);
        return res.json(entries);
    } catch (err) {
        console.error(err);
        return next(err);
    };
});

//5. Route to get a specific submission when given an ID alongside a valid JWT
router.get('/contact_form/entries/:id', jwtVerify, async (req, res, next) => {
    try {
        let entries = await dataHandler.getAll(entriesFile);
        let entry = entries.find(entry => entry.id == req.params.id);
        if (entry == undefined) {
            return res.status(404).json({message: `entry ${req.params.id} not found`});
        };
        return res.json(entry);
    } catch (err) {
        console.error(err);
        return next(err);
    };
});

export default router
