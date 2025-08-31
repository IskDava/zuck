// constant variables
const apiBase = '/';

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


function win(winner) {
    document.querySelectorAll(".winner").forEach(el => el.classList.remove("winner"));
    winner.classList.add('winner');

    option1.classList.remove("highlighted");
    option2.classList.remove("highlighted");

    const winnerName = winner.querySelector("figcaption.caption").innerText;
    zuckArray.forEach(element => {
        if (element.name == winnerName) {
            nextRound.push(element);
            return;
        }
    })

    loose(option1);
    loose(option2);

    const captions = document.querySelectorAll("figcaption.caption");
    console.log(nextRound);
    if (count < window.zuckArray.length - 1) {
        image1.setAttribute("src", "../images/" + window.zuckArray[count].photo)
        captions[0].innerText = window.zuckArray[count++].name
        image2.setAttribute("src", "../images/" + window.zuckArray[count].photo)
        captions[1].innerText = window.zuckArray[count++].name
    } else if (nextRound.length > 1) {
        window.zuckArray = nextRound
        if (nextRound.length % 2 == 1){
            nextRound = [nextRound[nextRound.length - 1]]
        }
        else {
            nextRound = []
        }
        count = 0
        round++
        image1.setAttribute("src", "../images/" + window.zuckArray[count].photo)
        captions[0].innerText = window.zuckArray[count++].name
        image2.setAttribute("src", "../images/" + window.zuckArray[count].photo)
        captions[1].innerText = window.zuckArray[count++].name
    } else {
        image2.setAttribute("src", "../images/" + nextRound[0].photo)
        captions[0].innerText = nextRound[0].name
        captions[1].innerText = ""
        alert("Турнир выиграл " + nextRound[0].name)
        option1.remove()
        option2.remove()
        window.location.href = "../index.html"
    }
}

function loose(looser) {
    const title = looser.querySelector(".winner-title")
    if (title) {
        looser.removeChild(title)
        looser.classList.remove("winner")
    }
}

option1.addEventListener("click", () => {
    win(option1)
    option1.classList.add("highlighted")
    loose(option2)
    option2.classList.remove("highlighted")
})

option2.addEventListener("click", () => {
    win(option2)
    option2.classList.add("highlighted")
    loose(option1)
    option1.classList.remove("highlighted")
})

showElements();