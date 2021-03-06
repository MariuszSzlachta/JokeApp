var button = document.querySelector('.get-joke');
var output = document.querySelector('.joke');

var url = 'https://api.icndb.com/jokes/random';

button.addEventListener('click', function(){
  getJoke();
});

function getJoke(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', function(){
    var response = JSON.parse(xhr.response)
    output.innerHTML = response.value.joke;
  });

  xhr.send();
}

window.addEventListener('load', function(){
  getJoke();
})