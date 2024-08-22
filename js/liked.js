document.addEventListener('DOMContentLoaded', function() {
    const likedList = document.getElementById('likedList');
    const likedSongs = JSON.parse(localStorage.getItem('likedSongs')) || [];

    likedSongs.forEach(song => {
        const li = document.createElement('li');
        li.textContent = song.name;
        const link = document.createElement('a');
        link.href = song.spotifyEmbed;
        link.textContent = " Listen";
        link.target = "_blank";
        li.appendChild(link);
        likedList.appendChild(li);
    });
});
