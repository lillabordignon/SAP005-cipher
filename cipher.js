const encodeOrDecode = (offset, message, num) => {
    let alphabet = 26; 
    let firstLetterUpperCase = 65;
    let lastLetterUpperCase = 90;
    let firstLetterLowerCase = 97;
    let lastLetterLowerCase = 122;
    let result = '';
    let convertString;
    let elSpace = 32;
    let displacement;

    for (let i = 0; i < message.length; i++){

        let asciiNum = message.charCodeAt(i);

        if (asciiNum === elSpace) {
            convertString = String.fromCharCode(elSpace);
            result += convertString;
        }else{

            if (asciiNum >= firstLetterUpperCase && asciiNum <= lastLetterUpperCase) {    
                displacement = ((asciiNum - (firstLetterUpperCase + num) + offset) % alphabet) + firstLetterUpperCase + num;
                convertString = String.fromCharCode(displacement);
                result += convertString;
    
            } else if(asciiNum >= firstLetterLowerCase && asciiNum <= lastLetterLowerCase){
                displacement = ((asciiNum - (firstLetterLowerCase + num) + offset) % alphabet) + firstLetterLowerCase + num;
                convertString = String.fromCharCode(displacement);
                result += convertString;
            }

        }

    }
    return result;
}

const cipher = {encodeOrDecode};

export default cipher;
