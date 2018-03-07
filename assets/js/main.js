console.log("Link Test");

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "6fb325e9f01045fda6bff46cf066427c",
  'p': "trump"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result.response);
}).fail(function(err) {
  throw err;
});