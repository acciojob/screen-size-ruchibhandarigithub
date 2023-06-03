//your JS code here. If required.
function getWindowSize() {
  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  
  const sizeInfoDiv = document.getElementById('sizeInfo');
  const sizeText = `Width: ${width}px<br>Height: ${height}px`;
  
  sizeInfoDiv.innerHTML = `<h1>${sizeText}</h1>`;
}

window.addEventListener('resize', getWindowSize);
I
