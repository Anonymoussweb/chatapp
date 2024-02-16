const show = document.querySelector(".show");
const chathis = document.querySelector(".chat-his");


const card = document.querySelectorAll(".card");
card.forEach(element => {
  element.addEventListener("click", (el) => {

    title = element.getAttribute("data-title");
    img = element.getAttribute("data-img");
    document.querySelector(".p").innerHTML = `${title}`;
    document.querySelector(".img").src = `${img}`;
    gimg = document.querySelectorAll(".gimg");
    gimg.forEach((im) => {
      im.src = img;
    })
  })

  element.addEventListener("click", () => {
    chathis.style.display = "initial"
  })
});





const messages = document.querySelector(".messages");
function handleclick() {
  show.style.display = "none"
  messages.style.display = "initial"
}
function send() {
  var x = document.querySelector(".inputf").value;
  var ul = document.querySelector(".gchat");
  li = document.createElement("li");
  li.innerHTML = `<li><img src="${img}" alt=""><p>${x}</p></li>`;
  ul.appendChild(li);
  document.querySelector(".inputf").value = "";
}
// =================Toggle=======================
let ch = true
function toggle() {

  let navtog = document.querySelector(".togside");

  if (ch) {
    navtog.style.right = "0";
    ch = false;
  }
  else {
    navtog.style.right = "-100%";
    ch = true
  }

}


