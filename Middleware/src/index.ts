import express from 'express';
import routes from './routes';

const app = express();
const port = 3000;

// A route handler for the home page && Middleware//

app.use('/api', routes);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});