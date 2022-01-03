const myButton = document.getElementById("myButton");
myButton.onclick = () => {
  const h1s = document.getElementsByTagName("h1");
  const number = Math.floor(Math.random() * 3);
  switch (number) {
    case 0:
      h1s[0].style.color = "green";
      break;
    case 1:
      h1s[0].style.color = "blue";
      break;
    case 2:
      h1s[0].style.color = "red";
      break;
  }
};
