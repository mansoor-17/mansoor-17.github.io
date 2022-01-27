document.getElementById("form-download").addEventListener("submit", (e) => {
  e.preventDefault();
  toggleModal();
  // htmlToImage
  //   .toPng(document.getElementById("capture"))
  //   .then(function (dataUrl) {
  //     saveAs(dataUrl, "iced.png");
  //   });
});

document.getElementById("grid-first-name").addEventListener("input", (e) => {
  document.getElementById(
    "title"
  ).innerText = `Iced Score for ${e.target.value}`;
});
document.getElementById("closeModal").addEventListener("click", (e) => {
  e.preventDefault();
  toggleModal();
});
document.getElementById("final-download").addEventListener("submit", (e) => {
  e.preventDefault();
  toggleDisplayDownloadButton();
  toggleTitle();
  htmlToImage
    .toPng(document.getElementById("capture"))
    .then(function (dataUrl) {
      saveAs(dataUrl, "iced.png");
      toggleDisplayDownloadButton();
      toggleTitle();
    });
});

function toggleDisplayDownloadButton() {
  document.getElementById("product-desc").classList.toggle("hidden");
}

function toggleModal() {
  document.getElementById("modal").classList.toggle("hidden");
}

function toggleTitle() {
  document.getElementById("title").classList.toggle("hidden");
}

function saveAs(uri, filename) {
  var link = document.createElement("a");
  if (typeof link.download === "string") {
    link.href = uri;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    window.open(uri);
  }
}

const allSliders = document.querySelectorAll(".range-slider");
allSliders.forEach((ranges) => {
  const sliders = ranges.querySelectorAll(".range");
  let s1 = sliders[0];
  let current = ranges.querySelector(".current");
  let s2 = sliders[1];
  let news = ranges.querySelector(".new");
  s1.addEventListener("input", () => {
    setBubble(s1, current);
  });
  setBubble(s1, current);
  s2.addEventListener("input", () => {
    setBubble(s2, news);
  });
  setBubble(s2, news);
});

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));

  // Sorta magic numbers based on size of the native UI thumb
  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}
