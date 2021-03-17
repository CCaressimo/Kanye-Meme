$(document).ready(() =>{
    console.log('jQuery is ready');
})

const $container = $('<div>')

const $title = $('<h1>', {
    text: "God's Response"
})

$container.append($title)
$(document.body).append($container)

const $kanyeAdvice = $('<button>', {
    text: 'Click for Kanye'
})

$kanyeAdvice.appendTo($container)

$kanyeAdvice.on('click', event =>{
    getAdvice()
    .then(Advice => {
        $('.Advice').remove()
        console.log(advice);
        $('<p>', {
            text: Advice
        })
        .addClass('Advice')
        .hide()
        .appendTo($container)
    })
})

function getAdvice() {
    return $.ajax({
        url: 'https://api.kanye.rest',
        headers: {
            'Accept' : 'application/json'
        }
    })
    .then(response => {
        return response.Advice
    })
    .catch(err => {
        return err
    })
}

function searchAdvice(term) {
  return $.ajax({
    url: "https://api.kanye.rest" + term,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.results.map((result) => result.Advice);
      // console.log(response);
    })
    .catch((err) => {
      return err;
    });
}
