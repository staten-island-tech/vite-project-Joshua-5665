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
  {name:"Book"},
  {name:"Book"},
  {name:"Book"}
];



