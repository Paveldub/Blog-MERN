import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

mongoose.connect('mongodb+srv://admin:wwwwww@cluster0.agofg.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('DB OK')
})
    .catch((err) => {
    console.log('DB Error', err)
})

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.post('/auth/login', (req, res) => {
    console.log(req)

    const token = jwt.sign({
        email: req.body.email,
        fullName: 'Pavel Demidovich'
    }, 'secret123')

    res.json({
        success: true,
        token
    });
})

app.listen(4444, (err) => {
    if (err) {
        return console.log(err)
    }

    console.log('Server OK')
})