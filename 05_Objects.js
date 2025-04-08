var user = {
    name: "Anik Pal",
    email: "anikpal12082004@gmail.com",
    isCreator: true,
    channel: "e-Anik",
};
//---passing Original Object-----
// console.log("Before Modification:\n",user);
// const updateSubscriber=(user:{name:string,
//     email:string,
//     isCreator:boolean,
//     channel:string,
//     subscriber?:number}):{channel:string,subscriber:number}=>{
//         if(user.subscriber) user.subscriber+=1;
//         else user.subscriber=0;
//         return {channel:user.channel,subscriber:user.subscriber}
// }
// updateSubscriber(user);
// console.log("After Modification:\n",user);
//---passing Original Object-----
var updateSubscriber = function (user) {
    if (user.isCreator && user.subscriber) {
        //   return {...user,subscriber:user.subscriber+1}
        return { channel: user.channel, subscriber: user.subscriber + 1 };
    }
    else {
        //return {...user,subscriber:0}//-->you can give this but the funtion sturcture is something else
        return { channel: user.channel, subscriber: 0 };
    }
};
var creator = updateSubscriber(user);
console.log("USER:\n", user);
console.log("\nCREATOR:\n", creator);
/* Note:- "?" this can give you the relaxation of using optional attributes*/
