import { DatabaseSync } from "node:sqlite";
import defaultZucks from './default.js';
import fs from 'fs';
const db = new DatabaseSync(':memory:');

db.exec(`
    CREATE TABLE zucks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        description TEXT,
        avatar TEXT,
        author TEXT
    )`)


// for photos value is the path to image
db.exec(`
    CREATE TABLE elements (
        zuck_id INTEGER,
        id INTEGER,
        name TEXT,
        photo TEXT,
        PRIMARY KEY (zuck_id, id),
        FOREIGN KEY(zuck_id)
        REFERENCES zucks(id)
    )
`)

// default
const findDefault = db.prepare(`SELECT * FROM zucks WHERE author = ?`);

const defaults = findDefault.all("Dava");

const addZuck = db.prepare(`INSERT INTO zucks (title, description, avatar, author) VALUES (?, ?, ?, ?)`);

const addElement = db.prepare(`INSERT INTO elements (zuck_id, name, photo) VALUES (?, ?, ?)`);

function addZuckByJSON(zuck) {
    addZuck.run(zuck.name, zuck.description, zuck.avatar, zuck.author);


    zuck.list.forEach(person => {
        const imageFile = person.replace(" ", "_");
        addElement.run(zuck.id, person, imageFile + ".webp" || imageFile + ".jpg" || imageFile + ".png");
    });
}

if (defaults) {
    console.log(defaultZucks);
    Object.values(defaultZucks).forEach(zuck => {
        addZuckByJSON(zuck);
    });
}

const getAll = db.prepare(`SELECT * FROM elements`);

fs.writeFile("text.txt", JSON.stringify(getAll.all(), null, 4), (err) => {});

export { db, addZuckByJSON }