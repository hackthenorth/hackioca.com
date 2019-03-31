export const animateInMenu = () => {
  const circle = document.getElementById("circle");
  if (circle) circle.className += " expand";

  const lines = document.getElementsByClassName("line");
  for (let i = 0; i < lines.length; i++) {
    lines[i].classList.toggle("collapse");
  }

  setTimeout(function() {
    lines[1].classList.toggle("hide");
    lines[0].className += " rotate30";
    lines[2].className += " rotate150";
  }, 70);

  setTimeout(function(){
    lines[0].className += " rotate45";
    lines[2].className += " rotate135";
  }, 120);
}

export const animateOutMenu = () => {
  const circle = document.getElementById("circle");
  if (circle) circle.classList.remove("expand");

  const lines = document.getElementsByClassName("line");
  lines[0].classList.remove("rotate45");
  lines[0].className += " rotate30";

  lines[2].classList.remove("rotate135");
  lines[2].className += " rotate150";

  setTimeout(function() {
    lines[0].classList.remove("rotate30");
    lines[2].classList.remove("rotate150");
  }, 50);

  setTimeout(function() {
    lines[1].classList.toggle("hide");
    for (let i = 0; i < lines.length; i++) {
      lines[i].classList.toggle("collapse");
    }
  }, 70);
}