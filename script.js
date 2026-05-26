console.log("60 120 FPS 🇵🇰 Website Loaded");

/* Hover Animation */

document.querySelectorAll(".card").forEach(card => {

  card.addEventListener("mousemove", e => {

    let x = e.offsetX;
    let y = e.offsetY;

    card.style.backgroundPosition = `${x}px ${y}px`;

  });

});
