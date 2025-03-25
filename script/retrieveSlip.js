export default class RetrieveSlip {
  slipId = document.querySelector("#adviceId");
  advice = document.querySelector("#advice");

  retrieveAdvice = () => {
    const apiUrl = "https://api.adviceslip.com/advice";
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Response is not ok");
        }
        return response.json();
      })
      .then((data) => {
        this.updateText(this.slipId, data.slip.id);
        this.updateText(this.advice, `"${data.slip.advice}"`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  updateText = (element, value) => {
    element.textContent = value;
  };
}
