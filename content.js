//chrome.runtime.sendMessage({todo: "showPageAction"});
function changeText() {
//var domains = document.getElementsByClassName('style-scope ytd-watch');
//  for(var i = 0; i < domains.length; i++){
//    var links =  domains.getElementsByClassName('style-scope ytd-watch-next-secondary-results-renderer')[i];
//    var links2 = links.getElementsByClassName('style-scope ytd-compact-autoplay-renderer use-ellipsis');
//    var links3 = links2.getElementsByClassName('style-scope ytd-compact-video-renderer');
//    var link = links3.getElementsByTagName("a").attributes['href'];
//    console.log(link.value);
//  }
  var link = document.getElementsByClassName('yt-simple-endpoint inline-block style-scope ytd-thumbnail');
//var a = document.getElementsByClassName("yt-simple-endpoint").getAttribute("href");
//var a = document.getElementsByClassName('yt-simple-endpoint')[0].children.href;
//var b = document.getElementById("video title").getAttribute("href");
//  console.log(a); yt-simple-endpoint inline-block style-scope ytd-thumbnail
                  //yt-simple-endpoint inline-block style-scope ytd-thumbnail
  console.log(link.length);
  console.log(link[0].href);
  var lista = []
  for(var i = 0; i < link.length; i++){
    var n = link[i].href.indexOf("=");
    lista[lista.length] = link[i].toString().substring(n+1);

  }
  console.log(lista.toString());
  var a = videosGetRating({'id': lista.toString()})
  console.log(a);

}

function videosGetRating(request) {
  //params = removeEmptyParams(params);
  //var request = gapi.client.youtube.videos.getRating(params);
  request.execute();
  //executeRequest(request);
}



changeText();
//videosGetRating({'id': 'Ks-_Mh1QhMc,c0KYU2j0TM4,eIho2S0ZahI'});
//chrome.browserAction.onClicked.addListener(function(tab) {
  //chrome.tabs.executeScript({
    //file: "insert.js"
    //console.log(5);


//  });
//});
