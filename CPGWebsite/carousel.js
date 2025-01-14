const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const itemList = document.getElementById('item-list');

const itemWidth = document.querySelector('.item').offsetWidth;
const gap = 24;
const scrollAmount = itemWidth + gap; // Define scroll amount

prevBtn.addEventListener('click', () => {
  itemList.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
  itemList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});
document.getElementById("radio1").addEventListener("change", function () {
  document.getElementById("image1").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("radio2").addEventListener("change", function () {
  document.getElementById("image2").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("radio3").addEventListener("change", function () {
  document.getElementById("image3").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("radio4").addEventListener("change", function () {
  document.getElementById("image4").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("radio5").addEventListener("change", function () {
  document.getElementById("image5").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("radio6").addEventListener("change", function () {
  document.getElementById("image6").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("radio7").addEventListener("change", function () {
  document.getElementById("image7").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("radio8").addEventListener("change", function () {
  document.getElementById("image8").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("radio9").addEventListener("change", function () {
  document.getElementById("image9").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("radio10").addEventListener("change", function () {
  document.getElementById("image10").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("radio11").addEventListener("change", function () {
  document.getElementById("image11").scrollIntoView({ behavior: "smooth" });
});
document.querySelectorAll('input[type="radio"]').forEach((radio, index) => {
  radio.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent unnecessary scrolling
      event.stopPropagation();
      const targetImage = document.getElementById(`image${index + 1}`);
      if (targetImage) {
          targetImage.scrollIntoView({
              behavior: 'smooth',
              block:'nearest', // Ensure the image is centered when scrolling
              inline:'center'
          });
      }
  });
});