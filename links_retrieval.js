function is_valid_link(page_title, language_code) {
  var url;
  
  url = "https://" + language_code + ".wikipedia.org/w/api.php";

  var params = {
    action: "query",
    format: "json",
    titles: page_title
  };

  url = url + "?origin=*";
  Object.entries(params).forEach(function([key, value]){url += "&" + key + "=" + value;});
  
  var page = fetch(url)
    .then(function(response){return response.json();})
    .then(function(response){return response.query.pages;})
  
  if (Object.keys(page)[0] == -1) {
    return false
  } else {
    return true}
}


function get_wiki_links(page_title, language_code) {
  var url;
  var links = [];

  url = "https://" + language_code + ".wikipedia.org/w/api.php";

  var params = {
    action: "query",
    format: "json",
    titles: page_title,
    prop: "links",
    pllimit: 50
  };

  url = url + "?origin=*";
  Object.entries(params).forEach(function([key, value]){url += "&" + key + "=" + value;});

  fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {
        var pages = response.query.pages;
        for (var p in pages) {
            for (var l of pages[p].links) {
                append(links, l.title);
            }
        }
    })
    .catch(function(error){console.log(error);});
  
  return links;
}
