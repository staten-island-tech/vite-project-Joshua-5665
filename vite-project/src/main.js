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
];
  function inject(shelf) {
    const container = document.querySelector(".main2");
    container.insertAdjacentHTML(
        "afterbegin",
        `<div class="main2">
            <img class="card-img" src="${shelf.img}"/>
            
            <button class="add-to-cart-btn">ADD TO CART</button>
        </div>`
    );
  };
    function filterBooks(type) {
    let filterByType = [];
    if (type === "All") {
        filterByType = shelf;
    } else {
        filterByType = shelf.filter((shelf) => shelf.type === type);
    }
    const container = document.querySelector(".main2");
    container.innerHTML = "";
    filterByType.forEach(inject);
  }
shelf.forEach(inject);
  




