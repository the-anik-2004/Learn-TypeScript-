// Importing User and Role from another module
import { User, Role } from "./index.js";

// Interface for taking photos
interface TakePhoto {
    cameraMode: string;
    filter: string;
    burst: number;
}

// Interface for creating stories
interface Story {
    createStory(
        username: string,
        storyDetails: { igUsername: string; story: string; collectionId: string; duration: number }
    ): {
        video: string;
        duration: number;
        username: string;
        collectionId: string;
    };
}

// Instagram class implementing both interfaces
class Instagram implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {}

    createStory(
        username: string,
        sd: { igUsername: string; story: string; collectionId: string; duration: number }
    ) {
        if (username === sd.igUsername) {
            return {
                video: sd.story,
                duration: sd.duration,
                username: sd.igUsername,
                collectionId: sd.collectionId,
            };
        } else {
            throw new Error("Cannot return value");
        }
    }
}

// YouTube class implementing TakePhoto
class YouTube implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public shorts: string
    ) {}
}

// Creating a User instance
const user = new User("anikpal_", "anik@ap.com", "Goas", Role.CLIENT);
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
