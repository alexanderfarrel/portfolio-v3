export default function BtnRipple({ e, parent, parentRect, path = "" }) {
  const x = e.clientX - parentRect?.x;
  const y = e.clientY - parentRect?.y;

  const ripples = document.createElement("span");
  ripples.classList.add("btn-ripple-span");
  ripples.style.left = `${x}px`;
  ripples.style.top = `${y}px`;
  parent.current.appendChild(ripples);
  setTimeout(() => {
    ripples.remove();
    if (path) window.location.href = path;
  }, 500);
}
