export function slideshowAnimated({imgTags, carousel, index, delay = 0}){
  imgTags.forEach((img) => {
    img.style.animation = `startScale 2s ${delay}s`;
    setTimeout(() => {
      img.removeAttribute("style");
    }, 2000 + (delay * 1000));
  });
  carousel.style.transform = `translateX(-${
    (100 / 4) * index
  }%)`;
  carousel.style.transition = `transform 1s ease-in-out ${0.5 + delay}s`
}