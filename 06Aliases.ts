type word=string;//converting the String into "word"...for no reason😁😁

type User={
    name :word;
    email:word;
    isActive:boolean;
    mobile:number;
}
//-----Method approach 1-----
// const validateUser=(user:User):boolean=>{
//     if(user.name.length>=2 && user.isActive)
//         return true;
//     return false;
// }


//-----Method approach 2-----

//Method typification
type validateUserMethod =(user:User)=>boolean;

//Method declartion
const validateUser:validateUserMethod=(user:User)=>{ 
    if(user.name.length>=2 && user.isActive)
        return true;
    return false;
}

let newUser
    ={
    name:"Anik",
    email:"anik@ap.com",
    mobile:1234567890,
    isActive:true,
    readme:false,
    address:"Madrid"
}

console.log(validateUser(newUser)+"\n USER:\n",newUser)


export{}