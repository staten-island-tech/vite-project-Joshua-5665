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





const shelf = [
  {name:"Book",
   img: "https://m.media-amazon.com/images/I/81xVnX8OodL._SY385_.jpg"
  },
  {name:"Book",
   img: "https://m.media-amazon.com/images/I/51CbDLV85oL._SY445_SX342_FMwebp_.jpg"
  },
  {name:"Book",
   img: "https://m.media-amazon.com/images/I/81B8uLQ-nFL._SY466_.jpg"
  },
  {name:"Book"}
];

    const container = document.querySelector(".main2");
    container.insertAdjacentHTML(
        "afterbegin",
        `<div class="card">
            <img class="card-img" src="${books.img}"/>
            <h5 class="card-Header">${books.name}</h5>
            <h6 class="card-price">$${books.price}</h6>
            <button class="add-to-cart-btn">ADD TO CART</button>
        </div>`
    );

  




