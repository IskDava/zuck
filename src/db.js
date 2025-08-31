import { DatabaseSync } from "node:sqlite";
import defaultZucks from './default.js';
import fs from 'fs';
import path, { dirname } from 'path'
import { fileURLToPath } from "url";
const db = new DatabaseSync(':memory:');

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

// here will be stored all zucks and their information (no elements)
db.exec(`
    CREATE TABLE zucks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        description TEXT,
        avatar TEXT,
        author TEXT
)`)


// for photos value is the path to image
// here each element (ever created) will be stored connected to its zuck by zuck_id
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

// get all zucks by author
const findDefault = db.prepare(`SELECT * FROM zucks WHERE author = ?`);

// all default zucks are made by Dava (me)
const defaults = findDefault.all("Dava");

// preparing SQL command to add zucks
const addZuck = db.prepare(`INSERT INTO zucks (title, description, avatar, author) VALUES (?, ?, ?, ?)`);

// preparing SQL command to add elements
const addElement = db.prepare(`INSERT INTO elements (id, zuck_id, name, photo) VALUES (?, ?, ?, ?)`);

function addZuckByJSON(zuck) {
    // function to add everything at once (zuck + its elements)
    /* example of JSON required
    "id": {
        "avatar": "image_file_name.webp", // can be .jpg or .png
        "name": "Test zuck",
        "description": "Providing an example of zuck",
        "id": id,
        "author": "Mark Sokolov",
        "list": ["elment1", "element2", ...]
    }
    */

    // running recently prepared command
    addZuck.run(zuck.name, zuck.description, zuck.id + '/avatar/' + zuck.avatar, zuck.author);

    // iterating through elements adding it to elements' table
    let counter = 0;
    zuck.list.forEach(person => {
        const imageFile = zuck.id + '/' + person.replace(" ", "_");
        const postfixes = ['.webp', '.jpg', '.png'];
        let correctImageFileName;
        for (let i = 0; i < postfixes.length; i++) {
            // checking correct file extention
            if (fs.existsSync(path.join(__dirname, "../public/images/" + imageFile + postfixes[i]))) {
                correctImageFileName = imageFile + postfixes[i];
                break;
            }
        }
        addElement.run(counter, zuck.id, person, correctImageFileName || "default.jpg");
        counter++;
    });
}

// if found default zucks in db
if (defaults) {
    // adding all default zucks if no
    Object.values(defaultZucks).forEach(zuck => {
        addZuckByJSON(zuck);
    });
}

export { db, addZuckByJSON }