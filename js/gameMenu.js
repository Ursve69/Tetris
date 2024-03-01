import { menuContent } from "./gameContent.js";
import { addHover } from "./sketchBtn.js";

export const createGameMenu = (app) => {
  const gameContent = document.querySelector(".game-content");
  gameContent.innerHTML = "";
  gameContent.innerHTML = menuContent;

  const easyBtn = document.querySelector(".easy");
  const normBtn = document.querySelector(".norm");
  const hardBtn = document.querySelector(".hard");

  easyBtn.addEventListener("click", () => app(15));
  normBtn.addEventListener("click", () => app(10));
  hardBtn.addEventListener("click", () => app(5));

  addHover();
};
