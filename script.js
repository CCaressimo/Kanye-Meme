var API_KEY = config.API_KEY
var button = document.getElementById("wisdom");

function setHalfVolume() {
  var myAudio = document.getElementById("sound1");
  let audio = myAudio;

  let volume = document.querySelector("#volume-control");
  volume.addEventListener("change", function (e) {
  audio.volume = e.currentTarget.value / 100;
}); //Changed this to 0.5 or 50% volume since the    function is called Set Half Volume ;)
}



button.addEventListener("click", (name) => {
  // window.location.reload();
  getQuote();
  
function getQuote() {
  fetch("https://api.kanye.rest")
    .then((resp) => resp.json())
    .then(data => {
      var showQuote = document.getElementById("quote");
      var kanyeQuote = data["quote"];
      showQuote.innerHTML = 'Kanye West - ' +' "' + kanyeQuote + '"';
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

