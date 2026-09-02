const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn?.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

navLinks
    ?.querySelectorAll("a")
    .forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
        });
    });

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.1
    }
);

document
    .querySelectorAll(".reveal")
    .forEach((el) => observer.observe(el));

const heroVisual = document.querySelector(".hero-visual");
const card = document.querySelector(".pcb-card");

heroVisual?.addEventListener("mousemove", (e) => {
    const r = heroVisual.getBoundingClientRect();

    const x =
        (e.clientX - r.left - r.width / 2) /
        r.width;

    const y =
        (e.clientY - r.top - r.height / 2) /
        r.height;

    card.style.transform = `
        rotate(-7deg)
        rotateX(${y * -5}deg)
        rotateY(${x * 7}deg)
        translate(${x * 8}px, ${y * 8}px)
    `;
});

heroVisual?.addEventListener("mouseleave", () => {
    card.style.transform = "rotate(-7deg)";
});