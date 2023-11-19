import { initialRender, viewMore, lastVisited } from "./render.js";

const viewMoreEvent = () => {
  const moreBtn = document.querySelector("#newsMore");
  let count = 10;

  moreBtn.addEventListener("click", () => {
    viewMore(count);
    count += 10;
  });
};

initialRender();
viewMoreEvent();
lastVisited();