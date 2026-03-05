document.addEventListener("DOMContentLoaded", () => {
    const imgs = document.querySelectorAll(".skills_block ul li .img");
    imgs.forEach((img) => {
        let animation = null;

        // hover開始
        img.addEventListener("mouseenter", () => {
            if (animation) animation.cancel();
            animation = img.animate([
                { transform: "rotateY(-10deg) rotateZ(0deg) translateY(-2px)" },
                { transform: "rotateY(-16deg) rotateZ(2deg) translateY(-7px)" },
                { transform: "rotateY(-14deg) rotateZ(1.2deg) translateY(-6px)" }
            ], {
                duration: 450,
                easing: "ease-in-out",
                fill: "forwards"
            });
            img.style.filter = "drop-shadow(0 18px 22px rgba(0,0,0,.20))";
        });
        img.addEventListener("mouseleave", () => {
            if (animation) animation.cancel();
            img.style.transform = "rotateY(0deg) rotateZ(0deg) translateY(0)";
            img.style.filter = "drop-shadow(0 10px 14px rgba(0,0,0,.14))";
        });
    });
});