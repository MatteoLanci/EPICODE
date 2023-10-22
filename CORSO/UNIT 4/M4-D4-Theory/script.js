function randomBg() {
  const body = document.querySelector("body");
  //   console.log(body);
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const rgb = `rgb(${red}, ${green}, ${blue})`;
  body.style.backgroundColor = `${rgb}`;
}
