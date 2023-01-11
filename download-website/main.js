let input = document.querySelector("input");
let button = document.querySelector(".search button");

button.addEventListener("click", (e) => {
  //   e.preventDefault();
  downloadLink(input.value);
});

function downloadLink(url) {
  fetch(url)
    .then((res) => res.blob())
    .then((file) => {
      let urlObj = URL.createObjectURL(file);

      let a = document.createElement("a");
      a.href = urlObj;
      a.download = "U Downloader";
      document.body.appendChild(a);
      a.click();
      a.remove();
    });
}
