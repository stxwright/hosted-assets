const myButton = document.getElementById("myButton");
myButton.onclick = () => {
  const headerTags = document.querySelectorAll("h1,h2,h3");
  for (const header of headerTags) {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
      case 0:
        header.style.color = "green";
        break;
      case 1:
        header.style.color = "blue";
        break;
      case 2:
        header.style.color = "red";
        break;
    }
  }
  const allSame = Array.from(headerTags).every(
    (headerTag) => headerTag.style.color === headerTags[0].style.color
  );
  if (allSame) {
    const count = document.getElementById("count");
    count.innerText = (parseInt(count.textContent) + 1).toString();
  }
};
