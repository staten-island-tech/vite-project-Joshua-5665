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
  window.location.href = "http://127.0.0.1:5500/index.html";
});






