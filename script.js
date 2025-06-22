const plus = document.getElementById('plus-sign')
plus.addEventListener('mouseover', () => {
    plus.setAttribute("src", "plus_yellow.png")
})
plus.addEventListener('mouseout', () => {
    plus.setAttribute("src", "plus_white.png")
})
const profile = document.getElementById('profile-sign')
profile.addEventListener('mouseover', () => {
    profile.setAttribute("src", "profile_yellow.png")
})
profile.addEventListener('mouseout', () => {
    profile.setAttribute("src", "profile_white.png")
})
const home = document.getElementById('home-sign')
home.addEventListener('mouseover', () => {
    home.setAttribute("src", "home_yellow.png")
})
home.addEventListener('mouseout', () => {
    home.setAttribute("src", "home_white.png")
})


let count = 0;
let nextRound = [];
let round = 1;

const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");

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

const captions = document.querySelectorAll("figcaption.caption");
captions[0].innerText = people.boys[count++];
captions[1].innerText = people.boys[count++];

function win(winner) {
    if (!winner.classList.contains("winner")) {
        winner.classList.add("winner");
    }
    
    if (!document.querySelector(".next-versus")) {
        const btn = document.createElement("button");
        btn.innerText = "Next versus";
        btn.classList.add("next-versus");
        const main = document.getElementById("main-container");
        main.appendChild(btn);

        btn.addEventListener("click", () => {
            option1.classList.remove("highlighted")
            option2.classList.remove("highlighted")
            const winner = document.querySelector(".winner");
            if (winner) {
                nextRound.push(winner.querySelector("figcaption.caption").innerText);
            }

            loose(option1);
            loose(option2);
            btn.remove();

            const captions = document.querySelectorAll("figcaption.caption");
            console.log(nextRound)
            if (count + 1 < people.boys.length) {
                captions[0].innerText = people.boys[count++];
                captions[1].innerText = people.boys[count++];
            } else if (nextRound.length > 1) {
                people.boys = nextRound;
                if (nextRound.length % 2 == 1){
                    nextRound = [nextRound[nextRound.length - 1]]
                }
                else {
                    nextRound = [];
                }
                count = 0;
                round++;
                captions[0].innerText = people.boys[count++];
                captions[1].innerText = people.boys[count++];
            } else {
                captions[0].innerText = nextRound[0];
                captions[1].innerText = "";
                alert("Турнир выиграл " + nextRound[0]);
            }
        });
    }
}

function loose(looser) {
    const title = looser.querySelector(".winner-title");
    if (title) {
        looser.removeChild(title);
        looser.classList.remove("winner");
    }
}

option1.addEventListener("click", () => {
    win(option1);
    option1.classList.add("highlighted")
    loose(option2);
    option2.classList.remove("highlighted")
});

option2.addEventListener("click", () => {
    win(option2);
    option2.classList.add("highlighted")
    loose(option1);
    option1.classList.remove("highlighted")
});