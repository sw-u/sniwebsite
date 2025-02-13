document.addEventListener("DOMContentLoaded", function () {
    const correctPassword = "sni1024"; // Change this to your desired password
    let userPassword = prompt("Enter the password to view this page:");

    if (userPassword === correctPassword) {
        document.getElementById("protected-content").style.display = "block"; // Show content
    } else {
        alert("Incorrect password! You cannot access this page.");
        document.body.innerHTML = ""; // Hide everything
    }
});

function openLightbox(imageSrc) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = imageSrc;
}

// Function to Close Lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Add Click Event to All Photos
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".photo img");
    images.forEach(img => {
        img.addEventListener("click", function () {
            openLightbox(this.src);
        });
    });
});

let isInteracted = false; // Track if the user has interacted with the page
let backgroundVideo = document.getElementById("musicVideo");
let backgroundMusic = document.getElementById("backgroundMusic");

// Function to start both video and music
function startMedia() {
    backgroundMusic.play(); // Start the background music
    backgroundVideo.play(); // Start the background video
}

document.addEventListener("click", function() {
    if (!isInteracted) {
        startMedia(); // Start both media
        isInteracted = true; // Mark that the user has interacted
    }
}, { once: true });

// Show the popup with the video when the button is clicked
document.getElementById("openVideo").addEventListener("click", function() {
    let popup = document.getElementById("videoPopup");
    popup.classList.add("show");
    popup.classList.remove("fade-out");
});

// Close the video popup when the close button is clicked
document.getElementById("closeVideo").addEventListener("click", function() {
    let popup = document.getElementById("videoPopup");
    popup.classList.add("fade-out");
    setTimeout(() => {
        popup.classList.remove("show");
    }, 500); 
});


