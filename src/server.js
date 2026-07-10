import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import zucksRoutes from './routes/zucksRoutes.js'
import authRoutes from './routes/authRoutes.js'
import authMiddleware from './middleware/authMiddleware.js'

const app = express(); // creating main variable
const PORT = process.env.PORT; // PORT (only for debugging on some computer)

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, '../public'))); // ../public as root directory
app.use(express.json()); // using json communication

app.get('/', (req, res) => { // loading main page
    // just sending .html file to show
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/api/zucks', authMiddleware, zucksRoutes); // zucks routes for all /api/zucks/...
app.use('/api/auth', authRoutes); // auth routes for all /api/auth/...

app.listen(PORT, () => { // starting the setver
    console.log(`Server started on port: ${PORT}`);
})