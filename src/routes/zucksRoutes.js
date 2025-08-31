import express from 'express'
import { db, addZuckByJSON } from '../db.js'

const router = express.Router();

router.get('/', (req, res) => {
    const getZucks = db.prepare(`SELECT * FROM zucks`);
    const zucks = getZucks.all();
    res.json(zucks).status(200);
})

function getElementsByZuckId(col) {
    return db.prepare(`SELECT ${col} FROM elements WHERE zuck_id = ?`);
}

router.get('/getList', (req, res) => {
    const id = +req.query.of;

    const all = getElementsByZuckId("*").all(id);

    if (!all) {
        res.status(404);
    }

    res.status(200).json(all);
})

export default router