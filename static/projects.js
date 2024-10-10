// PROJECT PAGE URL AND IMAGES RELATED CODE:

let static_div = document.getElementById("static_urls");
// let fullstack_div = document.getElementById("fullstack_urls");

for(i=0;i<1;i++){
	
	let web_box = document.createElement("div");
	web_box.classList.add("web_box");
	web_box.setAttribute("id",`${i}`);
	
	static_div.appendChild(web_box);
}
/*
for(i=0;i<2;i++){
	
	let web_box = document.createElement("div");
	web_box.classList.add("web_box");
	web_box.setAttribute("id",`${i+2}`);
	
	fullstack_div.appendChild(web_box);
}

let URL_names = [{text_content:"Music website static project", url:"https://music-1-royaltyfree-77wl.onrender.com/"}, {text_content:"Video-web website", url:"https://video-web-com.onrender.com/"}, {text_content:"Smiley foods restaurant websites", url:"https://smileyfoods-service-io.onrender.com/"}, {text_content:"Buy-karo ecommerce website", url:"https://buykaro-24-7.onrender.com"}, {text_content:"Royal-Gym website fullstack ", url:"https://royal-gym.onrender.com"}];
*/

let URL_names = [{text_content:"Catz Blaze Game", url:"/"}];

let web_box_Array = Array.from(document.getElementsByClassName("web_box"));

web_box_Array.forEach((element,i)=>{
	
		let web_show_logo = document.createElement("img");
	web_show_logo.classList.add("web_show_logo");
	web_show_logo.setAttribute("id",`show_logo${i}`);
	web_show_logo.src=`../static/show_logo${i+1}.png`;
	element.appendChild(web_show_logo);
	
	let web_img = document.createElement("img");
	web_img.classList.add("web_img");
	web_img.setAttribute("id",`img${i}`);
	web_img.src=`../static/bg${i+1}.png`;
	element.appendChild(web_img);
	
	let web_Name = document.createElement("a");
	web_Name.classList.add("web_Name");
	web_Name.setAttribute("id",`web_Name${i}`);
	web_Name.href = URL_names[i].url;
	web_Name.innerText = URL_names[i].text_content;
	element.appendChild(web_Name);
})
/*
let inner_logo = Array.from(document.getElementsByClassName("web_img"));

inner_logo.forEach((element,i)=>{
	
	let web_show_logo = document.createElement("img");
	web_show_logo.classList.add("web_show_logo");
	web_show_logo.setAttribute("id",`show_logo${i}`);
	web_show_logo.src=`../static/show_logo${i+1}.png`;
	element.appendChild(web_show_logo);
	
})
*/