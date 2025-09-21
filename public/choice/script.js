// constant variables
const apiBase = '/api/';

// changing icons when hovered
const plus = document.getElementById('plus-sign')
plus.addEventListener('mouseover', () => {
    plus.setAttribute("src", "../images/plus_yellow.png")
})
plus.addEventListener('mouseout', () => {
    plus.setAttribute("src", "../images/plus_white.png")
})
const profile = document.getElementById('profile-sign')
profile.addEventListener('mouseover', () => {
    profile.setAttribute("src", "../images/profile_yellow.png")
})
profile.addEventListener('mouseout', () => {
    profile.setAttribute("src", "../images/profile_white.png")
})
const home = document.getElementById('home-sign')
home.addEventListener('mouseover', () => {
    home.setAttribute("src", "../images/home_yellow.png")
})
home.addEventListener('mouseout', () => {
    home.setAttribute("src", "../images/home_white.png")
})


let count = 0;
let previous = undefined;
let nextRound = [];
let round = 1;

const option1 = document.getElementById("option1")
const option2 = document.getElementById("option2")

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

async function getElements() {
    const response = await fetch(apiBase + `zucks/getList?of=${id}`, {});

    if (response.status == 200) {
        const zuck = await response.json();
        window.zuckArray = zuck;
    }
    else {
        alert((await response.text()).toString())
        window.location.href = "../index.html"
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

function updateOption(option) {
    const caption = option.querySelector(".caption");
    const img = option.querySelector("img.option");

    caption.innerText = option.objectval.name;
    img.setAttribute("src", "../images/" + option.objectval.photo);
}

let image1, image2;
async function  showElements() {
    await getElements();

    window.zuckArray = shuffle(window.zuckArray);

    previous = [
        [
        zuckArray[count],
        zuckArray[count+1]
        ]
    ];

    option1.objectval = zuckArray[count];
    updateOption(option1)

    option2.objectval = zuckArray[++count];
    updateOption(option2)
}

function win(winner, winnerObj, looserObj) {
    looserObj.querySelector("img").setAttribute("src", "../images/default.jpg");

    previous.push([
        option1.objectval,
        option2.objectval
    ])
    count++;
    console.log(previous);

    if (count < zuckArray.length - 1) {
        looserObj.objectval = zuckArray[count];
        updateOption(looserObj);
    } else {
        const winnerName = winnerObj.querySelector(".caption");

        alert(`${winnerName.innerText} won!`);

        window.location.href = "../index.html";
    }
}

option1.addEventListener("click", () => {
    win(1, option1, option2)
})

option2.addEventListener("click", () => {
    win(2, option2, option1)
})

const backBtn = document.getElementById("back-btn");

backBtn.addEventListener("click", () => {
    if (previous == undefined || count == 1) {
        return;
    }
    console.log(previous)
    count--;

    const options = [option1, option2];

    const goal = previous[previous.length - 1];

    if (goal[0] == option1.objectval) {
        option2.objectval = goal[1];

        updateOption(option2);
    } else {
        option1.objectval = goal[0];

        updateOption(option1);
    }

    previous.pop();
    console.log(previous);
});

showElements();