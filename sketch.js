let userinput;

function setup() {
  createCanvas(400, 400);
  
  userinput = select("#startnode");
  userinput.changed(gowiki);

function gowiki() {
  
  var url
  
  if (document.getElementById("french").checked) {
    url = "https://fr.wikipedia.org/w/api.php";
  } else {
    url = "https://en.wikipedia.org/w/api.php";
  }

  var params = {
    action: "query",
    format: "json",
    titles: userinput.value(),
    prop: "links",
    pllimit: 500
  };

  url = url + "?origin=*";
  Object.entries(params).forEach(function([key, value]){url += "&" + key + "=" + value;});

  fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {
        var pages = response.query.pages;
        for (var p in pages) {
            for (var l of pages[p].links) {
                console.log(l.title);
            }
        }
    })
    .catch(function(error){console.log(error);});
  }
}

function draw() {
  background(220);
}