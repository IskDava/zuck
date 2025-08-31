import express from 'express'
import { db, addZuckByJSON } from '../db.js'

const router = express.Router();

// GET /zucks/
router.get('/', (req, res) => {
    // returning all existing zucks
    const getZucks = db.prepare(`SELECT * FROM zucks`);
    const zucks = getZucks.all();
    res.status(200).json(zucks);
})

router.get('/getList', (req, res) => {
    // converting url variable to num
    const id = parseInt(req.query.of);
    if (isNaN(id)) {
        res.status(400).send(`400 bad request. Zuck id ("${req.query.of.replace('"', '\\"')}") is not a number`);
        return;
    }

    const getElementsByZuckId = db.prepare(`SELECT * FROM elements WHERE zuck_id = ?`);

    // recieving all elements of requested id
    const all = getElementsByZuckId.all(id);

    if (all.length == 0) {
        res.status(404).send(`404 zuck with id ${id} not found`);
        return;
    }

    // status 200 (OK) if found elements (returning it as JSON)
    res.status(200).json(all);
})

export default router