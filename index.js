window.addEventListener("load", function() {
  var randomnumber1 = Math.floor(Math.random() * 6) + 1;
  var randomnumber2 = Math.floor(Math.random() * 6) + 1;
  var img1 = document.querySelector("img.img1");
  var img2 = document.querySelector("img.img2");


  switch (randomnumber1) {
    case 1:
      img1.setAttribute("src", "images//dice1.png");
      break;
    case 2:
      img1.setAttribute("src", "images//dice2.png");
      break;
    case 3:
      img1.setAttribute("src", "images//dice3.png");
      break;
    case 4:
      img1.setAttribute("src", "images//dice4.png");
      break;
    case 5:
      img1.setAttribute("src", "images//dice5.png");
      break;
    case 6:
      img1.setAttribute("src", "images//dice6.png");
      break;
    default:
      break;
  }

  switch (randomnumber2) {
    case 1:
      img2.setAttribute("src", "images//dice1.png");
      break;
    case 2:
      img2.setAttribute("src", "images//dice2.png");
      break;
    case 3:
      img2.setAttribute("src", "images//dice3.png");
      break;
    case 4:
      img2.setAttribute("src", "images//dice4.png");
      break;
    case 5:
      img2.setAttribute("src", "images//dice5.png");
      break;
    case 6:
      img2.setAttribute("src", "images//dice6.png");
      break;
    default:
      break;
  }

  if (randomnumber1 > randomnumber2) {
    document.querySelector(".MyBigHeader").textContent = "Player 1 Wins";
  } else if (randomnumber1 < randomnumber2) {
    document.querySelector(".MyBigHeader").textContent = "Player 2 Wins";
  } else {
    document.querySelector(".MyBigHeader").textContent = "Draw";
  }
  
});
