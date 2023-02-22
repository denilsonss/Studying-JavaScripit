const prompt = require('prompt-sync')();
do{
    console.log('Usuário');
let user = prompt();

console.log('Senha');
let password = prompt();

if(user.toLowerCase() === password.toLowerCase()){
    console.log('Usuário e senha não podem ser iguais');
}else{
    console.log('Sucesso');
    break;
}
}while(true)


