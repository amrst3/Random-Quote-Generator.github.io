var quots = [];
quots.push("“Be yourself; everyone else is already taken.” ― Oscar Wilde");
quots.push("“So many books, so little time.” ― Frank Zappa");
quots.push("“You only live once, but if you do it right, once is enough.” ― Mae West");
quots.push("“Be the change that you wish to see in the world.” ― Mahatma Gandhi");
quots.push("“In three words I can sum up everything I've learned about life: it goes on.” ― Robert Frost");
quots.push("“If you tell the truth, you don't have to remember anything.” ― Mark Twain");
quots.push("“Without music, life would be a mistake.” ― Friedrich Nietzsche");
quots.push("“We accept the love we think we deserve.” ― Stephen Chbosky");
quots.push("“Always forgive your enemies; nothing annoys them so much.” ― Oscar Wilde");


btn.onclick = function () {
    printQuot();
}


function randomNum() {
    var ran = Math.floor(Math.random()*quots.length);
    do {
        ran = Math.floor(Math.random() * quots.length);
    } while (ran == randomNum.previousRandomNumber);
    return ran;
}

function printQuot() {
    document.getElementById("demo").innerHTML = quots[randomNum()];
}