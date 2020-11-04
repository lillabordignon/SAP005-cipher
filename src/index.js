import cipher from './cipher.js';

let elMessage = document.querySelector('#message');
let elOffSet = document.querySelector('#offset');
let result = document.querySelector('#result');

const encode = () => {
    let message = elMessage.value;
    let valOffSet = elOffSet.value;
    let offSet = Number.parseInt(valOffSet);

    let validateMsg = /^[a-zA-Z ]+$/;

    if (!message.match(validateMsg)) {
        alert('Mensagem inválida! Digite apenas texto');
    }else{
        let resultEncode = cipher.encodeOrDecode(offSet, message, 0);
        result.value = resultEncode;
    }

}

const decode = () => {
    let message = elMessage.value;
    let valOffSet = elOffSet.value;
    let offSet = Number.parseInt(valOffSet);
    let resultDecode = cipher.encodeOrDecode(-offSet, message, 25);
    result.value = resultDecode;
}

const reset = () => {
    document.querySelector('#message').value = '';
    document.querySelector('#result').value = '';
    document.querySelector('#offset').value = '';

}

let btnEncode = document.querySelector('#btnEncode');
btnEncode.addEventListener('click', encode);
let btnDecode = document.querySelector('#btnDecode');
btnDecode.addEventListener('click', decode);
let btnReset = document.querySelector('#btnReset');
btnReset.addEventListener('click', reset);