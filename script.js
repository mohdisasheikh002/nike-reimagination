gsap.registerPlugin(ScrollTrigger);
var counter = document.querySelector(".counter");

gsap.to(counter, {
  scrollTrigger: {
    trigger: ".sec7",
    start: "top 0%",
  },
  onUpdate: () => {
    let flag = 0;

    setInterval(() => {
      if (flag == 500) {
        clearInterval();
      } else {
        flag += 1;
        counter.textContent = flag + " ";
      }
    });
  },
});
