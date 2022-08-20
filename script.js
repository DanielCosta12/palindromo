
verificarPalindromo = (string) =>{
    if(!string) return "String inexistente";

    return string.split("").reverse().join("") === string;
   
}

verificarPalindromo2 = (string) =>{
    if (!string) return "String inexistente";
    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length -1 - i]){
            return false;
        }
    }
    return true;
}

console.log(verificarPalindromo("abba"));
console.log(verificarPalindromo2("ama"));