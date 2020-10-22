let list = document.getElementById("list");
let btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {
  let item = list.lastElementChild.cloneNode(true);
  item.innerHTML = "new item";
  list.appendChild(item);
});



list.addEventListener('click', function(e){
  if(this.contains(e.target)){
    e.target.remove()
  }
})