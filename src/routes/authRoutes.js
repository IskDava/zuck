import express from 'express'
import jwt from 'jsonwebtoken'
import { db } from '../db.js'

const router = express.Router();

// /api/auth/register
router.post('/register', (req, res) => {
    // registrating user to open the website
    try {
        // signing and returning a new json web token
        const token = jwt.sign({ valid: true }, process.env.JWT_SECRET, { expiresIn: '24h' });
        res.json({ token });
    } catch (err) {
        console.error(e);
        res.status(500).json({ error: 'JWT sign failed' });
    }
})

export default router