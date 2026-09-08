function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  let viewsStr;

  if (views < 1000000) {
    viewsStr = views / 1000 + "K";
  } 
  else if (views >= 1000000) {
    viewsStr = views / 1000000 + "M";
  } 
  else {
    viewsStr = views;
  }

  let html = `
        <div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="thumbnail">
                <div class="capsule">${duration}</div>
            </div>

            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewsStr} Views . ${monthsOld} months ago</p>
            </div>
        </div>
    `;

  document.querySelector(".container").innerHTML += html;
}

createCard(
  "Introduction to Backend | Sigma Web Dev #2",
  "CodeWithHarry",
  56000,
  7,
  "31:22",
  "https://i.ytimg.com/vi/UzYRQURh_pY/hq720.jpg",
);
