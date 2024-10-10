//let logo_Container = document.getElementById('container_logos');
let logo_Container = document.getElementById('has_logos');

for(let i=0; i<8; i++){
	
let img_Object = document.createElement('div');
img_Object.classList.add('my_logo');

logo_Container.appendChild(img_Object);

}

let logo_boxes = Array.from(document.getElementsByClassName('my_logo'));

logo_boxes.forEach((element, i)=>{
	
	element.setAttribute('id', `${i+1}`);
	let logo_img = document.createElement('img');
	logo_img.classList.add('logo_img');
	element.appendChild(logo_img);
	
})

let logo_img = Array.from(document.getElementsByClassName('logo_img'));

logo_img.forEach((element, i)=>{
	element.src = `../static/${i+1}.png`;
})
