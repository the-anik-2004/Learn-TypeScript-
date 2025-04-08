// Importing User and Role from another module
import { User } from "./index.js";
// Instagram class implementing both interfaces
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    createStory(username, sd) {
        if (username === sd.igUsername) {
            return {
                video: sd.story,
                duration: sd.duration,
                username: sd.igUsername,
                collectionId: sd.collectionId,
            };
        }
        else {
            throw new Error("Cannot return value");
        }
    }
}
// YouTube class implementing TakePhoto
class YouTube {
    constructor(cameraMode, filter, burst, shorts) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.shorts = shorts;
    }
}
// Creating a User instance
const user = new User("anikpal_", "anik@ap.com", "Goas", "client" /* Role.CLIENT */);
const instaUser = new Instagram("front", "palm", 4);
// Creating a story
const story = instaUser.createStory(user.username, {
    igUsername: "anikpal_",
    story: "myday.mp4",
    collectionId: "highlights",
    duration: 15000,
});
console.log(story);
document.body.innerHTML += `<h6 style="color:white;">${JSON.stringify(story)}</h6>`;
