const apiBase = '/api/';

let token = localStorage.getItem('token')

// changing navbar icons' color when hovered
const plus = document.getElementById('plus-sign')
plus.parentElement.parentElement.addEventListener('mouseover', () => {
    plus.setAttribute("src", "./images/plus_yellow.png")
})
plus.parentElement.parentElement.addEventListener('mouseout', () => {
    plus.setAttribute("src", "./images/plus_white.png")
})
const profile = document.getElementById('profile-sign')
profile.parentElement.parentElement.addEventListener('mouseover', () => {
    profile.setAttribute("src", "./images/profile_yellow.png")
})
profile.parentElement.parentElement.addEventListener('mouseout', () => {
    profile.setAttribute("src", "./images/profile_white.png")
})

let isMinimized = false;
function checkOverflow() {
    const vw = window.innerWidth;
    console.log(vw);

    if (vw < 600) {
        const allAvatars = document.querySelectorAll(".zuck-avatar");
        console.log(allAvatars.length);

        allAvatars.forEach(avatar => {
            avatar.setAttribute("hidden", true);
        })

        isMinimized = true;
    } else if (isMinimized) {
        const allAvatars = document.querySelectorAll(".zuck-avatar");

        allAvatars.forEach(avatar => {
            avatar.removeAttribute("hidden");
        })

        isMinimized = false;
    }
}

window.addEventListener("resize", checkOverflow);

async function authenticate() {
    try {
        const response = await fetch(apiBase + 'auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        });

        if (!response.ok) {
            const text = await response.text();
            console.error('HTTP error', response.status, text);
            return;
        }

        let data = await response.json();

        if (data.token) {
            token = data.token;
            localStorage.setItem('token', token);

            await loadZucks();
        }
    }
    catch (err) {
        console.log(err.message)
    }
}

async function loadZucks() {
    const suggestions = document.getElementById("suggestions");

    // requesting a list of zucks
    const response = await fetch(apiBase + 'zucks/', {
        headers: {
            'Authorization': token
        }
    });
    const zucks = await response.json();

    // showing each zucks in suggestions
    Object.keys(zucks).forEach(index => {
        const zuck = zucks[index];
        const zuckSuggestion = document.createElement("article");
        zuckSuggestion.setAttribute("class", "zuck-suggestion");
        zuckSuggestion.innerHTML = `
        <img width="150" height="150" class="zuck-avatar"
        src="./images/${zuck.avatar}"
        loading="lazy"
        onerror="this.src='./images/default.jpg'">

        <div class="vertical-flex">
            <h2>${zuck.title}</h2>
            <p class="zuck-description">${zuck.description}</p>
        </div>

        <a href="./choice/index.html?id=${+index+1}"><button class="zuck-play zuck-btn">&#9658;</button></a>`;
        suggestions.appendChild(zuckSuggestion);
    });
    checkOverflow();
}

if (token) {
    async function run() {
        await loadZucks();
    }
    run();
} else {
    authenticate();
}