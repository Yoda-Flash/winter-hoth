const music = document.getElementById("music");
// https://www.youtube.com/watch?v=STdKeu9pmGY
const musicButton = document.getElementById("music_button");

musicButton.addEventListener("click", () => {
    music.play();
    console.log(music);
})

const swoosh = document.getElementById("swoosh");
const falcon = document.getElementById("falcon");

falcon.addEventListener("animationstart", startSwoosh);

function startSwoosh() {
    swoosh.play();
    console.log("Swooshing")
}

// if (falcon.checkVisibility() && !music.paused) {
//     swoosh.play();
//     console.log(falcon.visibility);
// }