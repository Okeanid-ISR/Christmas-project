let on_off = document.querySelector('.container .title1');
let on_off2 = document.querySelector('.container .title2');
let on_off3 = document.querySelector('.container .title3');
let audio = document.querySelector('.musicOn audio');
let audio2 = document.getElementById('audioTwo');
let audio3 = document.getElementById('audioThree');


on_off.addEventListener('click', function () {
        audio.paused ? audio.play() : music_stop();
        audio2.pause();
        audio3.pause();
})


on_off2.addEventListener('click', function () {
        audio2.paused ? audio2.play() : music_stop();
        audio.pause();
        audio3.pause();
})

on_off3.addEventListener('click', function () {
        audio3.paused ? audio3.play() : music_stop();
        audio2.pause();
        audio.pause();
})

function music_stop() {
    audio.pause();
    audio2.pause();
    audio3.pause();
    audio.currentTime = 0;
    audio2.currentTime = 0;
    audio3.currentTime = 0;
}
