function lowerCaseWords(input){
    return new Promise((resolve, reject) =>{
        if (!Array.isArray(input)){
            reject(new Error("input must be an array"));
            
        }else {
            const words = input.filter((item) => typeof item === "string").map((word) => word.toLowerCase());
            resolve(words);
        }
        
        
    });
}

const mixedArray = ['PIZZA',10,true,25,false,'Wings']

lowerCaseWords(mixedArray).then((result) => {
    console.log(result);
}).catch((error) =>{
    console.log(error.message);
})

