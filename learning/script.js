console.log("hello world");

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red";

// document.getElementById("red").style.backgroundColor = "red";

// document.querySelector(".box").style.backgroundColor = "green";

// document.querySelectorAll(".box").forEach((e) => {
//   e.style.backgroundColor = "blue";
// });

// let div = document.createElement("div");
// div.innerHTML = "i have been created by <b>KAUN<b>";
// div.setAttribute("class", "created");
// document.querySelector(".container").append(div);

let cont = document.querySelector(".container")
cont.insertAdjacentHTML("afterend", "<b>Hello I'm under the water plz help me, here to much raining........</b>")
