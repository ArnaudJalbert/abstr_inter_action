
const canvases = document.querySelectorAll(".pages > .kunz-canvas");
const descriptions = document.querySelectorAll(".pages > .description");

let currentPage = 0;

for (let i = 1; i < canvases.length; i++) {
  canvases[i].style.display = "none";
}

for (let i = 1; i < descriptions.length; i++) {
  descriptions[i].style.display = "none";
}

document.getElementById("next").addEventListener("click", () => {
  // update canvas
  let canvasChanged = false;
  let descriptionChanged = false;
  if (currentPage < canvases.length - 1) {
    canvases[currentPage].style.display = "none";
    canvases[currentPage + 1].style.display = "flex";
    canvasChanged = true;
  }
  // update description
  if (currentPage < descriptions.length - 1) {
    descriptions[currentPage].style.display = "none";
    descriptions[currentPage + 1].style.display = "flex";
    descriptionChanged = true;
  }
  if (descriptionChanged || canvasChanged) {
    currentPage++;
  }
});

document.getElementById("previous").addEventListener("click", () => {
  // update canvas
  if (currentPage > 0) {
    if (currentPage < canvases.length) {
      canvases[currentPage].style.display = "none";
      canvases[currentPage - 1].style.display = "flex";
    }
    // update description
    if (currentPage < descriptions.length) {
      descriptions[currentPage].style.display = "none";
      descriptions[currentPage - 1].style.display = "flex";
    }
    currentPage--;
  }
});

document.getElementById("comeback").addEventListener("click", () => {
  window.location = 'index.html'
})
