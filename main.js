// Select all items once
const items = document.querySelectorAll(".item");

// Core ripple function
function triggerRipple(element, x, y) {
  element.style.setProperty("--ripple-x", x + "px");
  element.style.setProperty("--ripple-y", y + "px");

  element.classList.remove("active");
  void element.offsetWidth;
  element.classList.add("active");
}

// Add listeners
items.forEach(item => {
  item.addEventListener("mousedown", e => {
    const rect = item.getBoundingClientRect();
    triggerRipple(item, e.clientX - rect.left, e.clientY - rect.top);
  });

  item.addEventListener("touchstart", e => {
    const t = e.touches[0];
    const rect = item.getBoundingClientRect();
    triggerRipple(item, t.clientX - rect.left, t.clientY - rect.top);
  }, { passive: true });
});
