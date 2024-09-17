import express, { Application } from 'express';
import optRouter from './routes/otp.routes';


const app: Application = express();

// Define routes, middleware, etc.
app.use(express.json());

// Middleware, routes, etc.
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// 
app.use('/v1/', optRouter);


export default app;