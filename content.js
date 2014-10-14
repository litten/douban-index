if((/[a-z]+.douban.com/).test(window.location.host)){

	function getQuery(name) {
	    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	    var r = window.location.search.substr(1).match(reg);
	    if (r != null) return unescape(r[2]); return null;
    }

    if(getQuery("no_cookie")){
    	document.getElementById("anony-reg").remove();
    }else{
    	if(document.getElementById("db-nav-sns")){
    		var $nav = document.getElementById("db-nav-sns").getElementsByClassName("nav-items")[0].getElementsByTagName("ul")[0];
			var $li = document.createElement("li");
			var $a = document.createElement("a");
			$a.href = "http://www.douban.com/?no_cookie=1";
			$a.target = "_blank";
			$a.innerHTML = "默认首页";
			$li.appendChild($a);
			$nav.insertBefore($li, $nav.getElementsByTagName("li")[1]);
    	}
    	if(document.getElementById("db-global-nav")){
    		var $menu = document.getElementById("db-global-nav").getElementsByClassName("global-nav-items")[0].getElementsByTagName("ul")[0];
			var $li2 = document.createElement("li");
			var $a2 = document.createElement("a");
			$a2.href = "http://www.douban.com/?no_cookie=1";
			$a2.target = "_blank";
			$a2.innerHTML = "默认首页";
			$li2.appendChild($a2);
			$menu.insertBefore($li2, $menu.getElementsByTagName("li")[1]);
    	}
    }
}