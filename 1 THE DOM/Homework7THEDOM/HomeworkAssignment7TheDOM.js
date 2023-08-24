/* 

Homework Assignment #7: The DOM


Details:
 
Create a very simple webpage, displaying some of your favorite colors. Use HTML, CSS and Javascript.

1. The top of the page should include a header <h1> tag, with a name for your page, and then an <h2> tag with a description of what's on the page.

2. Further down the page you should draw 10 rectangles, of any size you wish, and give them each a unique hex-code so they all appear as different colors.
 Here's a color-picker that might help.

3. Below each rectangles, list the hex code (in plain text).

4. Give all of the rectangles the same class, but make sure each rectangle has a unique ID.

5. Wrap all of the rectangles in an containing element ( a <div> ) and give that element the id "rectangleWrapper". 
Now give that element 50 pixels of padding on its top, right and left sides. But add zero padding to the bottom.

6. When the page loads, console.log the messages "Here are the rectangle IDs" and then console.log all the rectangles' IDs, one at a time.

7. In the <head> of the document, add a <title> tag that matches the text in the <h1> you added in step 1.

*/
const HomeWork_website = {
	title : "The DOM Assignement",
	page_title : "Homework Assignment #7: The DOM",
	page_description : "Displaying Randomly background color on div using DOM",
	page_footer : " &copy; Copyright 2021 andremugabo@yahoo.fr"
};

const header = document.querySelector("header");
const footer =document.querySelector("footer");

// 


const upDiv = document.createElement("div");
const dwDiv = document.createElement("div");

header.appendChild(upDiv);
upDiv.classList.add("upDiv");
const sub1UpDiv = document.createElement("div");
const sub2UpDiv = document.createElement("div");
const upDivUl  = document.createElement('ul');

upDiv.appendChild(sub1UpDiv);
const subLImg   = document.createElement("img");
const subLspan   = document.createElement("span");
const upLimg    = sub1UpDiv.appendChild(subLImg);
const upspan    = sub1UpDiv.appendChild(subLspan);
sub1UpDiv.classList.add("upDivImg");
upLimg.setAttribute("src","Pirple1.png");
upspan.innerHTML = "pirple.com";

const uplist = ["HOME","SEVICES","WORKS","ABOUT","BLOG","CONTACT"];

for(let i =0; i < uplist.length ; i++)
{

	upUlLi = document.createElement('li');
    upLia  = document.createElement('a'); 
	upLia.setAttribute("href","#");
	upLia.innerHTML = uplist[i];
	upUlLi.appendChild(upLia); 
	upDivUl.appendChild(upUlLi);
}

upDiv.appendChild(upDivUl);



const img = ["Twitter.png","LinkedIn.png","Facebook.png","Instagram.png"];

for(let i = 0; i < img.length; i++)
{
	const ImginSubDivUp = document.createElement("img");
	ImginSubDivUp.setAttribute("src",img[i]);
	sub2UpDiv.appendChild(ImginSubDivUp);
}

upDiv.appendChild(sub2UpDiv);
sub2UpDiv.classList.add("socialMedia");

const h1 = document.createElement("h1");
const h2 = document.createElement("h2");

h1.innerText = HomeWork_website.page_title;
h2.innerText = HomeWork_website.page_description;



dwDiv.appendChild(h1);
dwDiv.appendChild(h2);
dwDiv.classList.add("dwDiv");

header.appendChild(dwDiv);

const title = document.querySelector("head title");

title.innerText = HomeWork_website.page_title;

footer.innerHTML = HomeWork_website.page_footer;

// console.log(title);

hex = () =>{
	values =[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
	let hex ="";

	for(let i = 0;i < 6; i++)
	{
        hex +=values [Math.floor(Math.random() * values.length)];

	}
	return "#"+hex;
}

// console.log(hex());


width = () =>{
	let width = Math.floor(Math.random() * 200) + 100;

	return width+"px" ;
}
height = () =>{
	let height = Math.floor(Math.random() * 400) + 200;

	return height+"px";
}
const section = document.querySelector("section");
const rectangleWrapper = document.createElement("div");

rectangleWrapper.id ="rectangleWrapper";
const getRectId =document.querySelector("#rectangleWrapper");
section.appendChild(rectangleWrapper);
let wId =[];
let Id ="";
for(let i = 0; i < 10; i++)
{
	let Id ="innerDiv"+`${i + 1}`;
	const innerDiv = document.createElement("div");
	innerDiv.style.background = hex();
	innerDiv.style.height = height();
	innerDiv.style.width = width();
	innerDiv.style.margin = "5px";
	innerDiv.style.color = "black";
	innerDiv.style.fontWeight = "bold";
	innerDiv.innerHTML ="background :"+hex()+"<br> width :"+width()+"<br> height :"+height();
	innerDiv.className = "divClass";
	innerDiv.id = Id
	rectangleWrapper.appendChild(innerDiv);
	wId.push(Id);

}


console.log("Here are the rectangle IDs : "+wId.join(" ,"));







// header style

header.style.background = "#373737c4";
header.style.position = "absolute";
header.style.top = "0";
header.style.height = "100px";
header.style.width = "100%";

// footer style


footer.style.background = "#373737c4";
footer.style.position = "absolute";
footer.style.height = "50px";
footer.style.bottom = "0";
footer.style.width = "100%";
