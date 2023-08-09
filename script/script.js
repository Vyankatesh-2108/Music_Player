    const music = document.querySelector("audio");
    const img = document.querySelector("img");
    const play = document.getElementById("play");
    const artist= document.getElementById("artist");
    const title = document.getElementById("title");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");

    const songs = [
        {
        name:"Infinity",
        title: "Infinity",
        artist:"Jaymes Young",
    },
    {
        name:"Astronaut",
        title:"Astronaut",
        artist:"Masked Wolf",
    },
    {
        name:"Believer",
        title:"Believer",
        artist:"Imagine Dragons",   
    },
    {
        name:"Safari",
        title:"Safari",
        artist:"Serena",   
    },
    {
        name:"Senorita",
        title:"Senorita",
        artist:"Camila",   
    }
    ];

    let isPlaying = false;
    
    //for play function
    const playMusic= () => {
        isPlaying = true;
        music.play();
        play.classList.replace('fa-play',"fa-pause");
        img.classList.add("anime");
    };

    //for pause function
    const pauseMusic= () => {
        isPlaying = false;
        music.pause();
        play.classList.replace('fa-pause',"fa-play");
        img.classList.remove("anime");
    };

    play.addEventListener('click', () => {
        /*if(isPlaying){
            pauseMusic();
        }else{
            playMusic();
        }*/

        isPlaying ? pauseMusic() : playMusic();
    });

    //changing musics

    const loadSong = (songs) =>{
        title.textContent= songs.title;
        artist.textContent= songs.artist;
        music.src = "Musics/" + songs.name + ".mp3";
        img.scr = "Images/Music1i/Music2i/Music3i" + songs.name + ".jpg";
    };

    songIndex = 0;

    const nextSongs = () => {
        songIndex=(songIndex+1)%songs.length;
        loadSong(songs[songIndex]);
        playMusic();
    };

    const prevSongs = () => {
        songIndex = (songIndex - 1 + songs.length) % songs.length;
        loadSong(songs[songIndex]);
        playMusic();
    };

    next.addEventListener("click", nextSongs);
    prev.addEventListener("click", prevSongs);
