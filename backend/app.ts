import express, { Request, Response } from 'express';
import bookRoutes from "./routes/bookRoutes";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api", bookRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello Node');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});