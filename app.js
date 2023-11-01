let result = document.getElementById('result')
let currentChar; let previousChar;
let displayResult = false;
let operator = ['+', '-', '*', '/', '.']

////// RESET FUNCTION
function reset() {
    result.textContent = '';
}
////// delete FUNCTION 
function del() {
    let x = result.textContent;
    let newX = x.substring(0, x.length - 1)
    result.textContent = newX
}


///// MATH FUNCTION 
let estCalculer = false;
function calculate() {
    result.innerText = eval(result.textContent)
    estCalculer = true;
}


////// DISPLAY FUNCTION
function affichage(nb) {
    result.textContent += nb;
    numChar = result.innerText.length;
    currentChar = nb;
    getPreviousChar();
    if ((estCalculer = true) && operator.includes(currentChar) !== true) {
        document.getElementById(`${nb}`).setAttribute('disabled', 'false')
    }
}
function getPreviousChar() {
    previousChar = result.innerText.substring(numChar - 1, numChar)
    checkSyntax();
}

function checkSyntax() {
    if ((previousChar == currentChar && operator.includes(currentChar))) {
        document.getElementById('div').setAttribute('disabled', 'false')
        document.getElementById('multi').setAttribute('disabled', 'false')
        document.getElementById('moin').setAttribute('disabled', 'false')
        document.getElementById('plus').setAttribute('disabled', 'false')
        document.getElementById('point').setAttribute('disabled', 'false')

    } else {
        document.getElementById('div').removeAttribute('disabled')
        document.getElementById('multi').removeAttribute('disabled')
        document.getElementById('moin').removeAttribute('disabled')
        document.getElementById('plus').removeAttribute('disabled')
        document.getElementById('point').removeAttribute('disabled')
    }
}



////// THEME 
let x = document.querySelectorAll('.inputBtn')
let theme11 = true;
let theme22 = false;
let theme33 = false;
function theme1() {
    theme11 = true;
    theme22 = false;
    theme33 = false;
    if (theme11 === true) {
        document.querySelector('body').style.background = 'hsl(222, 26%, 31%)'
        document.querySelector('#container2').style.background = 'hsl(224, 36%, 15%)'
        document.querySelector('#container3').style.background = 'hsl(223, 31%, 20%)'
        document.getElementById('container1').style.color = 'hsl(0, 0%, 100%)'
        document.getElementById('container2').style.color = 'hsl(0, 0%, 100%)'
        document.getElementById('theme1').style.backgroundColor = 'hsl(6, 63%, 50%)'
        document.getElementById('theme2').style.backgroundColor = 'hsl(223, 36%, 15%)'
        document.getElementById('theme3').style.backgroundColor = 'hsl(223, 36%, 15%)'
        document.querySelector('.radioBtn').style.background = 'hsl(223, 36%, 15%)'
        for (let i = 0; i < x.length; i++) {
            x.item(i).style.backgroundColor = 'hsl(30, 25%, 89%)'
            x.item(i).style.color = 'hsl(221, 14%, 31%)'
            x.item(i).style.boxShadow = '0px 4.5px 0px hsl(28, 16%, 65%)'
        }
    }
    document.getElementById('delete').style.backgroundColor = 'hsl(225, 21%, 49%)'
    document.getElementById('reset').style.backgroundColor = 'hsl(225, 21%, 49%)'
    document.getElementById('delete').style.boxShadow = '0px 4.5px 0px hsl(224, 28%, 35%)'
    document.getElementById('reset').style.boxShadow = '0px 4.5px 0px hsl(224, 28%, 35%)'
    document.getElementById('egal').style.backgroundColor = ' hsl(6, 63%, 50%)'
    document.getElementById('egal').style.boxShadow = '0px 4.5px 0px hsl(6, 70%, 34%)'
    document.getElementById('egal').style.color = 'hsl(0, 0%, 100%)'
    document.getElementById('reset').style.color = 'hsl(0, 0%, 100%)'
    document.getElementById('delete').style.color = 'hsl(0, 0%, 100%)'
}

function theme2() {
    theme11 = false;
    theme22 = true;
    theme33 = false;
    if (theme22 === true) {
        document.querySelector('body').style.background = 'hsl(0, 0%, 90%)'
        document.querySelector('#container2').style.background = 'rgba(0, 0,0, 0.150)'
        document.querySelector('#container3').style.background = 'hsl(0, 5%, 81%)'
        document.getElementById('theme2').style.backgroundColor = 'hsl(6, 63%, 50%)'
        document.getElementById('container1').style.color = 'hsl(60, 10%, 19%)'
        document.getElementById('container2').style.color = 'hsl(60, 10%, 19%)'
        document.getElementById('theme1').style.backgroundColor = 'hsl(0, 5%, 81%)'
        document.getElementById('theme3').style.backgroundColor = 'hsl(0, 5%, 81%)'
        document.querySelector('.radioBtn').style.background = 'hsl(0, 5%, 81%)'
    }
    for (let i = 0; i < x.length; i++) {
        x.item(i).style.color = 'hsl(52, 10%, 62%)'
        x.item(i).style.backgroundColor = 'hsl(28, 47%, 21%)'
        x.item(i).style.boxShadow = '0px 4.5px 0px hsl(90, 70%, 36%)'
    }
}

function theme3() {
    theme11 = false;
    theme22 = false;
    theme33 = true;
    if (theme33 === true && theme11 === false &&
        theme22 === false) {
        document.querySelector('body').style.background = 'hsl(268, 75%, 9%)'
        document.querySelector('#container2 ').style.background = 'hsl(268, 71%, 12%)'
        document.querySelector('#container3').style.background = 'hsl(268, 71%, 12%)'
        document.getElementById('container1').style.color = 'hsl(52, 100%, 62%)'
        document.getElementById('container2').style.color = 'hsl(52, 100%, 62%)'
        document.getElementById('theme3').style.backgroundColor = 'hsl(176, 100%, 44%)'
        document.getElementById('theme1').style.backgroundColor = 'hsl(268, 71%, 12%)'
        document.getElementById('theme2').style.backgroundColor = 'hsl(268, 71%, 12%)'
        document.querySelector('.radioBtn').style.background = 'hsl(268, 71%, 12%)'

        for (let i = 0; i < x.length; i++) {
            x.item(i).style.color = 'hsl(52, 100%, 62%)'
            x.item(i).style.backgroundColor = 'hsl(268, 47%, 21%)'
            x.item(i).style.boxShadow = '0px 4.5px 0px hsl(290, 70%, 36%)'
        }
        document.getElementById('delete').style.backgroundColor = 'hsl(281, 89%, 26%)'
        document.getElementById('reset').style.backgroundColor = 'hsl(281, 89%, 26%)'
        document.getElementById('delete').style.boxShadow = '0px 4.5px 0px hsl(285, 91%, 52%)'
        document.getElementById('reset').style.boxShadow = '0px 4.5px 0px hsl(285, 91%, 52%)'
        document.getElementById('egal').style.backgroundColor = ' hsl(176, 100%, 44%)'
        document.getElementById('egal').style.boxShadow = '0px 4.5px 0px hsl(176, 100%, 44%)'
        document.getElementById('egal').style.color = 'black'
        document.getElementById('reset').style.color = 'white'
        document.getElementById('delete').style.color = 'white'
    }

}