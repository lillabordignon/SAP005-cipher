import cipher from './cipher.js';


let elMessage = document.querySelector('.container_textarea');
let elOffSet = document.querySelector('.container_input');

const encode = () => {
    let message = elMessage.value;
    let valOffSet = elOffSet.value;
    let offSet = Number.parseInt(valOffSet);
    let resultEncode = cipher.encode(offSet, message);
        elMessage.value = resultEncode;

}

const decode = () => {
    let message = elMessage.value;
    let valOffSet = elOffSet.value;
    let offSet = Number.parseInt(valOffSet);
    let resultDecode = cipher.decode(offSet, message);
    elMessage.value = resultDecode;
}

const reset = () => {
    document.querySelector('.container_textarea').value = '';
    document.querySelector('.container_input').value = '';

}

let btnEncode = document.querySelector('#btnEncode');
btnEncode.addEventListener('click', encode);
let btnDecode = document.querySelector('#btnDecode');
btnDecode.addEventListener('click', decode);
let btnReset = document.querySelector('#btnReset');
btnReset.addEventListener('click', reset);