var matrix = "ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ".split(""), imatrix = [];
var input = "Enter our world.";
var mloop;
var mcount = 0;

window.addEventListener("load", function(){
	for(var i=0;input.length>i;i++){
		var mc = document.createElement("div");
		mc.setAttribute("class", "matrixtext");
		mc.innerHTML = input.charAt(i) == " " ? "&nbsp;": matrix[Math.floor(Math.random()*matrix.length)];
		document.body.appendChild(mc);
		imatrix.push({letter: input.charAt(i) == " " ? "&nbsp;": input.charAt(i), element: mc});
  }
	
	mloop = setInterval(function(){
		var a = Math.floor(Math.random()*imatrix.length);
		var b = Math.floor(Math.random()*100+1);
		if(imatrix[a].element.innerHTML == imatrix[a].letter) return false;
		if(b <= 3){
			imatrix[a].element.innerHTML = imatrix[a].letter;
			imatrix[a].element.style.textShadow = "none";
			mcount++;
		}else{
			imatrix[a].element.innerHTML = matrix[Math.floor(Math.random()*matrix.length)];
		}
		if(mcount >= imatrix.length) return clearInterval(mloop);
	}, 10);
	
}, false);