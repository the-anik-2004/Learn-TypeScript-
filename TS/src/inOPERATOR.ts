interface User{
    username:string;
    email:string;
}
interface Admin{
    username:string;
    email:string;
    adminKey:number;
}

const dbAcess=(account:Admin|User):boolean=>{
    if("adminKey" in account){
        return true;
    }
    return false;
}

//-------------------------------
type  Fish={swim:()=>void}
type  Bird={fly:()=>void}

function isFish(animal:Fish | Bird):animal is Fish{
    return (animal as Fish).swim!==undefined;
}

function getFood (animal:Fish|Bird){
    if(isFish(animal)){
        animal;
        return "fish Food"
    }
    else{
        animal;
        return "bird Food"
    }
}