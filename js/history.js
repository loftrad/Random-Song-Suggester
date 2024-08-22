document.addEventListener('DOMContentLoaded', function() {
    const historyList = document.getElementById('historyList');
    const consumedSongs = JSON.parse(localStorage.getItem('consumedSongs')) || [];

    consumedSongs.forEach(song => {
        const li = document.createElement('li');
        li.textContent = song.name;
        const link = document.createElement('a');
        link.href = song.spotifyEmbed;
        link.textContent = " Listen";
        link.target = "_blank";
        li.appendChild(link);
        historyList.appendChild(li);
    });
});
