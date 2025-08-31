import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import zucksRoutes from './routes/zucksRoutes.js';

const app = express();
const PORT = process.env.PORT;

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.get('/', (req, res) => {
    console.log("Loaded main page");
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/zucks', zucksRoutes);

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
})