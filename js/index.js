const songs = [
    {
        name: "Magical Moustache Ride - Heart Shaped Hate",
        spotifyEmbed: "https://open.spotify.com/embed/track/36smnerHWXlSIyJ78N6yf7?utm_source=generator"
    },
    {
        name: "Cock Roaches - Nailbomb",
        spotifyEmbed: "https://open.spotify.com/embed/track/6jIVLU8ewF4pWLojWLUca1?utm_source=generator&theme=0"
    },
    {
        name: "Fuck Machine - Mindless Self Indulgence",
        spotifyEmbed: "https://open.spotify.com/embed/track/6vemhd0tPB9kQhlgHWxVXE?utm_source=generator"
    },
    {
        name: "Thieves - Ministry",
        spotifyEmbed: "https://open.spotify.com/embed/track/6KCthSzW230fnf6IygPaI0?utm_source=generator"
    },
    {
        name: "Silly Girl - Bunnygrunt",
        spotifyEmbed: "https://open.spotify.com/embed/track/2p9gL82hNPvlvPSxtXhd6I?utm_source=generator"
    },
    {
        name: "Westboro Sadness - McCafferty",
        spotifyEmbed: "https://open.spotify.com/embed/track/2OI6kWXIxdvT9nxdy9B90r?utm_source=generator"
    },
    {
        name: "Ugly Story - Phemiec",
        spotifyEmbed: "https://open.spotify.com/embed/track/4nbhJrsjUQ3QAOypDKnRQD?utm_source=generator"
    },
    {
        name: "Wicked Game - Widowspeak",
        spotifyEmbed: "https://open.spotify.com/embed/track/7aVUPpEb9j2sSmgb4AdFWD?utm_source=generator"
    },
    {
        name: "Staplegun - Baby Guts",
        spotifyEmbed: "https://open.spotify.com/embed/track/4JRs49S2iWLrYKppB2Nmql?utm_source=generator"
    },
    {
        name: "Spit - Kittie",
        spotifyEmbed: "https://open.spotify.com/embed/track/6zd772F94reUnGHulNeEFm?utm_source=generator"
    },
    {
        name: "Seven Minutes in Heaven - Mindless Self Indulgence",
        spotifyEmbed: "https://open.spotify.com/embed/track/2t7B8DDBgLbMcYVMTo8vd5?utm_source=generator&theme=0"
    },
    {
        name: "Magnet - Bikini Kill",
        spotifyEmbed: "https://open.spotify.com/embed/track/660s5fvZVVupYoxBPzS9Ze?utm_source=generator"
    },
    {
        name: "First It Giveth - Queens of the Stone Age",
        spotifyEmbed: "https://open.spotify.com/embed/track/0UEMTz9APWfoJHdlXDeIzm?utm_source=generator"
    },
    {
        name: "Worried Ugly - Harlequin Jones",
        spotifyEmbed: "https://open.spotify.com/embed/track/5G21wpWvUAAOqfesY2Jrhp?utm_source=generator"
    },
    {
        name: "Goth Queen - Destructo Disk",
        spotifyEmbed: "https://open.spotify.com/embed/track/3A6JTRjPehOQ45xnfLOXjO?utm_source=generator"
    },
    {
        name: "Lost - Horror Vacui",
        spotifyEmbed: "https://open.spotify.com/embed/track/1aVGsPF8VKiyHS98IWNNxL?utm_source=generator"
    },
    {
        name: "Alcoholism - Psychonaut 4",
        spotifyEmbed: "https://open.spotify.com/embed/track/7xf7srfFglQY4jO6x6dKQZ?utm_source=generator"
    },
    {
        name: "Starfucker - Skinny Girl Diet",
        spotifyEmbed: "https://open.spotify.com/embed/track/4ytGhFhPJ1lvSPnjEbPuWg?utm_source=generator&theme=0"
    },
    {
        name: "I Hate My Life - Youth Brigade",
        spotifyEmbed: "https://open.spotify.com/embed/track/3ORDNvBw5vGunjVu7OwKMy?utm_source=generator"
    },
    {
        name: "Sorry Sarah - Raccoon Tour",
        spotifyEmbed: "https://open.spotify.com/embed/track/5Xg1TeDxCi25Rp5ORudX31?utm_source=generator"
    },
    {
        name: "The Bleeding - Five Finger Death Punch",
        spotifyEmbed: "https://open.spotify.com/embed/track/6LRmV5GZUjKLgxi7lBWriQ?utm_source=generator"
    },
    {
        name: "Chainsaw Deathcult - The Bleeding",
        spotifyEmbed: "https://open.spotify.com/embed/track/6x2lQHZiKDC27GcNwDZKaX?utm_source=generator"
    },
    {
        name: "Bored - Deftones",
        spotifyEmbed: "https://open.spotify.com/embed/track/0PicuPCfXDJyyRtOR1ukGW?utm_source=generator"
    },
    {
        name: "Disheartenment - Forgetten Tomb",
        spotifyEmbed: "https://open.spotify.com/embed/track/3jBIPtU6UW0UL1Ya1xn9LW?utm_source=generator"
    },
    {
        name: "Angels Fuck Devils Kiss - Jack Off Jill",
        spotifyEmbed: "https://open.spotify.com/embed/track/3VLlm7YC3PUTT0MOfcBNC3?utm_source=generator"
    },
    {
        name: "Seduction - Virgin in Veil",
        spotifyEmbed: "https://open.spotify.com/embed/track/1667GvkLGJ9s8IJeRR7kGF?utm_source=generator"
    },
    {
        name: "Boiler - Limp Bizkit",
        spotifyEmbed: "https://open.spotify.com/embed/track/1a3RarhRdrNSTEEERYEFJn?utm_source=generator"
    },
    {
        name: "Nymphetamine Fix - Cradle of Filth",
        spotifyEmbed: "https://open.spotify.com/embed/track/6WuqJLVZcyJklg7lIozAO8?utm_source=generator"
    },
    {
        name: "Hell is Real - Black Dresses",
        spotifyEmbed: "https://open.spotify.com/embed/track/07MGu62NUyENmFJcqTMCKE?utm_source=generator&theme=0"
    },
    {
        name: "Hey Bunny - Baby Bugs",
        spotifyEmbed: "https://open.spotify.com/embed/track/6dkPmbwmIHvDXVG67ADlOj?utm_source=generator"
    },
    {
        name: "Piss Punk - Vial",
        spotifyEmbed: "https://open.spotify.com/embed/track/2xKLzKhm2AEGyZapAL5NjH?utm_source=generator"
    },
    {
        name: "Call the Cops - Ashtray",
        spotifyEmbed: "https://open.spotify.com/embed/track/4HkOn4Usby0NxRv3Ku0ZRz?utm_source=generator"
    },
    {
        name: "Terrorist - Heavens To Betsy",
        spotifyEmbed: "https://open.spotify.com/embed/track/5svfeW2c5FttYvj2IB5Gq6?utm_source=generator"
    },
    {
        name: "Glory Box - Portishead",
        spotifyEmbed: "https://open.spotify.com/embed/track/3Ty7OTBNSigGEpeW2PqcsC?utm_source=generator"
    },
    {
        name: "Black No. 1 - Type O Negative",
        spotifyEmbed: "https://open.spotify.com/embed/track/710B9xFjNOisQtKtppZE9p?utm_source=generator"
    },
    {
        name: "There's A New Creep On The Block - Snow White's Poison Bite",
        spotifyEmbed: "https://open.spotify.com/embed/track/4BA2Q8sjmAesCQkGFhFMqs?utm_source=generator"
    },
    {
        name: "God Is a Girl With a Butcher Knife - My Ruin",
        spotifyEmbed: "https://open.spotify.com/embed/track/5yNAptjNaoiZ8CO1bmBOwX?utm_source=generator"
    },
    {
        name: "When You're Evil - Aurelio Voltaire",
        spotifyEmbed: "https://open.spotify.com/embed/track/5VNplEIyA2PCKP0Rkb22uw?utm_source=generator"
    },
    {
        name: "Coffin Maker - 13th Chime",
        spotifyEmbed: "https://open.spotify.com/embed/track/74zZ2rJr0rRUvESnptAS6g?utm_source=generator&theme=0"
    },
    {
        name: "Savage Dog - Palko!Muski",
        spotifyEmbed: "https://open.spotify.com/embed/track/6TzfgtgXX3Pu8KJoDVQp8j?utm_source=generator"
    },
    {
        name: "Dude, Where's My Skin? - Schoolyard Heroes",
        spotifyEmbed: "https://open.spotify.com/embed/track/3wILopdjm5k4sObfNmfeYt?utm_source=generator"
    },
    {
        name: "I Still Adore You - The Oozes",
        spotifyEmbed: "https://open.spotify.com/embed/track/5gFr8PduCF9ywRH3O3RLe2?utm_source=generator"
    },
    {
        name: "Violence - Frank Lero",
        spotifyEmbed: "https://open.spotify.com/embed/track/3b7ukH3lFSlVWKiaoeFfUe?utm_source=generator"
    },
    {
        name: "Your Ex Doens't Mark Treasures - Fucking Werewolf Asso",
        spotifyEmbed: "https://open.spotify.com/embed/track/31deshMzthQpyEBKkawdwj?utm_source=generator"
    },
    {
        name: "Ghost Page - Red Vox",
        spotifyEmbed: "https://open.spotify.com/embed/track/7GXpizaEpGmskhBryFMYP6?utm_source=generator"
    },
    {
        name: "Take A Look Around - Limp Bizkit",
        spotifyEmbed: "https://open.spotify.com/embed/track/2avKuMN2QXkaG9vvHa2JLt?utm_source=generator"
    },
    {
        name: "Faget - Korn",
        spotifyEmbed: "https://open.spotify.com/embed/track/7kVrQ79jg4nd1r6H9CrmIk?utm_source=generator"
    },
    {
        name: "Love Song - Jack Off Jill",
        spotifyEmbed: "https://open.spotify.com/embed/track/2na2paKLoPieSDyIcfj29u?utm_source=generator"
    },
    {
        name: "Post Modern Rhapsody - WARGASM (UK)",
        spotifyEmbed: "https://open.spotify.com/embed/track/73a7l6XUdiDgtUt310OwKm?utm_source=generator"
    },
    {
        name: "Born Without a Head - Zombina & The Skeletones",
        spotifyEmbed: "https://open.spotify.com/embed/track/6mckpVcd3f0cqRkK3kyaSh?utm_source=generator"
    },
    {
        name: "The Poodle - Kabaret Sybarit",
        spotifyEmbed: "https://open.spotify.com/embed/track/5WrIDLlxjsEtur3cyZdjwN?utm_source=generator"
    }
];

