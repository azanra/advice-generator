import RetrieveSlip from "./retrieveSlip.js";

export default class Controller {
  generateBtn = document.querySelector("#generateBtn");

  addListener = () => {
    this.generateBtn.addEventListener("click", () => {
      let slip = new RetrieveSlip();
      slip.retrieveAdvice();
    });
  };
}
