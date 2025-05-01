export function loadContactPage() {
  const content = document.querySelector("#content");

  content.innerHTML = "";
  document.body.classList.remove("bg-image-main");
  document.body.classList.add("bg-image");
}
