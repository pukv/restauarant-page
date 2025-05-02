export function loadMenuPage() {
  const content = document.querySelector("#content");

  content.innerHTML = "";
  document.body.classList.remove("bg-image-main");
  document.body.classList.add("bg-image");

  // const titleContainer = document.createElement("div");
  // titleContainer.classList.add("title-container");
  // content.append(titleContainer);

  // const title = document.createElement("h1");
  // title.textContent = `Republic Food`;
  // title.classList.add("menu-title");
  // titleContainer.appendChild(title);

  // const secondaryTitle = document.createElement("p");
  // secondaryTitle.textContent = "going strong since 2025";
  // secondaryTitle.classList.add("secondary-title");
  // titleContainer.appendChild(secondaryTitle);
  // const hrElement = document.createElement("hr");
  // hrElement.classList.add("big-hr");
  // titleContainer.appendChild(hrElement);
  function createHeading(primaryText, secondaryText) {
    return new DOMParser().parseFromString(
      `
      <div class="title-container">
        <h1 class="menu-title">${primaryText}</h1>
        <p class="secondary-title">${secondaryText}</p>
        <hr class="big-hr">
      </div>
    `,
      "text/html"
    ).body.firstChild;
  }

  createHeading(`Republic Food`, "going strong since 2025");
}
