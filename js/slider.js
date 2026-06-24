const imagesArr = [
    "../images/slider-image.jpg",
    "../images/bank-slider.jpg",
    "../images/railway-slider.jpg",
    "../images/hospital-slider.jpg",
    "../images/slider-img-3.jpg",
    "../images/gk-slider.jpg",
    "../images/slider-img-5.avif"
];

const imgElement = document.getElementById("img");

// Show a random image when page loads
let imgIndex = Math.floor(Math.random() * imagesArr.length);
imgElement.src = imagesArr[imgIndex];

// Previous Button
function prev() {
    if (imgIndex === 0) {
        imgIndex = imagesArr.length - 1;
    } else {
        imgIndex--;
    }

    imgElement.src = imagesArr[imgIndex];
}

// Next Button
function next() {
    if (imgIndex === imagesArr.length - 1) {
        imgIndex = 0;
    } else {
        imgIndex++;
    }

    imgElement.src = imagesArr[imgIndex];
}

// Random Image (No Repeat)
function randomImage() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * imagesArr.length);
    } while (randomIndex === imgIndex);

    imgIndex = randomIndex;
    imgElement.src = imagesArr[imgIndex];
}

// Auto Random Slider Every 5 Seconds
setInterval(randomImage, 5000);