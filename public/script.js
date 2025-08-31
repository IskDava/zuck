const apiBase = '/';

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

function switchContent(element, content) {
    element.classList.add("chosen")
    const main = document.getElementById('main-container')
    main.innerHTML = content
}

async function loadZucks() {
    const suggestions = document.getElementById("suggestions");

    const response = await fetch(apiBase + 'zucks/', {});
    const zucks = await response.json();

    Object.keys(zucks).forEach(index => {
        const zuck = zucks[index];
        const zuckSuggestion = document.createElement("article");
        zuckSuggestion.setAttribute("class", "zuck-suggestion");
        zuckSuggestion.innerHTML = `
        <img width="150" height="150" class="zuck-avatar"
        src="${zuck.avatar}"
        loading="lazy"
        onerror="this.src='./images/default.jpg'">
        <div class="vertical-flex">
            <h2>${zuck.title}</h2>
            <p class="zuck-description">${zuck.description}</p>
        </div>
        <a href="./choice/index.html?zuck=${+index+1}"><button class="zuck-play zuck-btn">&#9658;</button></a>`;
        suggestions.appendChild(zuckSuggestion);
    });
}

let isMinimized = false;

function checkOverflow() {
    const vw = window.innerWidth;

    if (vw < 600) {
        const allAvatars = document.querySelectorAll(".zuck-avatar");

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
window.addEventListener("load", checkOverflow);

loadZucks();