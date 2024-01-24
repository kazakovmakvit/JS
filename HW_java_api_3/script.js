window.addEventListener('load', () => {
    renderPhoto();
});


async function getPhotoRND() {
    const key = 'lYNToA3Olg8bSvUZM09nPZwEWq1JfiGBOP9Gq89cQNg';
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${key}`);
        const photo = await response.json();
        return photo;
    } catch (error) {
        console.error('Ошибка при загрузке фотографий:', error);
        return {};
    }
}

async function renderPhoto() {
    const photo = await getPhotoRND();
    if (photo) {
        const imageBox = document.querySelector('.image_box');
        const img = document.createElement('img');
        img.classList.add('image');

        img.src = photo.urls.small;
        img.alt = photo.alt_description;
        imageBox.appendChild(img);        
        const imagePhotographerNameDiv = document.querySelector('.photo-name');
        imagePhotographerNameDiv.textContent = `${photo.user.name}`;

        const imageLikesCounterSpan = document.querySelector('.like-counter');
        imageLikesCounterSpan.textContent = `${photo.likes}`;

    }
}

const counterButton = document.querySelector('.like-button');
counterButton.addEventListener('click', function () {
    increaseCounter();
});

function increaseCounter() {
    const likesCounter = document.querySelector('.like-counter');
    const currentCounter = parseInt(likesCounter.textContent, 10);
    likesCounter.textContent = currentCounter + 1;
}