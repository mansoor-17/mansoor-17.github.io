document.getElementById("download").addEventListener("click", () => {
  var node = document.getElementById("capture");

  htmlToImage
    .toPng(document.getElementById("capture"))
    .then(function (dataUrl) {
      download(dataUrl, "my-node.png");
    });
});
