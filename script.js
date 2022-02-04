document.getElementById("form-download").addEventListener("submit", (e) => {
  e.preventDefault();
  toggleModal();
});

document.getElementById("grid-first-name").addEventListener("input", (e) => {
  document.getElementById(
    "title"
  ).innerText = `ICED Theory Canvas for ${e.target.value}`;
});
document.getElementById("closeModal").addEventListener("click", (e) => {
  e.preventDefault();
  toggleModal();
});
document.getElementById("final-download").addEventListener("submit", (e) => {
  e.preventDefault();
  toggleDisplayDownloadButton();
  toggleTitle();
  const user = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const dataToSend = { user, email };
  console.log(dataToSend);
  fetch("https://formspree.io/f/xdobkybg", {
    method: "POST",
    body: JSON.stringify(dataToSend),
  });
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

var yLabels = {
  0: "",
  2: "Low",
  4: "",
  6: "",
  8: "",
  10: "Medium",
  12: "",
  14: "",
  16: "",
  18: "High",
  20: "",
};

var options = {
  type: "line",
  data: {
    labels: [
      "Frequency",
      "Control Over Experience",
      {
        label: "Enagagement",
        expand: true,
        children: [
          "Managing Complexity",
          "Extent of Touch",
          "Strength of hierarchy of engagement",
        ],
      },

      "Distinctive",
    ],
    datasets: [
      {
        label: "Current",
        // data: [4, 4, 4, 4, 4, 4],
        tree: [
          4,
          4,
          {
            value: 4,
            children: [4, 4, 4],
          },
          4,
        ],
        fill: false,
        tension: 0.1,
        borderColor: "rgb(15,153,52,60)",
        backgroundColor: "rgb(15,153,52,60)",
        borderWidth: 4,
      },
      {
        label: "New",
        // data: [16, 16, 16, 16, 16, 16],
        tree: [
          16,
          16,
          {
            value: 16,
            children: [16, 16, 16],
          },
          16,
        ],
        fill: false,
        tension: 0.1,
        borderColor: "rgb(5,68,240,94)",
        backgroundColor: "rgb(5,68,240,94)",
        borderWidth: 4,
      },
    ],
  },
  options: {
    layout: {
      padding: {
        bottom: 30,
      },
    },
    scales: {
      x: {
        type: "hierarchical",
        static: true,
        hierarchyGroupLabelPosition: "center",
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 20,
        ticks: {
          callback: function (value, index, values) {
            return yLabels[value];
          },
        },
        grid: {
          display: false,
        },
      },
    },
    onHover: function (e) {
      const point = e.chart.getElementsAtEventForMode(
        e,
        "nearest",
        { intersect: true },
        false
      );
      if (point.length) e.native.target.style.cursor = "grab";
      else e.native.target.style.cursor = "default";
    },
    plugins: {
      legend: {
        align: "end",
      },
      dragData: {
        round: 1,
        showTooltip: true,
        onDragStart: function (e, datasetIndex, index, value) {
          // console.log(e)
        },
        onDrag: function (e, datasetIndex, index, value) {
          e.target.style.cursor = "grabbing";
          // console.log(e, datasetIndex, index, value)
        },
        onDragEnd: function (e, datasetIndex, index, value) {
          e.target.style.cursor = "default";
          // console.log(datasetIndex, index, value)
        },
      },
    },
  },
};

var ctx = document.getElementById("chartJSContainer").getContext("2d");
window.test = new Chart(ctx, options);
