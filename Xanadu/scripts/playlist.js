const audioArray = [
    '../assets/sounds/comic-1.mp3', 
    '../assets/sounds/comic-2.mp3', 
    '../assets/sounds/comic-3.mp3',
    '../assets/sounds/comic-4.mp3',
    '../assets/sounds/comic-5.mp3',
    '../assets/sounds/comic-6.mp3',
    '../assets/sounds/comic-7.mp3',
    '../assets/sounds/comic-8.mp3',  
];

const audioPlayer = document.getElementById('audioPlayer');
let audioPointer = 0; // Index to keep track of the current track

function playNext() {
    if (audioPointer < audioArray.length) {
        // Set the source of the audio player to the next file
        audioPlayer.src = audioArray[audioPointer];
        
        // Play the audio
        audioPlayer.play();
        
        // Move the pointer to the next index
        audioPointer += 1;
    } else {
        audioPointer = 0; // Reset the pointer to the beginning of the playlist
    }
}

audioPlayer.addEventListener('ended', playNext);

playNext();