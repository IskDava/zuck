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
    "Ballerina Cappucina",
    "U Din Din Din Din Dun Ma Din Din Din Din",
    "Girafa Celestre",
    "Bobrito Bandito",
    "Ta Ta Ta Ta Ta Ta Ta Sahur",
    "Fulli Frulla"
]

const zuckList = { //todo: should be changed to real backend
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

const params = new URLSearchParams(window.location.search);
const id = params.get("zuck");
const zuck = zuckList[id];
if (zuck != undefined) {
    window.zuckArray = zuck.list
}
else {
    alert("unknown zuck-id")
    window.location.href = "../index.html"
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array
}
window.zuckArray = shuffle(window.zuckArray);

const captions = document.querySelectorAll("figcaption.caption")
const image1 = option1.querySelector(".option")
image1.setAttribute("src", "../images/" + window.zuckArray[count].replace(" ", "_").toLowerCase() + ".webp")
captions[0].innerText = window.zuckArray[count++]
const image2 = option2.querySelector(".option")
image2.setAttribute("src", "../images/" + window.zuckArray[count].replace(" ", "_").toLowerCase() + ".webp")
captions[1].innerText = window.zuckArray[count++]



function win(winner) {
    document.querySelectorAll(".winner").forEach(el => el.classList.remove("winner"))
    winner.classList.add('winner')
    const potentialBtn = document.querySelector(".next-versus")
    if (potentialBtn) {
        potentialBtn.remove()
    }
    const btn = document.createElement("button")
    btn.innerText = "Next versus"
    btn.classList.add("next-versus")
    const main = document.getElementById("main-container")
    main.appendChild(btn)

    btn.addEventListener("click", () => {
        option1.classList.remove("highlighted")
        option2.classList.remove("highlighted")
        const winner = document.querySelector(".winner")
        if (winner) {
            nextRound.push(winner.querySelector("figcaption.caption").innerText)
        }

        loose(option1)
        loose(option2)
        btn.remove()

        const captions = document.querySelectorAll("figcaption.caption")
        console.log(nextRound)
        if (count < window.zuckArray.length - 1) {
            image1.setAttribute("src", "../images/" + window.zuckArray[count].replace(" ", "_").toLowerCase() + ".webp")
            captions[0].innerText = window.zuckArray[count++]
            image2.setAttribute("src", "../images/" + window.zuckArray[count].replace(" ", "_").toLowerCase() + ".webp")
            captions[1].innerText = window.zuckArray[count++]
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
            image1.setAttribute("src", "../images/" + window.zuckArray[count].replace(" ", "_").toLowerCase() + ".webp")
            captions[0].innerText = window.zuckArray[count++]
            image2.setAttribute("src", "../images/" + window.zuckArray[count].replace(" ", "_").toLowerCase() + ".webp")
            captions[1].innerText = window.zuckArray[count++]
        } else {
            image2.setAttribute("src", "../images/" + nextRound[0].replace(" ", "_") + ".webp")
            captions[0].innerText = nextRound[0]
            captions[1].innerText = ""
            alert("Турнир выиграл " + nextRound[0])
            option1.remove()
            option2.remove()
            window.location.href = "https://iskdava.github.io/zuck"
        }
    })
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