let consumedSongs = JSON.parse(localStorage.getItem('consumedSongs')) || [];
let likedSongs = JSON.parse(localStorage.getItem('likedSongs')) || [];

document.getElementById('songButton').addEventListener('click', function() {
    const availableSongs = songs.filter(song => !consumedSongs.some(consumed => consumed.name === song.name));

    if (availableSongs.length === 0) {
        alert("We don't have any songs anymore :(");
        return;
    }

    const randomIndex = Math.floor(Math.random() * availableSongs.length);
    const randomSong = availableSongs[randomIndex];

    document.getElementById('songDisplay').textContent = randomSong.name;
    document.getElementById('spotifyIframe').src = randomSong.spotifyEmbed;
    document.getElementById('spotifyIframe').style.display = 'block';
    document.getElementById('likeButton').style.display = 'block';

    consumedSongs.push(randomSong);
    localStorage.setItem('consumedSongs', JSON.stringify(consumedSongs));
});

document.getElementById('likeButton').addEventListener('click', function() {
    const currentSongName = document.getElementById('songDisplay').textContent;
    const currentSong = consumedSongs.find(song => song.name === currentSongName);

    if (currentSong && !likedSongs.some(song => song.name === currentSong.name)) {
        likedSongs.push(currentSong);
        localStorage.setItem('likedSongs', JSON.stringify(likedSongs));
    }
});