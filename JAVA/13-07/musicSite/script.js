'use strict';


let artists = document.querySelector('#pi1');
let albums = document.querySelector('#pi2');
let songs = document.querySelector('#pi3');

// let pagesContainer = document.querySelector('.pages');
let artistsPage = document.querySelector('.artists__box');
let albumsPage = document.querySelector('.albums');
let songsPage = document.querySelector('.songs__box');

artists.addEventListener('click', showArtists);
albums.addEventListener('click', showAlbums);
songs.addEventListener('click', showSongs);


function showArtists() {
    albumsPage.classList.add('display-none');
    artistsPage.classList.remove('display-none');
    songsPage.classList.add('display-none');
}
function showAlbums() {
    albumsPage.classList.remove('display-none');
    artistsPage.classList.add('display-none');
    songsPage.classList.add('display-none');
}
function showSongs() {
    albumsPage.classList.add('display-none');
    artistsPage.classList.add('display-none');
    songsPage.classList.remove('display-none');
}
