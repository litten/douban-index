/**
 * douban-index bg.js
 * @author littenli
 * @email litten225@qq.com
 * @github 
 *
 */

var Main = (function(){
    //chrome事件初始化
    function listenerInit(){

        /*chrome.extension.onRequest.addListener(
            function(request, sender, sendResponse) {
                if (request.greeting == "hello"){
                    sendResponse({
                        farewell: "farewell"
                    });
                }
            }
        );*/

        chrome.webRequest.onBeforeSendHeaders.addListener(
            function(details){
                var type = details.type;
                var url = details.url;
                var blockingResponse = {};
                if(type == "main_frame" && url.indexOf("http://www.douban.com/") >= 0 && url.indexOf("no_cookie=1") >= 0){
                    var xdata=details.requestHeaders;
                    for(var em in xdata) {
                        console.log(xdata[em]);
                        if(xdata[em]["name"] == "Cookie"){
                            xdata[em]["value"] = "";
                        }                                                                                              
                    }
                    blockingResponse.requestHeaders = xdata;
                    return blockingResponse;
                }
            },
            {urls: ["http://*/*", "https://*/*"]}, 
            ['requestHeaders', 'blocking']
        );

    }
    return {
        init: function(){
            listenerInit();
            
        }
    }
})();

Main.init();