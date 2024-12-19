document.getElementById('playButton').addEventListener('click', function () {
    const video = document.getElementById('videoPlayer');
    
    // Unmute the video
    video.muted = false;
    
    // Play the video
    video.play();
    
    // Hide the button after enabling sound
    this.style.display = 'none';
});