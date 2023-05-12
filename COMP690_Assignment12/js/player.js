class Player {
    constructor(album) {
        this.albums = [];
    }
    addAlbum = function(album) {
        this.albums.push(album);
    }
    favoriteAlbum = function() {
        let max = -1, fav;
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played;
                fav = this.albums[i];
            }
        }
        return fav.display();
    }
    returnAlbum = function(num) {
        return this.albums[num];
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist;
        this.title = title;
        this.played = 0;
    }
    play = function() {
        this.played += 1;
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`;
    }
}

window.addEventListener('load', () => {  
    const player = new Player();
    const albumList = [
        ['Blink 182', 'Dammit'],
        ['Jawbreaker', 'Want'],
        ['New Found Glory', 'Hit or Miss'],
        ['Teen Idols', 'Backstabber'],
        ['Teenage Bottlerocket', 'On My Own']];
    let albums          = document.getElementById('albums');
    let play            = document.getElementById('play');
    let showFav         = document.getElementById('favorite');
    let displayFav      = document.getElementById('favoriteAlbum');
    
    for (let i = 0; i < albumList.length; i += 1) {
        player.addAlbum(new Album(albumList[i][0], albumList[i][1]));
        albums.add(new Option(albumList[i][0] + ' : ' + albumList[i][1], i)); 
    }

    play.addEventListener('click', () => {
        player.returnAlbum(albums.value).play();
        console.log(player.returnAlbum(albums.value).display());
    });

    showFav.addEventListener('click', () => {
        displayFav.innerHTML = player.favoriteAlbum();
    });
});