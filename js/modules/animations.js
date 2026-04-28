export function initScrollReveals() {
    const reveals = document.querySelectorAll('.reveal');
    const options = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    obs.unobserve(entry.target); // Unobserve to play animation only once
                }
            });
        }, options);

        reveals.forEach(reveal => observer.observe(reveal));
    } else {
        // Fallback if IntersectionObserver is not supported
        reveals.forEach(reveal => reveal.classList.add('active'));
    }
}
