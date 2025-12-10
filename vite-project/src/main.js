import './style.css'
document.querySelector(".toggleColor").addEventListener("click", function () {
 if(document.body.classList.contains("cool")) {
   console.log("ochen da")
   document.body.classList.add("warm");
   document.body.classList.remove("cool");
 } else {
   document.body.classList.add("cool");
   document.body.classList.remove("warm");
 }
});
const recommended = [
 {
  img: "https://m.media-amazon.com/images/I/81xVnX8OodL._SY385_.jpg"
 },
 {
  img: "https://m.media-amazon.com/images/I/51CbDLV85oL._SY445_SX342_FMwebp_.jpg"
 },
 {
  img: "https://m.media-amazon.com/images/I/81B8uLQ-nFL._SY466_.jpg"
 },
 {
  img: "https://m.media-amazon.com/images/I/51shYHwY06L._SY445_SX342_FMwebp_.jpg"
 },
 {
  img: "https://www.beacon.org/Assets/ProductImages/978-080706010-0.jpg"
 },
 {
   img: "https://m.media-amazon.com/images/I/81G3FEapceL._SY466_.jpg"
 },
];
 function inject(recommended) {
   const container = document.querySelector(".main2");
   container.insertAdjacentHTML(
       "afterbegin",
       `<div class="main2">
           <img class="card-img" src="${recommended.img}"/>
           <button class="add-to-cart-btn">ADD TO LIBRARY</button>
       </div>`
   );
 };
recommended.forEach(inject);


const read = [
 {
   img: "https://m.media-amazon.com/images/I/41dODnI1g8L.jpg",
 
 },
 {
   img: "https://m.media-amazon.com/images/I/51ohFqjH4lL._SY445_SX342_FMwebp_.jpg",
  
 },
 {
   img: "https://m.media-amazon.com/images/I/81uTSdZJCZL._SY522_.jpg",
 
 },
 {
   img: "https://m.media-amazon.com/images/I/818rZeonl4L._SY522_.jpg",
 
 },
 {
   img: "https://m.media-amazon.com/images/I/81rfZ1V2IpL._SY522_.jpg",
  
 },
 {
   img: "https://m.media-amazon.com/images/I/51XQktN9oeL._SY445_SX342_FMwebp_.jpg",
  
 },
];
   function inject2(read) {
   const container2 = document.querySelector(".main3");
   container2.insertAdjacentHTML(
       "afterbegin",
       `<div class="main3">
           <img class="card-img2" src="${read.img}"/>
           <button class="add-to-cart-btn2">ADD TO LIBRARY</button>
       </div>`
   );
 };
read.forEach(inject2);




const buttons = document.querySelectorAll(".add-to-cart-btn")
buttons.forEach((btn) => {
 btn.addEventListener("mouseover", () => {
   btn.style.backgroundColor = "rgb(219, 161, 0)";
 });


 btn.addEventListener("mouseout", () => {
   btn.style.backgroundColor = "";
 });
 btn.addEventListener("click", ()=> {
   window.alert("Book Added to Library!")
 });
});
const buttons2 = document.querySelectorAll(".add-to-cart-btn2")
buttons2.forEach((btn) => {
 btn.addEventListener("mouseover", () => {
   btn.style.backgroundColor = "rgb(219, 161, 0)";
 });


 btn.addEventListener("mouseout", () => {
   btn.style.backgroundColor = "";
 });
 btn.addEventListener("click", ()=> {
   window.alert("Book Added to Library!")
 });
});


const search = document.querySelector("h1")
 search.addEventListener("click", ()=> {
   window.alert("The Search Bar is Currently Unavailable. Please Try Again Later.")
 })


const home = document.querySelector(".home");
home.addEventListener("click", () => {
 window.location.href = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRbcrj53mGyk-u4JwrIb6z1RBAeCpxR78gfQ&s";
});






const please = document.querySelector('.read');
const iNeedThis = please.innerHTML;


const speed = document.querySelector('.rec');
const myMom = speed.innerHTML;


const s = document.querySelector('.word');
const t = s.innerHTML;


const main2 = document.querySelector('.main2');
const main3 = document.querySelector('.main3');


const library = document.querySelector('.library');
library.style.display = 'none';


const word = document.querySelector('.word')
word.style.display = 'none';


const bye = document.querySelector('.remove');
bye.style.display = 'none';


const sike = document.querySelector('.filter-btn2');
sike.style.display = 'none';


const remove = document.querySelector('.remove');
remove.addEventListener('click', () => {
 window.alert('Library Cleared!');
 document.querySelector('.library').innerHTML = '';
})


const shelf = document.querySelector('.filter-btn');
shelf.addEventListener('click', () => {
 main2.style.display = 'none';
 document.querySelector('.rec').innerHTML = 'Library - To Read';
 document.querySelector('.word').innerHTML = '';
 library.style.display = 'flex';
 bye.style.display = 'flex';
 sike.style.display = 'flex';
})
const back = document.querySelector('.filter-btn2');
back.addEventListener('click', () => {
 main2.style.display = 'flex';
 document.querySelector('.rec').innerHTML = myMom;
 document.querySelector('.word').innerHTML = t;
 library.style.display = 'none';
 bye.style.display = 'none';
 sike.style.display = 'none';
})


const shelf2 = document.querySelector('.filter-btn');
shelf2.addEventListener('click', () => {
 main3.style.display = 'none';
 document.querySelector('.read').innerHTML = '';
})
const back2 = document.querySelector('.filter-btn2');
 back2.addEventListener('click', ()=> {
   main3.style.display = 'flex';
   document.querySelector('.read').innerHTML = iNeedThis;
})


const collection = document.querySelectorAll('.add-to-cart-btn');
collection.forEach((jit) => {
 jit.addEventListener('click', () => {
   const place = document.querySelector('.card-img');
   const destination = document.querySelector('.library');
  
   const clone = place.cloneNode(true);
   destination.appendChild(clone);
 })
})
const collection2 = document.querySelectorAll('.add-to-cart-btn2');
collection2.forEach((jit) => {
 jit.addEventListener('click', () => {
   const place2 = document.querySelector('.card-img2');
   const destination2 = document.querySelector('.library');
  
   const clone2 = place2.cloneNode(true);
   destination2.appendChild(clone2);
 })
})

const hi = document.querySelector('.remove');
hi.addEventListener('mouseover', () => {
  hi.style.backgroundColor = 'black';
  hi.style.color = 'white';
})

hi.addEventListener('mouseout', () => {
  hi.style.background = '';
  hi.style.color = '';
})

const owen = document.querySelector('.filter-btn');
owen.addEventListener('mouseover', ()=> {
  owen.style.backgroundColor = 'black';
  owen.style.color = 'white';
})
owen.addEventListener('mouseout', () => {
  owen.style.backgroundColor = '';
  owen.style.color = '';
})

const what = document.querySelector('.filter-btn2');
what.addEventListener('mouseover', () => {
  what.style.backgroundColor = 'black';
  what.style.color = 'white';
})
what.addEventListener('mouseout', () => {
  what.style.backgroundColor = '';
  what.style.color = '';
})

const last = document.querySelector('.icon');
last.addEventListener('click', () => {
  let p = window.prompt('What is "sechs sieben" in German?');
  if (p === "67" || p === "Six Seven" || p === "67!" || p ==="six seven") {
    window.alert('Correct!');
  } else if (p === '') {
    window.alert('you did not answer...');
  } else if (p.toLowerCase() ==='sixseven' ) {
    window.alert('Does your brain know how to add spaces?')
  } else {
    window.alert('Wrong!')
  }
});









