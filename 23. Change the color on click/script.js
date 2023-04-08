const randomColor = () => {
    let val = "1234567890ABCDEF";
    let cons = "#";
    for (let i = 0; i < 6; i++) {
      cons = cons + val[Math.floor(Math.random() * 16)];
    }
    return cons;
  };
  
  const button = document.getElementById("bgChangeButton");
  button.addEventListener("click", changeRandomColor);
  
  function changeRandomColor() {
    document.body.style.backgroundColor = randomColor();
  }
