import express, {Request, Response, NextFunction} from 'express';
//const express = require('express')
const app = express()
const port = 3000

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({foo: 'sucesso total, com ts-dev!'});
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))