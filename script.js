const plus = document.getElementById('plus-sign')
plus.addEventListener('mouseover', () => {
    plus.setAttribute("src", "./images/plus_yellow.png")
})
plus.addEventListener('mouseout', () => {
    plus.setAttribute("src", "./images/plus_white.png")
})
const profile = document.getElementById('profile-sign')
profile.addEventListener('mouseover', () => {
    profile.setAttribute("src", "./images/profile_yellow.png")
})
profile.addEventListener('mouseout', () => {
    profile.setAttribute("src", "./images/profile_white.png")
})

function switchContent(element, content) {
    element.classList.add("chosen")
    const main = document.getElementById('main-container')
    main.innerHTML = content
}

function getTrendContent(id, photo, title, description, author) {
    
}

const trend = document.getElementById('trend-btn')
const featured = document.getElementById('featured-btn')
const about = document.getElementById('about-btn')
trend.addEventListener('click', () => {
    switchContent(trend, "<p>a</p>")
    featured.classList.remove("chosen")
    about.classList.remove("chosen")
})
featured.addEventListener('click', () => {
    switchContent(featured, "<p>a</p>")
    trend.classList.remove("chosen")
    about.classList.remove("chosen")
})
about.addEventListener('click', () => {
    switchContent(about, "<p>a</p>")
    featured.classList.remove("chosen")
    trend.classList.remove("chosen")
})
/*
switchContent(trend, "<p>a</p>")
featured.classList.remove("chosen")
about.classList.remove("chosen")
*/