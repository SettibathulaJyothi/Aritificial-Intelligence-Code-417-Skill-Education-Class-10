/* =========================================================
   AI UNIT 1 INTERACTIVE LEARNING
   ========================================================= */


/* =========================================================
   OPEN / CLOSE TOPICS
   ========================================================= */

function toggleTopic(button) {

    const card = button.closest(".topic-card");

    const allCards = document.querySelectorAll(".topic-card");


    /*
       Close the other topics.

       This keeps the page clean and prevents
       every section from becoming huge at once.
    */

    allCards.forEach(otherCard => {

        if (otherCard !== card) {

            otherCard.classList.remove("active");

        }

    });


    /*
       Open / close selected topic
    */

    card.classList.toggle("active");


    /*
       If opening a topic, gently scroll it into view.
    */

    if (card.classList.contains("active")) {

        setTimeout(() => {

            const header = card.querySelector(".topic-header");

            header.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 150);

    }

}


/* =========================================================
   MARK TOPIC AS COMPLETED
   ========================================================= */

function markComplete(button) {

    /*
       Prevent counting the same topic twice.
    */

    if (button.classList.contains("completed")) {
        return;
    }


    button.classList.add("completed");

    button.innerHTML = "✓ Topic Completed!";


    /*
       Small celebration
    */

    createConfetti();


    /*
       Update progress
    */

    updateProgress();

}


/* =========================================================
   PROGRESS
   ========================================================= */

function updateProgress() {

    const completedTopics =
        document.querySelectorAll(".understood-btn.completed").length;


    const totalTopics =
        document.querySelectorAll(".understood-btn").length;


    const percentage =
        Math.round((completedTopics / totalTopics) * 100);


    document.getElementById("progressFill").style.width =
        percentage + "%";


    document.getElementById("progressText").textContent =
        percentage + "% Completed";

}


/* =========================================================
   SCROLL TO TOPICS
   ========================================================= */

function scrollToTopics() {

    document.getElementById("topics").scrollIntoView({

        behavior: "smooth"

    });

}


/* =========================================================
   SMALL CONFETTI EFFECT
   ========================================================= */

function createConfetti() {

    const symbols = ["✨", "⭐", "🎉", "💡", "🤖"];

    for (let i = 0; i < 12; i++) {

        const piece = document.createElement("span");

        piece.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];


        piece.style.position = "fixed";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.top = "50%";

        piece.style.fontSize =
            (15 + Math.random() * 15) + "px";

        piece.style.zIndex = "9999";

        piece.style.pointerEvents = "none";

        piece.style.transition =
            "transform 1s ease, opacity 1s ease";


        document.body.appendChild(piece);


        setTimeout(() => {

            piece.style.transform =
                `translate(${(Math.random() - .5) * 250}px,
                ${150 + Math.random() * 250}px)
                rotate(${Math.random() * 360}deg)`;

            piece.style.opacity = "0";

        }, 50);


        setTimeout(() => {

            piece.remove();

        }, 1200);

    }

}


/* =========================================================
   KEYBOARD ACCESSIBILITY
   ========================================================= */

document.querySelectorAll(".topic-header").forEach(button => {

    button.addEventListener("keydown", function(event) {

        if (event.key === "Enter" || event.key === " ") {

            event.preventDefault();

            toggleTopic(this);

        }

    });

});


/* =========================================================
   INITIAL PROGRESS
   ========================================================= */

updateProgress();