import { useEffect } from "react";

const ScrollObserver = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");

            if (
              entry.target.classList.contains("text-reveal-wrapper") ||
              entry.target.querySelector(".text-reveal-wrapper") ||
              entry.target.id === "hero-title"
            ) {
              entry.target.classList.add("reveal-active");
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document
      .querySelectorAll(".motion-enter, .animate-on-scroll")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
};

export default ScrollObserver;
