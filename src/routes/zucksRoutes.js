import express from 'express'
import { db, addZuckByJSON } from '../db.js'

const router = express.Router();

// GET /api/zucks/ All existing zucks
router.get('/', (req, res) => {
    // preparing SQL command
    const getZucks = db.prepare(`SELECT * FROM zucks`);
    // finding all zucks
    const zucks = getZucks.all();
    // status 200 (OK) if found
    res.status(200).json(zucks);
})

// finding all elements in a zuck by zuck_id
const getElementsByZuckId = db.prepare(`SELECT * FROM elements WHERE zuck_id = ?`);

// finding an element in a zuck by its own id and zuck_id
const getElementByIdAndZuckId = db.prepare(`SELECT * FROM elements WHERE id = ? AND zuck_id = ?`);

// /api/zucks/getList?of={id} Returns all elements in a zuck
router.get('/getList', (req, res) => {
    // converting url variable to num
    const id = parseInt(req.query.of);
    if (isNaN(id)) {
        // in case of string or any other invalid representation
        res.status(400).send(`400 bad request. Zuck id ("${req.query.of.replace('"', '\\"')}") is not a number`);
        return;
    }

    // recieving all elements of requested id
    const all = getElementsByZuckId.all(id);

    // if no elements found
    if (all.length == 0) {
        res.status(404).send(`404 zuck with id ${id} not found`);
        return;
    }

    // status 200 (OK) if found elements (returning it as JSON)
    res.status(200).json(all);
})

// set a new rating for an element by its id and zuck_id
const changeRatingOfElementByZuckIdAndId = db.prepare(`UPDATE elements SET rating = ? WHERE zuck_id = ? AND id = ?`);

// api/zucks/calcelo
router.post('/calcelo', (req, res) => {
    // calculating, changing and returning new ratings based on the winner and current ratings

    // constant that decides how much would one win or loss affect your rating
    const K = 10;

    // recieving information about the winner and the looser
    const winner = req.body.winner.objectval;
    const looser = req.body.looser.objectval;

    // if calculating elements from different zucks
    if (winner.zuck_id != looser.zuck_id) {
        res.status(400).send("400 Bad Request. Can't compare elements from different zucks");
        return;
    }

    // calculating the formula for elo (like in chess)
    const expectedForWinner = 1 / (1 + 10 ** ((winner.rating - looser.rating) / 400));
    const dR = K * (1 - expectedForWinner);
    const winnerNewRating = Math.round(winner.rating + dR);
    const looserNewRating = Math.round(looser.rating - dR);

    // applying changes to the database
    changeRatingOfElementByZuckIdAndId.run(winnerNewRating, winner.zuck_id, winner.id);

    changeRatingOfElementByZuckIdAndId.run(looserNewRating, looser.zuck_id, looser.id);

    // returning new ratings
    res.status(200).json({winnerNewRating, looserNewRating});
})

export default router