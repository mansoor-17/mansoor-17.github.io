document.getElementById("download").addEventListener("click", () => {
  htmlToImage
    .toPng(document.getElementById("capture"))
    .then(function (dataUrl) {
      saveAs(dataUrl, "iced.png");
    });
});

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
