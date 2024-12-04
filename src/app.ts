import express, { Application, Request, Response } from 'express';
import cors from 'cors';

// Creating Express application
const app: Application = express();

// Parsers
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Defining a simple root route
app.get('/', async (req: Request, res: Response) => {
  res.send('Server is running...');
});

export default app;
