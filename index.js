const adviceId = document.getElementById("num");
const adviceTxt = document.getElementById("advice");
const adviceBtn = document.getElementById("butt");
const url = "https://api.adviceslip.com/advice";

async function getAdvice() {
  const res = await fetch(url);
  const { slip:{id, advice}}
      = await res.json();
    
  adviceId.innerHTML = id;
  adviceTxt.innerHTML = advice;
}
getAdvice();

adviceBtn.addEventListener("click", getAdvice);
