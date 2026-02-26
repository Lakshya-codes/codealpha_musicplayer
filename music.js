
const  backward = document.querySelector(".fa-backward");
const forward = document.querySelector(".fa-forward");
const slider = document.getElementById("slider");
const imgbox = document.getElementById("imgbox");
const cover = document.getElementById("cover");
const playbtn = document.getElementById("playbtn");
const songname = document.getElementById("songname");
let isdragging = false;

const songs = [
    {
        name: "Thinking Of You - AP Dhillon",
        file:  "Thinking Of You.mp3",
        img: "cd6.webp",
    },  

    {
        name:  "Dooron Dooron - Paresh Pahuja",
        file:  "Dooron Dooron.mp3",
        img: "cd6.webp"
    },
    {
        name:  "Charmer - Diljit Dosanjh",
        file:  "Charmer.mp3",
        img: "cd6.webp"
    },
    {
        name:  "Ikko Mikke - Satindar Sartaj",
        file:  "Ikko Mikke.mp3",
        img: "cd6.webp"
    },
    {
        name:  "Moonlight - Harnoor",
        file:  "Moonlight.mp3",
        img: "cd6.webp"
    },
    {
        name:  "Boyfriend - Karan Aujla",
        file:  "Boyfriend.mp3",
        img: "cd6.webp"
    },
    {
        name:  "Aa Ja Diljaaniya - Amrinder Gill",
        file:  "https://soundcloud.com/hustinder-423562794/aa-ja-diljaaniya?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        img: "cd6.webp"
    },
    {
        name:  "Tera Hone Laga Hoon",
        file:  "Tera Hone Laga Hoon.mp3",
        img: "cd6.webp"
    },
];
const audio = new Audio();
let index = 0;
function loadSong(i){
    const song = songs[i];
    audio.src = song.file;
    audio.load();
    cover.src = song.img;
    songname.textContent = song.name;
    audio.currentTime = 0;
    slider.value = 0;
}
loadSong(index);
playbtn.addEventListener("click",()=>{
    if(audio.paused){
        audio.play();
        playbtn.classList.replace("fa-play","fa-pause");
    }
    else{
        audio.pause();
        playbtn.classList.replace("fa-pause","fa-play");
    }
});
forward.addEventListener("click",()=>{
    index = (index + 1) % songs.length;
    loadSong(index);
    audio.play();
     playbtn.classList.replace("fa-play","fa-pause");
});
backward.addEventListener("click",()=>{
    index = (index - 1 + songs.length) % (songs.length);
    loadSong(index);
    audio.play();
    playbtn.classList.replace("fa-play","fa-pause");
});
audio.addEventListener("timeupdate",()=>{
    if(! slider.matches(":active") && audio.duration){
        slider.value = (audio.currentTime / audio.duration) * 100;
        
    }
});
slider.addEventListener("input",()=>{
    audio.currentTime = (slider.value / 100) * audio.duration;
});
window.onload = function(){
    this.document.querySelector("form").reset();

}
