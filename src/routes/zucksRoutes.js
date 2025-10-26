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

const getElementsByZuckId = db.prepare(`SELECT * FROM elements WHERE zuck_id = ?`);

const getElementByIdAndZuckId = db.prepare(`SELECT * FROM elements WHERE id = ? AND zuck_id = ?`);

router.get('/getList', (req, res) => {
    // converting url variable to num
    const id = parseInt(req.query.of);
    if (isNaN(id)) {
        res.status(400).send(`400 bad request. Zuck id ("${req.query.of.replace('"', '\\"')}") is not a number`);
        return;
    }

    // recieving all elements of requested id
    const all = getElementsByZuckId.all(id);

    if (all.length == 0) {
        res.status(404).send(`404 zuck with id ${id} not found`);
        return;
    }

    // status 200 (OK) if found elements (returning it as JSON)
    res.status(200).json(all);
})

const K = 10;

const changeRatingOfElementByZuckIdAndId = db.prepare(`UPDATE elements SET rating = ? WHERE zuck_id = ? AND id = ?`);

router.post('/calcelo', (req, res) => {
    const winner = req.body.winner.objectval;
    const looser = req.body.looser.objectval;

    if (winner.zuck_id != looser.zuck_id) {
        res.sendStatus(400);
        return;
    }
    const expectedForWinner = 1 / (1 + 10 ** ((winner.rating - looser.rating) / 400));
    const dR = K * (1 - expectedForWinner);
    const winnerNewRating = Math.round(winner.rating + dR);
    const looserNewRating = Math.round(looser.rating - dR);

    changeRatingOfElementByZuckIdAndId.run(winnerNewRating, winner.zuck_id, winner.id);

    changeRatingOfElementByZuckIdAndId.run(looserNewRating, looser.zuck_id, looser.id);

    res.status(200).json({winnerNewRating, looserNewRating});
})

export default router