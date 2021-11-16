const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const {userRouter}  = require('./routes')
const {PORT, MONGO_CONNECT} = require('./config/configs')
// const {response, json} = require("express");

const app = express();
mongoose.connect(MONGO_CONNECT)

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', userRouter);

app.use('*', (err, req, res, next) => {
    res
        .status(err.status || 500)
        .json({
            message: err.message})
})

app.listen(PORT, () => {
    console.log(`app listen ${PORT}`)
})



