type User={
    readonly _id:string;
    name :string;
    email:string;
    isActive:boolean;
    mobile?:number;
    creditCard?:cardDetails
}
//-----------------------------------------
type cardNumber={
    cardnumber:number,
    bankname:String,
}

type cardDate={
    month:string,
    year:string,
    expiryDate?:string,
}

//add both types and adding another
type cardDetails= cardNumber & cardDate & {
    cvv:number
}

let newUser:User={
    _id:"db_user_001",
    name:"Anik",
    email:"ap@gmail.com",
    isActive:false
}

console.log("User Before Updation-\n",newUser);
newUser.email="anik@gmail.com";
// newUser._id="db_user_55";
newUser.creditCard={
    cardnumber:123344432223,
    bankname:"SBI",
    month:"12",
    year:"2026",
    cvv:122
}
console.log("User After Updation-\n",newUser);


