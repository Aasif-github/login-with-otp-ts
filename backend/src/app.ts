import express, { Application } from 'express';

const app: Application = express();

// Define routes, middleware, etc.
app.use(express.json());

// Middleware, routes, etc.
app.get('/', (req, res) => {
    res.send('Hello, world!');
});


export default app;