import './style.css'
document.querySelector(".home").addEventListener("click", function () {
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
  {name:"Book"},
  {name:"Book"},
  {name:"Book"},
  {name:"Book"}
];

