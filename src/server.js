import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import zucksRoutes from './routes/zucksRoutes.js'
import authRoutes from './routes/authRoutes.js'
import authMiddleware from './middleware/authMiddleware.js'

const app = express();
const PORT = process.env.PORT;

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json()); // using json communication

app.get('/', (req, res) => { // loading main page
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/api/zucks', authMiddleware, zucksRoutes); // for all /zuck requests using zucksRoutes.js's router
app.use('/api/auth', authRoutes);

app.listen(PORT, () => { // when started server
    console.log(`Server started on port: ${PORT}`);
})