import express from "express";
import mongoose from "mongoose";

import { registerValidation, loginValidation } from './validations/validations.js'

import checkAuth from './utils/checkAuth.js'
import * as UserController from './Controllers/UserController.js'

mongoose.connect('mongodb+srv://admin:wwwwww@cluster0.agofg.mongodb.net/blog?retryWrites=true&w=majority')
    .then(() => {
        console.log('DB OK')
    })
    .catch((err) => {
        console.log('DB Error', err)
    })

const app = express();

app.use(express.json())

app.post('/auth/login', loginValidation, UserController.login);
app.post('/auth/register', registerValidation, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);

app.listen(4444, (err) => {
    if (err) {
        return console.log(err)
    }

    console.log('Server OK')
})