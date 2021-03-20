var button = document.getElementById("wisdom");

button.addEventListener("click", (name) => {
  getQuote();

  function getQuote() {
    fetch("https://api.kanye.rest")
      .then((resp) => resp.json())
      .then(data => {
        document.getElementById("quote").innerHTML = data.quote;

        fetch(
          `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=9a41f07944363a7bbd088bbe8bf52217&tags=kanyememe&format=json&nojsoncallback=1`
        )
          .then((res) => res.json())
          .then((data) => addKanye(data))

          function kanyeArray() {
            return Math.floor(Math.random() * Math.floor(13));
          }

          var addKanye = (data) => {
              console.log(data);
              console.log(kanyeArray());
              var kanyeCode = data.photos.photo[kanyeArray()]
              var kanyeUrl = `http://live.staticflickr.com/${kanyeCode.server}/${kanyeCode.id}_${kanyeCode.secret}.jpg`;

              var kanyeImg = document.getElementById("kanyeImg");
              kanyeImg.src = kanyeUrl;
          };

      });
  }
});
