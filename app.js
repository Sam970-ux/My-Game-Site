const express = require("express");
const fs = require("fs");
const http = require("http");
const app = express();
const port = 80;
const path = require("path");


app.use('/static', express.static('static'));

//using img directory that has images to access them.
//app.use(express.static('img'));

app.set('view engine', 'pug');
app.use(express.urlencoded())

app.set('views', path.join(__dirname, 'views'));

//___________________________________________________________
// EXPRESS GET REQUESTS for loading pages.
app.get('/', (req,res)=>{
	res.render("home.pug");
//	res.render("index.pug");
})

app.get('/webSites', (req,res)=>{
	res.render("projects.pug");
})

app.get('/logos', (req,res)=>{
	res.render("logos_page.pug");
})

app.get('/1', (req,res)=>{
	res.render("1.pug");
})

app.get('/2', (req,res)=>{
	res.render("2.pug");
})

app.get('/3', (req,res)=>{
	res.render("3.pug");
})

app.get('/4', (req,res)=>{
	res.render("4.pug");
})

app.get('/5', (req,res)=>{
	res.render("5.pug");
})

app.get('/6', (req,res)=>{
	res.render("6.pug");
})



//_________________________________________________
app.listen(port,()=>{
	console.log(`app started successfully at port ${port}`);
})
