const images = ["/first/nightwing2.jpg", "/first/hiccup3.jpg", "/first/asami.jpg", "/first/ayns.jpg",
    "/first/robin.jpg", "/first/marceline.jpg"];
let index = 0;
const illusionDiv = document.querySelector(".illusion");

setInterval(() => {
    illusionDiv.style.backgroundImage = `url(${images[index]})`;
    index = (index + 1) % images.length;
}, 3000);
