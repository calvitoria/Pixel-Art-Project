// requisito 5 - jeito 1
// function createPixelBoard() {

//     let container = document.querySelector('#pixel-board');
//     container.style.width = '210px'
//     container.style.height = '210px'
//     container.style.display = 'inline-block'

//     for (let y = 0; y < 25; y += 1) {

//         //cria
//         let square = document.createElement('div');

//         //customiza
//         square.className = 'pixel';

//         container.appendChild(square);
//     }
// }

// createPixelBoard();

// requisito 5 - jeito 2
function createPixelBoard() {

    let container = document.querySelector('#pixel-board');

    //cria row
    for (let x = 0; x < 5; x += 1) {

        //criação
        let row = document.createElement('div');
        container.appendChild(row);

        //customização
        row.className = 'row';

        // container.appendChild(row);
        //cria os quadradinhos dentro da row
        for (let y = 0; y < 5; y += 1) {

            //cria
            let square = document.createElement('div');

            //customiza
            square.className = 'pixel';

            //coloca no row
            row.appendChild(square);
        }

    }
}

createPixelBoard();

// requisito 6
let corPreta = document.querySelectorAll('.color')[0];
corPreta.classList.add('selected');

// requisito 7 

// quando é para acontecer 
function getClick() {
    //coloca o listener em todos
    let otherColors = document.querySelectorAll('.color');
    for (let i = 0; i < otherColors.length; i += 1) {
        otherColors[i].addEventListener('click', getSelected);// getSelected é o que é para acontecer quando a opção for CLICK
    }
}

// o que é para acontecer acontecer 
function getSelected(event) {
    let clickedColor = event.target;
    let wasSelected = document.querySelectorAll('.selected')[0];
    wasSelected.className = 'color'; // pois é o 'padrao'
    clickedColor.classList.add('selected');
}

getClick();

// requisito 8 (pintar pixels)

function colorizeSquares() {
    let squares = document.getElementsByClassName('pixel');
    for (i = 0; i < squares.length; i += 1) {
        squares[i].addEventListener('click', function (event) {

            let clickedColor = document.querySelector('.selected');
            let cssObj = window.getComputedStyle(clickedColor, null);
            let newColor = cssObj.getPropertyValue('background-Color');
            console.log(clickedColor);
            event.target.style.backgroundColor = newColor;
        });
    }

}

colorizeSquares();

// requisito 9 

function createBtn() {

    // onde? 
    let btnPlacer = document.querySelector('.btn-container');

    //criar botão 
    let clearBtn = document.createElement('button');

    //custumiza botão
    clearBtn.id = 'clear-board';
    clearBtn.innerText = 'Limpar';

    //adiciona no html
    btnPlacer.appendChild(clearBtn);
}

createBtn();

function clearBtn() {

    let btn = document.querySelector('#clear-board');

    btn.addEventListener('click', function () {
        let squares = document.getElementsByClassName('pixel');

        // document.location.reload(); // pesquisa sobre reload pages using JS: https://www.quackit.com/javascript/javascript_refresh_page.cfm#:~:text=In%20JavaScript%2C%20you%20refresh%20the,server%20(instead%20of%20cache).
        for (let i = 0; i < squares.length; i += 1) {
            if (squares[i].style.backgroundColor !== 'white') {
                squares[i].style.backgroundColor = 'white';
            }
        }
    });
}

// não está passando no requisito 9 - pintar todos de branco

clearBtn();

// requisito 10

//cria botão e input 
function createsBtnAndInput() {

    //onde? 
    let container = document.querySelector('.btn-container');

    //criar elemento
    let input = document.createElement('input');
    let button = document.createElement('button');

    //customizar
    input.id = 'board-size';
    button.id = 'generate-board';

    input.type = 'text';
    input.min = '0';
    input.max = '50';

    input.placeholder = 'adicione valores entre 5 e 50'
    button.innerText = 'VQV';

    container.appendChild(input);
    container.appendChild(button);

}

createsBtnAndInput();

let input = document.querySelector('#board-size');
let button = document.querySelector('#generate-board');
let valueOfInput = input.value;

// função para criar o board
function createPixelBoardInput(valueOfInput) {

    let container = document.querySelector('#pixel-board');

    //cria row
    for (let x = 0; x < valueOfInput; x += 1) {

        //criação
        let row = document.createElement('div');
        container.appendChild(row);

        //customização
        row.className = 'row';

        // container.appendChild(row);
        //cria os quadradinhos dentro da row
        for (let y = 0; y < valueOfInput; y += 1) {

            //cria
            let square = document.createElement('div');

            //customiza
            square.className = 'pixel';

            //coloca no row
            row.appendChild(square);
        }

    }
}

//validar infos input 
function isInputValid() {
    let input = document.querySelector('#board-size');
    let button = document.querySelector('#generate-board');

    if (input.value === null) {
        alert('Board inválido!')
    } else if (input.value >= 5 && input.value <= 50) {
        createPixelBoardInput(input.value);
    }

}

isInputValid();


