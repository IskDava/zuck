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

const people = {
    "boys": [
        "Денис Зайцев",
        "Егор Мезенцев",
        "Егор Смирнов",
        "Никита Сапончик",
        "Никита Горшков",
        "Никита Федин",
        "Павел Оболенский",
        "Антон Никифоров",
        "Филипп Крестинин",
        "Марк Соколов",
        "Марк Дмитриев",
        "Олег Птахов",
        "Александр Кудрявцев",
        "Александр Сидоренко",
        "Александр Ивойлов",
        "Илья Буслаев",
        "Давид Искиев",
        "Давид Андреев",
        "Кирилл Лобанов",
        "Платон Насардинов",
        "Алексей Андрушкевич",
        "Алексей Рогов",
        "Семен Ершов",
        "Ярослав Широв",
        "Ярослав Кузьмин", //!
        "Матвей Ястребов",
        "Петр Бородин",
        "Добрыня Мухоморов",
        "Константин Потапов",
        "Роман Рутковский",
        "Роман Югай",
        "Иван Дворников",
        "Иван Козлов",
        "Тимур Файзуллин",
        "Федор Смекалов",
        "Андрей Кирюшкин",
        "Андрей Вучков",
        "Андрей Капустин",
        "Владимир Солодников",
        "Михаил Федорук",
        "Артемий Бовкун",
        "Георгий Рогов",
        "Гай Токарев",
        "Сергей Якунин",
        "Даниил Скакун",
        "Дмитрий Бельман"
    ],
    "girls": [
        "Альфина Авлеева",
        "Анастасия Аникина",
        "Мария Бобровская",
        "Софья Борзенко",
        "Диана Вартанян",
        "Елизавета Ведесова",
        "Мирра Велентеенко",
        "Алиса Вепренцева",
        "Юлия Воронцова",
        "Варвара Говорухина",
        "Ксения Горбунова",
        "Ульяна Гориславская",
        "Анастасия Горшунова",
        "Анастасия Горюнова",
        "Анастасия Даминова",
        "Ева Друженец",
        "Мария Егорова",
        "Софья Жедкович",
        "Анна Журба",
        "Илария Ибряева",
        "Анна Китаева",
        "Елизавета Климова",
        "Елена Козырева",
        "Агата Корнилова",
        "Дарья Кудрявцева",
        "Таисия Кулик",
        "Амира Ладная",
        "Дарья Лаптиева",
        "Майя Ларина",
        "Устинья Лыкова",
        "Анастасия Максимова",
        "Ева Маршак",
        "Анастасия Матвеева",
        "Евгения Мозина",
        "Екатерина Молчанова",
        "Александра Мухина",
        "Станислава Мучкина",
        "София Насырова",
        "Виктория Некрасова",
        "Ольга Пантюшкова",
        "Дарья Пашистова",
        "Арина Перескокова",
        "Анастасия Полупанова",
        "София Попова",
        "Полина Роженцова",
        "Василиса Сабитова",
        "Софья Третьяк",
        "Екатерина Тропина",
        "Эльмира Хайбуллина",
        "Малика Хамидулла",
        "Александра Ходаркевич",
        "Мария Шевякова",
        "Вера Шурыгина"
    ],
    "all": [
        "Денис Зайцев",
        "Егор Мезенцев",
        "Егор Смирнов",
        "Никита Сапончик",
        "Никита Горшков",
        "Никита Федин",
        "Павел Оболенский",
        "Антон Никифоров",
        "Филипп Крестинин",
        "Марк Соколов",
        "Марк Дмитриев",
        "Олег Птахов",
        "Александр Кудрявцев",
        "Александр Сидоренко",
        "Александр Ивойлов",
        "Илья Буслаев",
        "Давид Искиев",
        "Давид Андреев",
        "Кирилл Лобанов",
        "Платон Насардинов",
        "Алексей Андрушкевич",
        "Алексей Рогов",
        "Семен Ершов",
        "Ярослав Широв",
        "Ярослав Кузьмин", //!
        "Матвей Ястребов",
        "Петр Бородин",
        "Добрыня Мухоморов",
        "Константин Потапов",
        "Роман Рутковский",
        "Роман Югай",
        "Иван Дворников",
        "Иван Козлов",
        "Тимур Файзуллин",
        "Федор Смекалов",
        "Андрей Кирюшкин",
        "Андрей Вучков",
        "Андрей Капустин",
        "Владимир Солодников",
        "Михаил Федорук",
        "Артемий Бовкун",
        "Георгий Рогов",
        "Гай Токарев",
        "Сергей Якунин",
        "Даниил Скакун",
        "Дмитрий Бельман",
        "Альфина Авлеева",
        "Анастасия Аникина",
        "Мария Бобровская",
        "Софья Борзенко",
        "Диана Вартанян",
        "Елизавета Ведесова",
        "Мирра Велентеенко",
        "Алиса Вепренцева",
        "Юлия Воронцова",
        "Варвара Говорухина",
        "Ксения Горбунова",
        "Ульяна Гориславская",
        "Анастасия Горшунова",
        "Анастасия Горюнова",
        "Анастасия Даминова",
        "Ева Друженец",
        "Мария Егорова",
        "Софья Жедкович",
        "Анна Журба",
        "Илария Ибряева",
        "Анна Китаева",
        "Елизавета Климова",
        "Елена Козырева",
        "Агата Корнилова",
        "Дарья Кудрявцева",
        "Таисия Кулик",
        "Амира Ладная",
        "Дарья Лаптиева",
        "Майя Ларина",
        "Устинья Лыкова",
        "Анастасия Максимова",
        "Ева Маршак",
        "Анастасия Матвеева",
        "Евгения Мозина",
        "Екатерина Молчанова",
        "Александра Мухина",
        "Станислава Мучкина",
        "София Насырова",
        "Виктория Некрасова",
        "Ольга Пантюшкова",
        "Дарья Пашистова",
        "Арина Перескокова",
        "Анастасия Полупанова",
        "София Попова",
        "Полина Роженцова",
        "Василиса Сабитова",
        "Софья Третьяк",
        "Екатерина Тропина",
        "Эльмира Хайбуллина",
        "Малика Хамидулла",
        "Александра Ходаркевич",
        "Мария Шевякова",
        "Вера Шурыгина"
    ]
};
const fastfood = [
    "French fries",
    "Hamburger",
    "Cheeseburger",
    "Sandwich",
    "Milkshake",
    "Burrito",
    "Taco",
    "Hot dog",
    "Pizza",
    "Fried chicken",
    "Nuggets",
    "Onion rings",
    "Donut",
    "Soda",
    "Pancake",
    "Muffins"
];
const brainrotAnimals = [
    "Lirili Larila",
    "Trallallero Trallalla",
    "Bombardiro Crocodilo",
    "Tung Tung Tung Tung Tung Sahur",
    "Boneca Ambalabu",
    "Brr Brr Patapim",
    "Chimpanzini Bananini",
    "Bombombini Gusini",
    "Cappuccino Assassino",
    "Trippi Troppi",
    "Frigo Camelo",
    "La Vaca Saturno Saturnita",
    "Balleruba Cappucina",
    "U Din Din Din Din Dun Ma Din Din Din Din",
    "Trulimero Trucina",
    "Girafa Celestre",
    "Bobrito Bandito",
    "Ta Ta Ta Ta Ta Ta Ta Sahur",
    "Pot Hotspot",
    "Fulli Frulla"
]

