window.onload = function(){
			var oDiv = document.createElement("div");
			var str = "";
			for(var i = 0; i < data.length; i++){
				str += '<div class="template"><h3 class="h3">'+ data[i].h3 + '</h3><pre class="pre">' + data[i].pre + '</pre></div>';
				
			};
			oDiv.innerHTML = '<h2>央视1979-2001引进的外国电影和电视剧</h2>' + str;
			var oBody = document.body;
			oBody.appendChild(oDiv);
			// document.getElementsByClassName("类名") 此处必须用双引号 
			var aTemplate = document.getElementsByClassName("template"); 
			var aH3 = document.getElementsByClassName("h3"); 
			var aPre = document.getElementsByClassName("pre"); 
			for(var i = 0; i < aTemplate.length; i++){
				aTemplate[i].style.cssText = `
					min-width: 500px;
					min-height: 300px;
					border: 1px solid #59C3A8;
					border-radius: 5px;
					margin-bottom: 10px;

				`;
				aH3[i].style.cssText = `

					text-align: left;
					margin-left:2em;
					color: #4E76CD;

				`;
				aPre[i].style.cssText = `
					width: auto;
					height: auto;
					margin-left:-2em;
					line-height:30px;
					font-size: 16px;
					color: #4E76CD;
					font-weight:bolder;
				`;
			}
			oDiv.style.cssText = `
  				column-gap: 5px; /* 列之间的间距 */
  				column-count: 4; /* 每行显示的列数 */

  			`
}
