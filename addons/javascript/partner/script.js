document.addEventListener("DOMContentLoaded", () => {
    const moreButtons = document.querySelectorAll(".more-btn-p");
    const textContent = document.getElementById("text-content");
    if (textContent) {
      textContent.innerHTML = textContent.innerHTML
        .replace(/\n\s*\n/g, '<br><br>')
        .replace(/\n/g, '<br>');
    }

    moreButtons.forEach(button => {
        button.addEventListener("click", () => {
            const textElement = button.previousElementSibling;

            textElement.classList.toggle("expanded");
            if (textElement.style.whiteSpace === "normal") {
                textElement.style.whiteSpace = "pre-wrap";
                textElement.style.maxHeight = "5.1rem";
                textElement.style.overflow = "hidden";
                button.textContent = "Mehr...";
            } else {
                textElement.style.whiteSpace = "normal";
                textElement.style.maxHeight = "none";
                textElement.style.overflow = "visible";
                button.textContent = "Weniger...";
            }
        });
    });
});
