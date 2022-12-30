import express from 'express';

const logger = {req: express.request, res: express.response, next: Function };
void => {
    let url = req.url;
    console.log(`${url} was visited`);
    next();
}

export default logger