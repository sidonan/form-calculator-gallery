const gallery = document.getElementById('gallery');
const fullViewContainer = document.getElementById('fullViewContainer');
const fullViewContainerButton = document.getElementById('fullViewContainerButton');
const fullViewImage = document.getElementById('fullViewImage');

const images = [
    "https://sun9-16.userapi.com/impg/ndf3-bgIMirwUw4sUJ8CJ29fWKl7YHFpcFOWCA/V-N8b32Xcxk.jpg?size=600x604&quality=96&sign=84b979745234bc77e21dced5deca5895&type=album",
    "https://i.pinimg.com/736x/de/19/73/de197338b78fd1b122fb5c13bd3af3e0.jpg",
    "https://i.pinimg.com/736x/56/6f/ca/566fcac1d672552a535fd70cbc12c5bf.jpg",
    "https://i.pinimg.com/736x/8e/e5/03/8ee503b55d70e6186034083094e83576.jpg",
    "https://i.pinimg.com/736x/a5/85/69/a58569078c0badc5261bd6c9be115f0c.jpg",
    "https://i.pinimg.com/736x/ed/94/b1/ed94b1bb16c43b3bf0320c05eaa054ea.jpg",
    "https://i.pinimg.com/736x/7f/93/e0/7f93e0cc3e18f2f65ad76993e0e88150.jpg",
    "https://i.pinimg.com/736x/68/17/41/681741bb6a30812607b35560dd103cd9.jpg",
    "https://yt3.googleusercontent.com/ytc/AGIKgqOlyDqlhm6jYet1nMCvEsWw8dgREs5DaK91BdfY=s900-c-k-c0x00ffffff-no-rj"
];

images.forEach(createImage);

function createImage(imgSrc) {
    const imageElement = document.createElement("img");
    imageElement.src = imgSrc;
    imageElement.className = 'gallery__image';
    imageElement.addEventListener('click', () => {
        openFullView(imgSrc);
    });
    gallery.appendChild(imageElement);
}

function openFullView(imgSrc) {
    fullViewImage.src = imgSrc;
    fullViewContainer.style.display = 'flex';
}

fullViewContainerButton.addEventListener('click', () => {
    fullViewContainer.style.display = 'none';
});
