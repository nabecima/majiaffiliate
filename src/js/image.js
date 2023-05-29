const images = document.querySelectorAll("img");

if (images.length !== 0) {
  images.forEach((img) => {
    if (!img.getAttribute("width") && !img.getAttribute("height")) {
      console.log(img);
      console.log(
        `width="${img.clientWidth}" height="${img.clientHeight}"\n\n`
      );
    }
  });
}
