function addTwo(num:number):number{
    return num+2;
}
console.log(addTwo(12));

function signUpUser(username:string,email:string,isLoggedIn:boolean){
    console.log(`username : ${username}\n`)
    console.log(`email : ${email}\n`)
    console.log(`isLoggedIn : ${isLoggedIn}\n`)
}
signUpUser("anikpal_","anik@ap.com",false)

function loggingInUser(username:string,email:string,isPaid:boolean=true){
    console.log(`username : ${username}\n`)
    console.log(`email : ${email}\n`)
    console.log(`isLoggedIn : ${isPaid}\n`)
}
loggingInUser("anikpal_","anik@ap.com");




