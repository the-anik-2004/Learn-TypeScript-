interface  User {
    readonly userId:number;
    email:string;
    googleId?:string;

    //there are two ways to define functions in interfaces
    startTrial:()=>string
    getCoupon(couponcode:string):string
}

//Reopening of interfaces
interface User {
    isActive:boolean
}

const user:User={
    userId:555,
    email:"user@gmail.com",
    isActive:true,
    startTrial:()=>{
        return "Welcome to Our Platform"
    },

    getCoupon:(code:string)=>`cupon-${code}`
}

console.log(user.startTrial())
console.log(user.getCoupon("uweru345"))


//Implements
interface Admin extends User{
    role: 'db_admin' | 'system_admin';
    err:string;
}

const hod:Admin ={
    role:"system_admin",
    userId:555,
    err:'no error',
    email:"user@gmail.com",
    isActive:true,
    startTrial:()=>{
        return "Welcome to Our Platform"
    },

    getCoupon:(code:string)=>`cupon-${code}`
}

console.log(hod.role);
