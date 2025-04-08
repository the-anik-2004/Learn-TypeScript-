const scores:Array<number>=[];
const products:Array<string>=["Tshirts","Books","Laptops"];

// function getScore<Type>(params:Type):Type{
//     return params
// }

function getScore<T>(params:T):T{
    return params
}

getScore(4)
getScore("4")

//----Array Generics----
function searchProducts<T>(products:T[]):T{
    //Do some operations
    return products[0];
}

searchProducts(products);
//---same function in arrow mode----
const  searchProductsFaster=<T,>(products:T[]):T=>{
return products[1];
}
searchProductsFaster(products)

//-----------------------------------------------
interface Over{
    runs:number;
    wickets:number;
    batsmen:string[];
    bowler:string;
    teams:{
        batting:string,
        balling:string,
    }
}

const verifyOver=<T,O extends Over>(over:T,details:O):object=>{
    return {
        Over:over,
        Runs:details.runs,
        Wickets:details.wickets
    }
}

console.log(verifyOver(5,{
    runs:12,
    wickets:0,
    batsmen:["K L Rahul","Virat Kholi"],
    bowler:"Dayle Stane",
    teams:{
        batting:"India",
        balling:"South Africa"
    }
}))


//--------------------------------Generic Classes-----------------------------
interface Cousrse{
    name:string;
    author:string;
    subject:string;
}
interface QuestionPapers{
    name:string;
    author:string;
    subject:string;
    marks:number;
}

class commercialization<T>{
    public cart:T[]=[];

    addToCard(product:T):T[]{
        this.cart.push(product);
        return this.cart;
    }
}