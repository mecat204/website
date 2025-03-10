// JavaScript Document
window.onload=function(){
   //自动切换背景图片
   /*jquey里面多个属性的写法：
	$('#abc').css({
    'font-size' : '12px',
    '-webkit-border-radius' : '5px',
    'color' : '#cc0000'
	});
 
	$('#abc').css({N
		webkitBorderRadius : '5px',
		color : '#c00'
	});
	
	
	var imgSrcs = ["images/1.jpg", "images/2.jpg", "images/3.jpg"];
	setInterval(function() {
    	$("body").css("background", "url(" + imgSrcs[imgSrcs.push(imgSrcs.shift())-1] + ")");
	}, 1000); // 每5秒自动切换背景图片
	*/
	var oDiv1 = document.getElementById('system_time');
	var oDiv2 = document.getElementById('countdown'); /*countdown:倒计时*/
	var aInp = document.getElementsByTagName('input');
	var iNew = null;
	var iNow = null;
	var t = 0;
	var str = '';
	var str1 = '';
	var timer = null;
	aInp[2].onclick = function(){
		var iNew = new Date(aInp[0].value);
		clearInterval(timer);
		timer = setInterval(function(){
			iNow = new Date();
			t = Math.floor((iNew-iNow)/1000);
			t1 = Math.floor((iNow-iNew)/1000);
			if(t>=0){
				str = fn1(Math.floor(t/86400))+'天'+fn1(Math.floor(t%86400/3600))+'时'+fn1(Math.floor(t%86400%3600/60))+'分'+fn1(t%60)+'秒';
				aInp[1].value = "还有:"+str;  
			}else{
				str1 = fn1(Math.floor(t1/86400))+'天'+fn1(Math.floor(t1%86400/3600))+'时'+fn1(Math.floor(t1%86400%3600/60))+'分'+fn1(t1%60)+'秒';
				aInp[1].value = "已过:"+str1;
				
				}
		},1000);
	}
	
	setInterval(fnTime,1000);
	fnTime();
	function fnTime(){
		var myTime=new Date();
		var iYear=myTime.getFullYear();
		var iMon=myTime.getMonth()+1;
		var iDate=myTime.getDate();
		var iWeek=myTime.getDay();
		var iH=myTime.getHours();
		var iMin=myTime.getMinutes();
		var iSec=myTime.getSeconds();
		var str2='';
		if(iWeek===0) iWeek='星期日';
		if(iWeek===1) iWeek='星期一';
		if(iWeek===2) iWeek='星期二';
		if(iWeek===3) iWeek='星期三';
		if(iWeek===4) iWeek='星期四';
		if(iWeek===5) iWeek='星期五';
		if(iWeek===6) iWeek='星期六';
		str2=iYear+'年'+fn1(iMon)+'月'+fn1(iDate)+'日 '+iWeek+' '+fn1(iH)+':'+fn1(iMin)+':'+fn1(iSec);
		oDiv1.innerHTML=str2+'</br></br>'+'&nbsp;'+'<a href="http://www.baidu.com.cn" style="color:blue" title="百度_天朝的搜索神器！" target="_blank">百度</a>'+' <a href="http://cn.bing.com/"  style="color:blue" title="微软必应搜索-全球搜索，有问必应 (Bing)" target="_blank">必应</a>'+' <a href="https://www.wikipedia.org/"  style="color:blue" title="wikipedia.org" target="_blank">维基百科</a>'+' <a href="http://fanyi.baidu.com/"  style="color:blue" title="translate" target="_blank">百度翻译</a>';
	}
	function fn1(n){
		return n<10?'0'+n:n;
	}
}