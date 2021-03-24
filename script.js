var API_KEY = config.API_KEY
var button = document.getElementById("wisdom");

button.addEventListener("click", (name) => {
  // window.location.reload();
  getQuote();
  
function getQuote() {
  fetch("https://api.kanye.rest")
    .then((resp) => resp.json())
    .then(data => {
      var showQuote = document.getElementById("quote");
      var kanyeQuote = data["quote"];
      showQuote.innerHTML = '"' + kanyeQuote + '"';
    });
    
}

fetch(
  `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=kanyememe&format=json&nojsoncallback=1`
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

