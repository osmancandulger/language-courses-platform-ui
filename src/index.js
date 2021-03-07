const listItem = document.querySelectorAll("li");
listItem.forEach((e) => {
  e.addEventListener("click", () => {
    const active = document.querySelector(".active");

    if (active) {
      active.classList.remove("active");
    }
    e.classList.toggle("active");
  });
});
const listType = document.querySelectorAll("ul");
