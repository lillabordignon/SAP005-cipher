const encode = (offset, message) => {
    let alphabet = 26; 
    let firstLetter = 65;
    let result = '';
    let convertResult;

    for (let i = 0; i < message.length; i++){
        let asciiNum = message.charCodeAt(i);
        let displacement = (asciiNum - firstLetter + offset) % alphabet + firstLetter;
        let convertString = String.fromCharCode(displacement);
        result += convertString;
    }
    return result;
}

const decode = () => {
    ;
}

const cipher = {encode, decode};

export default cipher;
