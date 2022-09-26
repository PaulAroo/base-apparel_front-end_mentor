const input = document.getElementById("email");
const button = document.getElementById("btn");
const imgErr = document.getElementById("imgErr");
const frmtErr = document.getElementById("err");

button.addEventListener("click", () => {
  validate();
});

function validate() {
  let emailVal = input.value;
  const emailRegx = /^\w+([\.\-\+]\w+)*@[a-z]+([\.-]\w{2,3})*$/;
  if (!emailVal.match(emailRegx)) {
    imgErr.style.display = "block";
    input.style.borderColor = "hsl(0, 93%, 68%)";
    frmtErr.innerHTML = "Please provide a valid email";
  }
  // setTimeout(() => {
  //   imgErr.style.display = "none";
  //   frmtErr.innerHTML = "";
  // }, 5000);
}
