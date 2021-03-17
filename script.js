var button = document.querySelector(".submit");

button.addEventListener("click", (name) => {
  fetch("https://api.kanye.rest")
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
    });
});
