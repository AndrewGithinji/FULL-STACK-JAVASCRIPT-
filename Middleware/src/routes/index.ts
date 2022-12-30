import express from 'express';
import countries from './api/Countries';
import Kenya from './api/Kenya';

const routes = express.Router();

//Calling our router//

routes.get('/', (req , res) => {
    res.send('main api route');
  });

  //using the routes imported//

  routes.use('/countries', countries);
  routes.use('/Kenya', Kenya);

  export default routes