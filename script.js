window.addEventListener("message", (event) => {
  document.getElementById("error").innerHTML = event.data;
});
