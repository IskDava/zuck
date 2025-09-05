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


let count = 0
let nextRound = []
let round = 1

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

let image1, image2;
async function  showElements() {
    await getElements();

    window.zuckArray = shuffle(window.zuckArray);

    const captions = document.querySelectorAll("figcaption.caption")
    image1 = option1.querySelector(".option")
    image1.setAttribute("src", "../images/" + window.zuckArray[count].photo)
    captions[0].innerText = window.zuckArray[count++].name;
    image2 = option2.querySelector(".option")
    image2.setAttribute("src", "../images/" + window.zuckArray[count].photo)
    captions[1].innerText = window.zuckArray[count++].name
}


function win(winner, winnerObj, looserObj) {
    looserObj.querySelector("img").setAttribute("src", "../images/default.jpg");


    count++;
    
    if (count < zuckArray.length - 1) {
        const looserCaption = looserObj.querySelector(".caption");
        const looserImg = looserObj.querySelector("img.option");

        looserCaption.innerText = zuckArray[count].name;
        looserImg.setAttribute("src", "../images/" + zuckArray[count].photo);
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
    
})

showElements();