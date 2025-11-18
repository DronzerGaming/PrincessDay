document.addEventListener("DOMContentLoaded", function () {

    const pages = [
        { text: "Guess Who's the star of Today ?💖", background: "#a8d1e5" },
        { text: "Did You Guessed It, Sweetheart... 🥰", background: "#ff9b85" },
        { text: "Yesssss Its none other than you Mylady.. . 🌟", background: "#6f9c8f" },
        { text: "Happy Princess Day Babygirl 👑", background: "#f5d0a9" },
        { text: "You're like Belle, with the grace and elegance of a Rajasthani princess... 💫", background: "#b1a7d1" },
        { text: "You possess the calm strength of Aurora... 🌙", background: "#d8b7b3" },
        { text: "Like Ariel, you embrace the world with curiosity... 💞", background: "#f0c5a1" },
        { text: "You have the courage of Mulan... ✨", background: "#b8e2dd" },
        { text: "You're like Snow White, pure and gentle... ☀️", background: "#8fa9b5" },
        { text: "Like Rapunzel, you're full of creativity... 🎨", background: "#d9cfc4" },
        { text: "You have the grace of Cinderella... 👗", background: "#6d746c" },
        { text: "Like Jasmine, you have an adventurous heart... 🌈", background: "#c5a3b7" },
        { text: "You're like Elsa, strong and independent... ❄️", background: "#8e9a91" },
        { text: "Much like Pocahontas, you're deeply connected to nature... 🍃", background: "#dfd7d0" },
        { text: "Like Merida, you're a free spirit with determination... 💖", background: "#7bb2b5" }
    ];

    let currentPage = 0;

    const pageText = document.getElementById("pageText");
    const nextButton = document.getElementById("nextButton");
    const slide = document.getElementById("slide");

    nextButton.addEventListener("click", () => {

        if (currentPage < pages.length) {

            slide.classList.remove("visible"); // fade out
            setTimeout(() => {

                // Change text + background
                pageText.textContent = pages[currentPage].text;
                document.body.style.backgroundColor = pages[currentPage].background;

                slide.classList.add("visible"); // fade in

                currentPage++;

                if (currentPage === pages.length) {
                    nextButton.textContent = "End of Magic 💖";
                    nextButton.disabled = true;
                }

            }, 300); // fade timing
        }
    });

});
