// const btn = document.getElementById("btn");

// view.addEventListener("click", (event) => {
//   // document.body.style.backgroundColor = "salmon";

//   // document.body.style.color = 'white';
// });
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readyState: complete");
    initApp(); //call the initApp function
  }
});
const initApp = () => {
  const view = document.querySelector("#view2");
  const div = view.querySelector("div");
  const h2 = div.querySelector("h2");
  view.addEventListener(
    "click",
    (event) => {
      // view.style.backgroundColor = "green "

      view.classList.toggle("purple"); //access the class
      view.classList.toggle("red");
    },
    false
  );
  div.addEventListener(
    "click",
    (event) => {
      // event.stopPropagation();
      // div.style.backgroundColor = "blue";
      div.classList.toggle("aqua");
      div.classList.toggle("black");
    },
    false
  );
  h2.addEventListener(
    "click",
    (event) => {
      const myText = event.target.textContent;
      myText === "My 2nd View"
        ? (event.target.textContent = "Clicked")
        : (event.target.textContent = "My 2nd View");
    },
    false
  );

  const nav = document.querySelector("nav");
  nav.addEventListener(
    "mouseover",
    (event) => {
      event.target.classList.add("height100");
    },
    false
  );
  nav.addEventListener("mouseout", (event) => {
    event.target.classList.remove("height100");
  });
};
