let webContainer = document.getElementById('container_webs');

let webNames = [ 'webNames_1', 'webNames_2', 'webNames_3', 'webNames_4', 'webNames_5', 'webNames_6'];
let webSite = [ '1.pug', '2.pug', '3.pug', '4.pug', '5.pug', '6.pug'];
let webSiteCode = [ '/1', '/2', '/3', '/4', '/5', '/6'];


for(let i=0; i<7; i++)
{
	let webObj = document.createElement('a');
	webObj.classList.add('web_Obj');
	
	webObj.href = webSiteCode[`${i}`];
//	webObj.href = webNames[`${i}`];
	
	webContainer.appendChild(webObj);
	console.log(i);
}

let webObj = Array.from(document.getElementsByClassName('web_Obj'));

webObj.forEach((element, i)=>{
	
let webImg = document.createElement('img');
	webImg.classList.add('web_img');
	element.appendChild(webImg);

let webTxt = document.createElement('div');
	webTxt.classList.add('web_txt');
	webTxt.textContent = webNames[`${i}`];
	element.appendChild(webTxt);	
	
})

let web_Img = Array.from(document.getElementsByClassName('web_img'));

web_Img.forEach((element, i)=>{
	
	element.src = `../static/${i+1}.png`;
	
})