document.getElementById("download").addEventListener("click", () => {
  toggleModal();
  // htmlToImage
  //   .toPng(document.getElementById("capture"))
  //   .then(function (dataUrl) {
  //     saveAs(dataUrl, "iced.png");
  //   });
});
document.getElementById("closeModal").addEventListener("click", () => {
  toggleModal();
});
document.getElementById("final-download").addEventListener("click", () => {
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