const zuckList = { //! should be changed to real backend @MarkS0kolov
    "1": {
        "avatar": null,
        "name": "8 grade",
        "description": "Comparing every 8 grade student in Letovo",
        "list": people.all
    },
    "2": {
        "avatar": null,
        "name": "8 grade (boys)",
        "description": "Comparing every 8 grade boy in Letovo",
        "list": people.boys
    },
    "3": {
        "avatar": null,
        "name": "8 grade (girls)",
        "description": "Comparing every 8 grade girl in Letovo",
        "list": people.girls
    },
    "4": {
        "avatar": null,
        "name": "Fast-food",
        "description": "Comparing every junky food",
        "list": fastfood
    },
    "5":    {
        "avatar": null,
        "name": "Italian brainrot",
        "description": "Comparing every italian brainrot animals",
        "list": brainrotAnimals
    }
}

const suggestions = document.getElementById("suggestions");
for (let i = 1; Object.keys(zuckList).length >= i; i++) {
    const zuckSuggestion = document.createElement("article");
    zuckSuggestion.setAttribute("class", "zuck-suggestion");
    zuckSuggestion.innerHTML = `
    <img width="150" height="150" class="zuck-avatar"
    src="${zuckList[i].avatar}"
    loading="lazy"
    onerror="this.src='./images/default.jpg'">
    <div class="vertical-flex">
        <h2>${zuckList[i].name}</h2>
        <p class="zuck-description">${zuckList[i].description}</p>
    </div>
    <a href="./choice/index.html?zuck=${i}"><button class="zuck-play zuck-btn">&#9658;</button></a>
    <button class="zuck-other">...</button>`
    suggestions.appendChild(zuckSuggestion)
}

function checkOverflow() {
    const containers = document.querySelectorAll(".zuck-suggestion");
    const avatar = document.querySelectorAll(".zuck-avatar");
    for (let i = 0; containers.length >= i; i++) {
        const isOverflowing = containers[i].scrollHeight> containers[i].clientHeight
        || containers[i].scrollWidth > containers[i].clientWidth;
        
        avatar[i].style.display = isOverflowing ? "none" : "block";
    }
}

window.addEventListener("load", checkOverflow);
window.addEventListener("resize", checkOverflow);