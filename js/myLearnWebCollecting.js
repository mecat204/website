// JavaScript Document
window.onload = function(){
	var oBody = document.body;
	var oS = oBody.style;
	var imgar = [];
	function eightImg(){
        for(i=1;i<9;i++){
          imgar[i] = new Image();
          imgar[i].src = "images/"+i+".jpg"; 
          imgar[i].onload=function(){
              this.width = 960;
              this.height = 380;
          }
        }
    }
	function BgChange(){
	    oS.backgroundImage = 'url(images/'+(parseInt(Math.random() * 10) + 1)+'.jpg)';	
	}
	function BgPosition(){
		oS.backgroundRepeat = 'repeat-x';
		oS.backgroundPosition = 'center';
		oS.backgroundAttachment = 'fixed';	
	}
	function LoadMethod(){
		BgChange();
		BgPosition();	
	}
	setInterval(LoadMethod,10000);
}
