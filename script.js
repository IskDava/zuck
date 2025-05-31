const option1 = document.getElementById('option1'),
option2 = document.getElementById('option2');

const people = {
    "boys" : [
        "Денис Зайцев",
        "Егор Мезенцев",
        "Егор Смирнов",
        "Никита Сапончик",
        "Никита Горшков",
        "Никита Федин",
        "Павел Оболенский",
        "Антон Никифоров",
        "Филип Крестинин",
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
        "Ярослав Кузьмин",
        "Матвей Ястребов",
        "Петр Бородин",
        "Добрыня Мухоморов",
        "Константин Потапов",
        "Роман Рутковский",
        "Роман Югай",
        "Иван Дворников",
        "Иван Козлов",
        "Тимур Файзулин",
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
    "girls" : [
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
        "Майа Ларина",
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
        "Полина Реженцова",
        "Василиса Сабитова",
        "Анастасия Сухенко",
        "Элиза Терещенко",
        "Софья Третьяк",
        "Екатерина Тропина",
        "Эльмира Хайбулина",
        "Малика Хамидулла",
        "Александра Ходаркевич",
        "Мария Шевякова",
        "Вера Шурыгина"
    ]
}
let count = 0

function win(winner) {
    if (!winner.classList.contains("winner")) {
    const win = document.createElement("p")
    win.innerText = "Winner!"
    win.classList.add("winner-title")
    winner.append(win)
    winner.classList.add("winner")
    }
    if (! document.querySelector(".next-versus")) {
        const btn = document.createElement("button")
        btn.innerText = "Next versus"
        btn.classList.add("next-versus")
        const main = document.getElementById("main-container")
        main.appendChild(btn)
        btn.addEventListener("click", () => {
            const winner = document.querySelector(".winner")
            if (winner && count < people.boys.length) {
                const captions = document.querySelectorAll("figcaption.caption")
                for (let caption of captions) {
                    caption.innerText = people.boys[count]
                    count++
                }
                loose(option2)
                loose(option1)
            }
            else if (count >= people.boys.length){
                const choice = document.getElementById("choice")
                main.removeChild(choice)
                main.removeChild(btn)
                const end = document.createElement("p")
                end.innerText = "That's the End"
                end.classList.add("end-text")
                main.appendChild(end)
            }
        })
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
    loose(option2)
})
option2.addEventListener("click", () => {
    win(option2)
    loose(option1)
})