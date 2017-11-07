var results = document.getElementById('results');
var searchResults = document.getElementById('search-results');
var submit = document.getElementById('button');

var gifObject;
var gifUrl;

searchGifs();
function clicked() {
  submit.addEventListener('click', searchGifs);
};

function searchGifs() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      gifObject = JSON.parse(xhr.responseText);
      gifUrl = gifObject.data.image_url;
      image.src = gifUrl;
    }
  };

  xhr.open("GET", "https://api.giphy.com/v1/gifs/random?api_key=OlQPATAEpuqDQXxluhspjJNoqHtQjSFK&tag=rupaul", true);
  xhr.send();


  console.log("click");

}
clicked();
