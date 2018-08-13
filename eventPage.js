//chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//	if (request.todo == "showPageAction"){
//		chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
//				chrome.pageAction.show(tabs[0].id);
//		});
//	}
//})
var div=document.createElement("div"); 
document.body.appendChild(div); 
div.innerText="test123";