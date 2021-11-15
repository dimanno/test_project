const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const {userRouter}  = require('./routes')
const {response, json} = require("express");

const app = express();
mongoose.connect('mongodb://localhost:27017/users-test')

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', userRouter);

app.use('*', (err, req, res, next) => {
    res
        .status(err.status || 500)
        .json({
            message: err.message})
})

app.listen(5000, () => {
    console.log('app listen 5000')
})



