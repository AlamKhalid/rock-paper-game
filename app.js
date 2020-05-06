var user_score = 0;
var comp_score = 0;
const user_score_label = document.getElementById('user-score');
const comp_score_label = document.getElementById('computer-score');
const scoreboard = document.getElementById('score-id');
const result = document.querySelector('.result > p')
const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissors = document.getElementById('s');

function get_comp_choice() {
    const choices = ['r', 'p', 's'];
    return choices[Math.floor(Math.random() * 3)];
}

function convert_to_word(letter) {
    switch(letter) {
        case 'r':
            return 'Rock';
        case 's':
            return 'Scissors';
        case 'p':
            return 'Paper';
    }
}

function win(user, comp) {
    user_score++;
    user_score_label.innerHTML = user_score;
    result.innerHTML = convert_to_word(user) + "user".fontsize(3).sub() + " beats " + convert_to_word(comp) + "comp".fontsize(3).sub() + ". You win!";
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function() {document.getElementById(user).classList.remove('green-glow');}, 300);
}

function lose(user, comp) {
    comp_score++;
    comp_score_label.innerHTML = comp_score;
    result.innerHTML = convert_to_word(user) + "user".fontsize(3).sub() + " loses to " + convert_to_word(comp) + "comp".fontsize(3).sub() + ". You lost!";
    document.getElementById(user).classList.add('red-glow');
    setTimeout(function() {document.getElementById(user).classList.remove('red-glow');}, 300);
}

function draw(user, comp) {
    result.innerHTML = convert_to_word(user) + "user".fontsize(3).sub() + " draw " + convert_to_word(comp) + "comp".fontsize(3).sub();
    document.getElementById(user).classList.add('gray-glow');
    setTimeout(function() {document.getElementById(user).classList.remove('gray-glow');}, 300);
}

function game(user_choice) {
    const computer_choice = get_comp_choice();
    
    switch(user_choice + computer_choice) {
        case 'rs':
        case 'sp':
        case 'pr':
            win(user_choice, computer_choice);
            break;
        case 'sr':
        case 'ps':
        case 'rp':
            lose(user_choice, computer_choice);
            break;
        default:
            draw(user_choice, computer_choice);
    }
}

function main() {

    rock.addEventListener('click', function() {
        game('r');
    });

    paper.addEventListener('click', function() {
        game('p');
    });

    scissors.addEventListener('click', function() {
        game('s');
    });
}

main();