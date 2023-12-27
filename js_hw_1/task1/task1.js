const musicCollection = {

    musicAlbums: [
        { title: 'Король и Шут', artist: 'Король и Шут', year: '1997' },
        { title: 'Тень клоуна!', artist: 'Король и Шут', year: '2008' },
        { title: 'Герои и Злодеи', artist: 'Король и Шут', year: '2000' }
    ],
    [Symbol.iterator]() {
        this.index = 0;
        return this;
    },
    next() {
        return this.index < this.musicAlbums.length
            ? { done: false, value: this.musicAlbums[this.index++] }
            : { done: true };
    }
}
for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}