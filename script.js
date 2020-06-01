const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const reader = new FileReader();
const img = new Image();
const imgLoader = document.getElementById('uploader');

const uploadImage = (e) => {
    reader.onload = () => {
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        }
        
        img.src = reader.result;
    }

    reader.readAsDataURL(e.target.files[0]);
}

imgLoader.addEventListener('change', uploadImage);

const greyscale = () => {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        const grey = data[i] * 0.21 + data[i + 1] * 0.71 + data[i + 2] * 0.07;
        data[i] = grey;
        data[i + 1] = grey;
        data[i + 2] = grey;
    }

    ctx.putImageData(imageData, 0, 0);
}

const sepiaEffect = () => {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        const grey = data[i] * 0.21 + data[i + 1] * 0.71 + data[i + 2] * 0.07;

        data[i] = grey + 100;
        data[i + 1] = grey + 85;
        data[i + 2] = grey;
    }

    ctx.putImageData(imageData, 0, 0);
}

const invert = () => {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        data[i] = 255 - data[i];
        data[i + 1] = 255 - data[i + 1];
        data[i + 2] = 255 - data[i + 2];
    }

    ctx.putImageData(imageData, 0, 0);
}

const rgbToRbg = () => {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        const green = data[i + 1];

        data[i] = data[i];
        data[i + 1] = data[i + 2];
        data[i + 2] = green;
    }

    ctx.putImageData(imageData, 0, 0);
}

const rgbToBgr = () => {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        const red = data[i];

        data[i] = data[i + 2];
        data[i + 1] = data[i + 1];
        data[i + 2] = red;
    }

    ctx.putImageData(imageData, 0, 0);
}

const rgbToGbr = () => {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        const red = data[i];

        data[i] = data[i + 1];
        data[i + 1] = data[i + 2];
        data[i + 2] = red;
    }

    ctx.putImageData(imageData, 0, 0);
}

const rgbToGrb = () => {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        const red = data[i];

        data[i] = data[i + 1];
        data[i + 1] = red;
        data[i + 2] = data[i + 2];
    }

    ctx.putImageData(imageData, 0, 0);
}

const clear = () => {
    img.src = reader.result;
}

document.getElementById('rgbToRbg').addEventListener('click', rgbToRbg);
document.getElementById('rgbToBgr').addEventListener('click', rgbToBgr);
document.getElementById('rgbToGbr').addEventListener('click', rgbToGbr);
document.getElementById('rgbToGrb').addEventListener('click', rgbToGrb);
document.getElementById('greyscale').addEventListener('click', greyscale);
document.getElementById('sepiaEffect').addEventListener('click', sepiaEffect);
document.getElementById('invert').addEventListener('click', invert);
document.getElementById('clear').addEventListener('click', clear);