console.log("Link Test");
var $articles = $(".articles"); 
var $searchTerm;
var $pages ;
var $search = $("#search");
var $startYear = $("#startYear");
var $endYear = $("#endYear");
var theArticles;

$search.on("click", function(){
  $search = $("#search");
  $startYear = $("#startYear");
  $endYear = $("#endYear");
  $searchTerm = $("#searchTerm").val()
  $pages = $('select.form-control option:checked').val();
  $pages = parseInt($pages);
  $startYear = $startYear.val().toString()+"0101";
  $startYear = parseInt($startYear);
  $endYear = $endYear.val().toString()+"1231";
  $endYear = parseInt($endYear);
  console.log(typeof $endYear);
  console.log("End Year " + $endYear);
//})
if ($startYear == 101 && $endYear == 1231){
  console.log("first");
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
  'api-key': "6fb325e9f01045fda6bff46cf066427c",
  'q': $searchTerm,  
  'page':  $pages,
   
    });
ajaxFunc(url);
}
else if ($startYear!= 101 && $endYear!= 1231){
  console.log("second");
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "6fb325e9f01045fda6bff46cf066427c",
  'q': $searchTerm,  
  'page':  $pages,
  'begin_date': $startYear,
  'end_date': $endYear,
 
});
ajaxFunc(url);
}
else {
 alert("Missing other year");

}

})
$("#clear").on("click", function(){
  clear();
})
function ajaxFunc(url){
  $.ajax({
    url: url,
    method: 'GET',
  }).done(function(result) {
      console.log(result.response.docs[0].web_url);
      var searchLength = result.response.docs;
  for (var i = 0; i <searchLength.length; i++){
    console.log("checking: " + searchLength.length);
    theArticles = result.response.docs[i].web_url;
    $articles.prepend("<a id='anchors' href= "+theArticles+">"+theArticles+"</a></br>");
    //console.log("Results: " + result.response.docs[i].web_url);
    console.log("Results: " + theArticles);
  }
  }).fail(function(err) {
    throw err;
  });
}
function clear(){
    $("a").remove();
}
// https://api.nytimes.com/svc/search/v2/articlesearch.json
// ?api-key=6fb325e9f01045fda6bff46cf066427c&q=trump
// &begin_date=19000101&end_date=20180306
//console.log(url);

// $.ajax({
//   url: url,
//   method: 'GET',
// }).done(function(result) {
  
//     var searchLength = result.response.docs;
// for (var i = 0; i <searchLength.length; i++)
//   console.log("Results: " + result.response.docs[i].web_url);
// }).fail(function(err) {
//   throw err;
// });