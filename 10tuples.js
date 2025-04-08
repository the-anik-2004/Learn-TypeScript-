var student = [12, "Anik"];
var teacher;
teacher = ["Sayan", 50000];
// teacher=[50000,"Sayan"]; ===>Can't possible
// teacher=["Sayan",50000,"Manoj",50005];  ===>Can't possible
console.log(teacher);
teacher[0] = "Subhas";
teacher[1] = 78000;
console.log(teacher);
var getAvg = function (studentMarks) {
    var sum = 0;
    var name = studentMarks[0], marks = studentMarks.slice(1);
    for (var _i = 0, marks_1 = marks; _i < marks_1.length; _i++) {
        var mark = marks_1[_i];
        sum += mark;
    }
    return [name, marks.length === 0 ? 0 : parseFloat((sum / marks.length).toFixed(2))];
};
var myMarks = ["Anik Pal", 8.18, 8.98, 8.68, 8.14, 8.63];
console.log("The Average Marks of ".concat(getAvg(myMarks)[0], " is : ").concat(getAvg(myMarks)[1], " "));
var nodeA = [1, "Block-A"];
nodeA.push("Hola"); //=>This push operation shouldn't be done it's also violeting the sequence.
nodeA.push(1); //=>This push operation shouldn't be done it's also violeting the sequence.
console.log(nodeA);
var nodeB = [1, "Block-A"];
// nodeB.push("Hola"); //=>Throw error
// nodeB.push(1);  //=>Throw error
console.log(nodeB);
