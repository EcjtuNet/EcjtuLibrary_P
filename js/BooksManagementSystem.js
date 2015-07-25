
var aid=1,opacity=0;/****检索模块中昌北高校..循环出现消失****/
function Show(){
	if(aid <= 9){
		if(opacity<1){
			opacity+=0.01;
			getById("Nav"+aid).style.opacity=opacity;
		}else{
			opacity=0;
			aid++;
		}
	}
	if(aid > 9){
		for (var i = 1; i <= 9; i++) {
			getById("Nav"+i).style.opacity=0;
		}
		aid=1;
		opacity=0;
		Show();
	}
}
setInterval(Show,10);
function getById(id){
	return document.getElementById(id);
}

function changeguide(j){/****检索模块中指向图标以及选中字体的变化****/
	var searchContentGuide=document.getElementById('searchContentguide');
	var m=52*(j-1)+7;
	searchContentGuide.style.left=m+'px';
	for(var n=1;n<=8;n++){
		var Gudie=document.getElementById("guide"+n);
		Gudie.style.color="#000";
	}
	var Gudie=document.getElementById("guide"+j);
	Gudie.style.color="#18bd9b";
}

function searchTxt(i){/****检索模块中选择图标的变化****/
	if(i==1){
		document.all.searchSubmit1.src="./images/BooksManagementSystem_97_2.png";
		document.all.searchSubmit2.src="./images/BooksManagementSystem_97.png";
		document.all.searchSubmit3.src="./images/BooksManagementSystem_97.png";
	}
	else{
		if(i==2){
			document.all.searchSubmit1.src="./images/BooksManagementSystem_97.png";
			document.all.searchSubmit2.src="./images/BooksManagementSystem_97_2.png";
			document.all.searchSubmit3.src="./images/BooksManagementSystem_97.png";
		}
		else{
			document.all.searchSubmit1.src="./images/BooksManagementSystem_97.png";
			document.all.searchSubmit2.src="./images/BooksManagementSystem_97.png";
			document.all.searchSubmit3.src="./images/BooksManagementSystem_97_2.png";
		}
	}
}

function Over1(){/****动态模块中公告新闻和资源动态切换****/
	var changeColor1=document.getElementById("trendsNews");
	changeColor1.style.backgroundColor="#fff";
	changeColor1.style.color="#18bd9b";
	var changeColor2=document.getElementById("trendsResource");
	changeColor2.style.backgroundColor="#18bd9b";
	changeColor2.style.color="#fff";
	var changeBlock1=document.getElementById("trendsNewsmessage");
	changeBlock1.style.display="block";
	var changeBlock2=document.getElementById("trendsResourcemessage");
	changeBlock2.style.display="none";
}
function Over2(){
	var changeColor1=document.getElementById("trendsNews");
	changeColor1.style.backgroundColor="#18bd9b";
	changeColor1.style.color="#fff";
	var changeColor2=document.getElementById("trendsResource");
	changeColor2.style.backgroundColor="#fff";
	changeColor2.style.color="#18bd9b";
	var changeBlock1=document.getElementById("trendsNewsmessage");
	changeBlock1.style.display="none";
	var changeBlock2=document.getElementById("trendsResourcemessage");
	changeBlock2.style.display="block";
}