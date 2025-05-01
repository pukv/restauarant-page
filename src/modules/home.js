export default function loadHomePage() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
  document.body.classList.remove("bg-image");
  document.body.classList.add("bg-image-main");

  const mainTitle = document.createElement("h1");
  mainTitle.textContent = "Can you keep a secret?";
  content.append(mainTitle);

  const hypeText = document.createElement("h2");
  hypeText.textContent = `Our food actually looks like the photos. 
The Republic's dishes are camera-ready and flavor-packed – no deceptive 
foodography here!`;
  content.append(hypeText);
}
