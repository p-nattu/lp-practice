document.addEventListener("DOMContentLoaded", () => {
    const layers = document.querySelectorAll(".wave-parallax > use");
    if (!layers.length) return;

    // CSSのkeyframesと同じ移動量
    const FROM_X = -90;
    const TO_X = 85;
    const configs = [
        { duration: 9000, delay: -2000 }, // nth-child(1)
        { duration: 12000, delay: -3000 }, // nth-child(2)
    ];
    layers.forEach((el, i) => {
        const cfg = configs[i] ?? { duration: 12000, delay: 0 };
        el.animate(
            [
                { transform: `translate3d(${FROM_X}px, 0, 0)` },
                { transform: `translate3d(${TO_X}px, 0, 0)` },
            ],
            {
                duration: cfg.duration,
                delay: cfg.delay,
                iterations: Infinity,
                easing: "linear",
            }
        );
    });
});