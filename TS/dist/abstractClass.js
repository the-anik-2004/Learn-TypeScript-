"use strict";
class Camera {
    constructor(mode, filter) {
        this.mode = mode;
        this.filter = filter;
    }
    makeIntoReel() {
        return "reel.mp4";
    }
}
class Instagram extends Camera {
    constructor(mode, filter, burst) {
        super(mode, filter);
        this.mode = mode;
        this.filter = filter;
        this.burst = burst;
    }
    getPhoto() {
        console.log("Photo is uploaded into account");
    }
}
const anikpal_ = new Instagram("Front-Camera", "vivid", 15);
anikpal_.makeIntoReel();
