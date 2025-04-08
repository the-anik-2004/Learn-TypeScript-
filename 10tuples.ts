let student :[ number,string] =[12,"Anik"];
let teacher :[ string,number] ;

teacher=["Sayan",50000];
// teacher=[50000,"Sayan"]; ===>Can't possible
// teacher=["Sayan",50000,"Manoj",50005];  ===>Can't possible
console.log( teacher);

teacher[0]="Subhas";
teacher[1]=78000;
console.log( teacher);

//-----Special Tuples----
type Marks=readonly[string,...number[] ]

const getAvg=(studentMarks:Marks):[string,number]=>{
    let sum=0;
    const [name,...marks]=studentMarks;
    
    for(const mark of marks){
        sum+=mark;
    }
    
    return [name,marks.length===0 ?0:parseFloat((sum/marks.length).toFixed(2))];
}

const myMarks:Marks=["Anik Pal",8.18,8.98,8.68,8.14,8.63];
console.log(`The Average Marks of ${getAvg(myMarks)[0]} is : ${getAvg(myMarks)[1]} `);

//---Exception---
type nodeUserA= [number ,string];

const nodeA:nodeUserA=[1,"Block-A"];
nodeA.push("Hola"); //=>This push operation shouldn't be done it's also violeting the sequence.
nodeA.push(1);  //=>This push operation shouldn't be done it's also violeting the sequence.
console.log(nodeA);

//Solution:- Making the type mutable by readonly...
    type nodeUserB=readonly [number ,string]; 
    const nodeB: nodeUserB=[1,"Block-A"];
    // nodeB.push("Hola"); //=>Throw error
    // nodeB.push(1);  //=>Throw error
    console.log(nodeB);