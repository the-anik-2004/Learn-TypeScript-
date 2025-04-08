interface Circle{
    kind:"circle";
    radius:number;
}

interface Square{
    kind:"square";
    side:number
}

interface Rectangle{
    kind:"rectangle";
    length:number;
    width:number;
}

type Shape=Circle | Square | Rectangle;

const getArea=(shape:Shape):number=>{
    switch(shape.kind){

        case "circle":
            return Math.PI * shape.radius;
        
        case "square":
            return  shape.side**2;

        case "rectangle":
            return shape.length * shape.width;

        default :
            const _exhustiveShapeCheck:never=shape;
            return _exhustiveShapeCheck;
    }
}

const area=getArea({
    kind:"rectangle",
    length:23,
    width:10
})

console.log(area);