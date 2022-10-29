
let characterLengthValue = document.getElementById('demo');
let characterLength = document.getElementById('myRange')
let resultButton = document.getElementById('button');
let result = document.getElementById('result')
let upperCaseOption = document.getElementById('uppercase');
let lowerCaseOption = document.getElementById('lowercase');
let numbersOption = document.getElementById('numbers');
let symbolsOption = document.getElementById('symbols');
let copyImage = document.getElementById('copy-image')


upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
lowerCase =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
numbers = ['0', '1', '2' ,'3', '4' , '5', '6', '7', '8' , '9']
symbols = ["!", "@" , "#" , "$" , "%" , "^" , "&" , "*"]

function showVal(newVal){
    characterLengthValue.innerHTML = newVal;
}

function random(e){
    return Math.floor(Math.random() * e.length);
}



function updateResult () {
    let store = ''
    let array = []
    let result = []

    //  ONE IS CHECKED //
    if (upperCaseOption.checked) {
        array = [...upperCase ]
    }
    if (lowerCaseOption.checked) {
        array = [...lowerCase ]
    }
    if (symbolsOption.checked) {
        array = [...symbols ]
    }
    if (numbersOption.checked) {
        array = [ ...numbers ]
    }
    // TWO CHECKED //
    if (upperCaseOption.checked && lowerCaseOption.checked) {
        array = [ ...upperCase , ...lowerCase ]
    }
    if (upperCaseOption.checked && numbersOption.checked) {
        array = [ ...upperCase , ...numbers ]
    }
    if (upperCaseOption.checked && symbolsOption.checked) {
        array = [ ...upperCase , ...symbols ]
    }
    if (lowerCaseOption.checked && numbersOption.checked) {
        array = [ ...lowerCase , ...numbers ]
    }
    if (lowerCaseOption.checked && symbolsOption.checked) {
        array = [ ...lowerCase , ...symbols ]
    }
    if (numbersOption.checked && symbolsOption.checked) {
        array = [ ...numbers , ...symbols ]
    }
    // THREE CHECKED //

    if (upperCaseOption.checked && lowerCaseOption.checked && numbersOption.checked) {
        array = [ ...upperCase , ...lowerCase, ...numbers ]
    }
    if (upperCaseOption.checked && symbolsOption.checked && numbersOption.checked) {
        array = [ ...upperCase , ...symbols, ...numbers ]
    }
    if (upperCaseOption.checked && symbolsOption.checked && lowerCaseOption.checked) {
        array = [ ...upperCase , ...symbols, ...lowerCase ]
    }
    if (lowerCaseOption.checked && numbersOption.checked && symbolsOption.checked) {
        array = [ ...lowerCase , ...numbers, ...symbols ]
    }
    // ALL 4 CHECKED //
    if (upperCaseOption.checked && lowerCaseOption.checked && symbolsOption.checked && numbersOption.checked) {
        array = [ ...upperCase , ...lowerCase, ...symbols , ...numbers ]
    }

    if (!upperCaseOption.checked && !lowerCaseOption.checked && !symbolsOption.checked && !numbersOption.checked) {
        alert('Please include at least one of the options below')
    }

    for (let i = 0 ; i < myRange.value ; i++) {
        
        store = [array[random(array)]];
        result.push(store)
        
    }
    
    return result.join('');
}


function copyText() {
    
    let text = result.innerText 
    let textArea = document.createElement('textarea')
    textArea.width = '1px';
    textArea.height = '1px';
    textArea.background = 'transparent'
    textArea.value = text;
    document.body.append(textArea);
    textArea.select();
    document.execCommand('copy');   
    document.body.removeChild(textArea);
    
  } 



resultButton.addEventListener('click', () => {
    
    result.innerHTML = updateResult();
})

copyImage.addEventListener('click' , () => {
    copyText();
    document.querySelector('#copy-image p').classList.remove('animation');
    void document.querySelector('#copy-image p').offsetWidth;
    document.querySelector('#copy-image p').classList.add('animation');
    
})