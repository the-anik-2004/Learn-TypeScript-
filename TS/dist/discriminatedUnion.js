"use strict";
const getArea = (shape) => {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius;
        case "square":
            return Math.pow(shape.side, 2);
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _exhustiveShapeCheck = shape;
            return _exhustiveShapeCheck;
    }
};
const area = getArea({
    kind: "rectangle",
    length: 23,
    width: 10
});
console.log(area);
