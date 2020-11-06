const encodeAndDecode = (offset, message, lenghtAlphabet) => {
    const alphabet = 26; 
    const firstLetterUpperCase = 65;
    const lastLetterUpperCase = 90;
    const firstLetterLowerCase = 97;
    const lastLetterLowerCase = 122;
    let result = '';
    let convertString;
    let displacement;

    if (typeof message !== "string") {
        throw new TypeError("Invalid message");
    }

        if (offset === null){
            throw new Error('Digite apenas números');
        }

        for (let i = 0; i < message.length; i++){

            let asciiNum = message.charCodeAt(i);

                if (asciiNum >= firstLetterUpperCase && asciiNum <= lastLetterUpperCase) {    
                    displacement = ((asciiNum - (firstLetterUpperCase + lenghtAlphabet) + offset) % alphabet) + firstLetterUpperCase + lenghtAlphabet;
                    convertString = String.fromCharCode(displacement);
                    result += convertString;

        
                } else if(asciiNum >= firstLetterLowerCase && asciiNum <= lastLetterLowerCase){
                    displacement = ((asciiNum - (firstLetterLowerCase + lenghtAlphabet) + offset) % alphabet) + firstLetterLowerCase + lenghtAlphabet;
                    convertString = String.fromCharCode(displacement);
                    result += convertString;

                }else{
                   convertString = String.fromCharCode(asciiNum);
                   result += convertString;
                }

        }
    return result;
}
    const cipher = {
        encode: function (offset, message){
            return encodeAndDecode (offset, message, 0)
        },
        decode: function(offset, message){
            return encodeAndDecode (-offset, message, 25)
        }
    };

export default cipher;

// const encodeAndDecode = (offset, message, lenghtAlphabet) => {
//     const alphabet = 26; 
//     const firstLetterUpperCase = 65;
//     const lastLetterUpperCase = 90;
//     const firstLetterLowerCase = 97;
//     const lastLetterLowerCase = 122;
//     const elementSpace = 32;
//     const validateMsg = /^[a-zA-Z ]+$/;
//     let result = '';
//     let convertString;
//     let displacement;

//     if (typeof message !== "string") {
//         throw new TypeError("must be a string!");}

//     if(!message.match(validateMsg)){
//         throw new Error('Mensagem inválida! Digite apenas texto');
//     }

//         if (offset === null){
//             throw new Error('Digite apenas números');
//         }

//         for (let i = 0; i < message.length; i++){

//             let asciiNum = message.charCodeAt(i);

//             if (asciiNum === elementSpace) {
//                 convertString = String.fromCharCode(elementSpace);
//                 result += convertString;
//             }else{

//                 if (asciiNum >= firstLetterUpperCase && asciiNum <= lastLetterUpperCase) {    
//                     displacement = ((asciiNum - (firstLetterUpperCase + lenghtAlphabet) + offset) % alphabet) + firstLetterUpperCase + lenghtAlphabet;
//                     convertString = String.fromCharCode(displacement);
//                     result += convertString;
        
//                 } else if(asciiNum >= firstLetterLowerCase && asciiNum <= lastLetterLowerCase){
//                     displacement = ((asciiNum - (firstLetterLowerCase + lenghtAlphabet) + offset) % alphabet) + firstLetterLowerCase + lenghtAlphabet;
//                     convertString = String.fromCharCode(displacement);
//                     result += convertString;
//                 }

//             }

//         }
//         return result;
//     }

//     const cipher = {
//         encode: function (offset, message){
//             return encodeAndDecode (offset, message, 0)
//         },
//         decode: function(offset, message){
//             return encodeAndDecode (-offset, message, 25)
//         }
//     };

// export default cipher;

