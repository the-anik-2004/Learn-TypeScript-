const evens:number[]=[2,4,6,8,10];
console.log(evens);

const cars: Array<string>=[];
cars.push('Thar','BMW','Kia');
console.log(`Cars :${cars}`);

type Video={
    title:string;
    video:string;
    duration:number;
    like:number;
}

// const videos: Video[]=[];
const videos: Array<Video>=[
    {
        title:"Typescript",
        video:"ts.mp4",
        duration:120,
        like:787
    },
    {
        title:"javascript",
        video:"js.mp4",
        duration:270,
        like:7187
    },
    {
        title:"mongoDB",
        video:"mdb.mp4",
        duration:20,
        like:1787
    },
];
console.log(`Published Videos :${JSON.stringify(videos)}`)

let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix)