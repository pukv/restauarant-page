export default (function loadPage() {
  const content = document.querySelector("#content");
  const mainTitle = document.createElement("h1");
  mainTitle.textContent = "Do you want us to tell you a secret?";
  content.append(mainTitle);
})();

const hypeText = document.createElement("h2");
hypeText.textContent =
  "Warning: Our food actually looks like the photos. The Republic's dishes are camera-ready and flavor-packed – no deceptive foodography here!";
content.append(hypeText);
