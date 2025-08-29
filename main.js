const closeButton = document.getElementById("close-button");
const openButton = document.getElementById("open-button");
const menu = document.getElementById("main-navigation");
const dialog = menu.querySelector("dialog");
closeButton.addEventListener("click", () => {
  dialog.close();
});
openButton.addEventListener("click", () => {
  dialog.showModal(true);
});
