abstract class Camera{
    constructor (
        public mode: string,
        public filter:string
    ){}

    abstract getPhoto():void

    makeIntoReel():string{
        return "reel.mp4";
    }
}

class Instagram extends Camera{
    constructor(
        public mode: string,
        public filter:string,
        public burst:number   
    ){
        super(mode,filter);
    }
    getPhoto(): void {
        console.log("Photo is uploaded into account")
    }
}

const anikpal_=new Instagram("Front-Camera","vivid",15);

anikpal_.makeIntoReel();