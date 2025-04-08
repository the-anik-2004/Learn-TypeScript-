let score:string | number = 1508;

score="1800";

score=2020

// Real Life situation
type User ={
    userId:string,
    isLoggedIn:boolean,
    contribution:number
}

type Admin ={
    adminId:string,
    isLoggedIn:boolean,
    contribution:number,
    inChargeOf:string[]
}


const createUser=(userId:string):User=>({
    userId:userId,
    isLoggedIn:true,
    contribution:0
})

const makeAdmin=(adminId:string):Admin=>({
    adminId:adminId,
    isLoggedIn:true,
    contribution:0,
    inChargeOf:[]
})


const a1 =makeAdmin("eFootball");
const u1  =createUser("Anik");
const u2 =createUser("Sandy");

a1.inChargeOf.push(u1.userId,u2.userId);

console.log(`Admin :\n ${JSON.stringify(a1)}` );

//----------------------------------------------------

const data:number[]=[1,2,3,4,5,6,7];
const data2:string[]=["1","2","3"];
// const data3: number[] | string[]=[1,2,3,"4"]
const data4 :(number|string|boolean)[]=[1,2,3,"4","hi",true,false]

//----------------------------------------------------
let pi:3.14=3.14;

// pi=3.145 ;   =>It is not possible as it's working like a constant

//----------------------------------------------------
let packs : "Basic" | "Standard" | "Premium";

packs="Premium";
// packs="Golden";   ==> It is not assignable

