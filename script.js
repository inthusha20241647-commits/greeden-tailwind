var input = document.getElementById("search");

var card = document.querySelectorAll(".card");

input.addEventListener("keyup", function (event) {
  var enteredValue = event.target.value.toUpperCase();

  for (count = 0; count < card.length; count++) {
    var paraList = card[count].querySelector(".paraList");

    if (paraList.textContent.toUpperCase().indexOf(enteredValue) < 0) {
      card[count].style.display = "none";
    } else {
      card[count].style.display = "block";
    }
  }
});
