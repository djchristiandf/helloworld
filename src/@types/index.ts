import express, {Request, Response, NextFunction} from 'express';
import usersRoute from '../routes/users.route';
//const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.use(usersRoute)
app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({foo: 'sucesso total, com ts-dev!'});
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))