document.getElementById("form-download").addEventListener("submit", (e) => {
  e.preventDefault();
  toggleModal();
  // htmlToImage
  //   .toPng(document.getElementById("capture"))
  //   .then(function (dataUrl) {
  //     saveAs(dataUrl, "iced.png");
  //   });
});
document.getElementById("closeModal").addEventListener("click", (e) => {
  e.preventDefault();
  toggleModal();
});
document.getElementById("final-download").addEventListener("submit", (e) => {
  e.preventDefault();
  htmlToImage
    .toPng(document.getElementById("capture"))
    .then(function (dataUrl) {
      saveAs(dataUrl, "iced.png");
    });
});

function toggleModal() {
  document.getElementById("modal").classList.toggle("hidden");
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
