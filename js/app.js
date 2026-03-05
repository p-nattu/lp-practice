document.addEventListener("DOMContentLoaded", () => {
    const table = document.querySelector(".plan_table");
    const rows = table.querySelectorAll("tbody tr");

    // 0.2秒間隔で表示
    rows.forEach((row, index) => {
        row.style.animationDelay = `${(index + 1) * 0.2}s`;
    });
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                table.classList.add("is-inview");
            } else {
                table.classList.remove("is-inview");
            }
        });
    }, {
        threshold: 0.5
    });
    observer.observe(table);
});