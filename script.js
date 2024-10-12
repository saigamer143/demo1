const annaButton = document.getElementById('anna');
const thammuduButton = document.getElementById('thammudu');
const anotherButton = document.getElementById('another');
const imageElement = document.getElementById('image');

let currentImage = 0;

annaButton.addEventListener('click', () => {
    currentImage = 1; // 1 for picture1
    imageElement.src = 'picture1.jpg'; // replace with your actual picture1 file name
    imageElement.style.display = 'block';
    anotherButton.style.display = 'block';
});

thammuduButton.addEventListener('click', () => {
    currentImage = 3; // 3 for picture3
    imageElement.src = 'picture3.jpg'; // replace with your actual picture3 file name
    imageElement.style.display = 'block';
    anotherButton.style.display = 'block';
});

anotherButton.addEventListener('click', () => {
    if (currentImage === 1) {
        imageElement.src = 'picture2.jpg'; // replace with your actual picture2 file name
    } else if (currentImage === 3) {
        imageElement.src = 'picture4.jpg'; // replace with your actual picture4 file name
    }
});
