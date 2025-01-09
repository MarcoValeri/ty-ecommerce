import express, { NextFunction, Request, Response } from 'express';
import bookRoutes from "./routes/bookRoutes";

const app = express();
const port = 3000;

// Middleware to allow cross-origin requests
app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use(express.json());
app.use("/api", bookRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello Node');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});