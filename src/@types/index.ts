import express, {Request, Response, NextFunction} from 'express';
import usersRoute from '../routes/users.route';
import statusRoute from '../routes/status.route';

//const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.use(usersRoute)
app.use(statusRoute)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))