let togg1 = document.getElementById("togg1");
let togg2 = document.getElementById("togg2");

togg1.addEventListener("click", () => {
  if(getComputedStyle(togg2).display != "none"){
    togg2.style.display = "none";
  } else {
    togg2.style.display = "block";
  }
})

function togg(){
  if(getComputedStyle(togg1).display != "none"){
   
    togg1.style.display = "block";
  }
};
togg2.onclick = togg;