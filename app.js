let progress = document.getElementById("progress");
let song = document.getElementById("song");
let control_icon = document.getElementById("control-icon");

song.onloadeddata = function () {
    progress.max = song.duration;
};
song.ontimeupdate = function () {
    progress.value = song.currentTime;
};


function playpause() {
    if (control_icon.classList.contains("fa-pause")) {
        song.pause();
        control_icon.classList.remove("fa-pause");
        control_icon.classList.add("fa-play");

    } else {
        song.play();
        control_icon.classList.add("fa-pause");
        control_icon.classList.remove("fa-play");
    }
}
progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    control_icon.classList.add("fa-pause");
    control_icon.classList.remove("fa-play");
}

