const getHello=(name:string,emoji:string):string=>{
    return `Hello ${name} ${emoji}`;
}

console.log(getHello("Anik","🌄"));

const coldDrinks=["Maaza","Frooti","Fanta","Limca"];

coldDrinks.map((cd):string=>{
    console.log(cd)
    return cd;
})

const showError=(error:string):void=>{
    console.log(error);
}
const throwError=(error:string):never=>{
    throw new Error(error);
}