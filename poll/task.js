let pollTitle = document.getElementById("poll__title");
let pollAnswers = document.getElementById("poll__answers");

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.responseType = "json";
xhr.send();

console.log(xhr);

xhr.onreadystatechange = function () {
    if(xhr.readyState === 4) {
        pollTitle.innerText = xhr.response.data.title;

        let answers = xhr.response.data.answers;

        for (let answer of answers) {
            pollAnswers.insertAdjacentHTML("afterBegin", `<button class="poll__answer">${answer}</button>`)
        }

        let buttons = document.getElementsByClassName("poll__answer");

        for (let btn of buttons) {
            btn.addEventListener('click', () => alert('Спасибо, ваш голос засчитан!'))
        }
    }
}