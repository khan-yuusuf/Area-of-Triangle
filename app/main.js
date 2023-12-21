
document.getElementById("calculate-button").onclick = () => {
  document.getElementById("area").setAttribute("disabled", false);

  document.getElementById("area").innerText = '';
  const messageBox = document.getElementById("message");
  messageBox.style.color = 'inherit';
  messageBox.innerText = '';

  let a = Number(document.getElementById("side-a").value);
  let b = Number(document.getElementById("side-b").value);
  let c = Number(document.getElementById("side-c").value);

  if (a > b + c || b > a + c || c > a + b) {
    messageBox.style.color = 'red';
    messageBox.innerText = `Invalid triangle.`;
    return;
  }

  // get the half perimeter of the triangle
  let s = (a + b + c) / 2;
  let area = (s * (s - a) * (s - b) * (s - c)) ** (1 / 2);

  document.getElementById("area").value = Number(area).toPrecision(5);
  document.getElementById("area").setAttribute("disabled", true);
};
