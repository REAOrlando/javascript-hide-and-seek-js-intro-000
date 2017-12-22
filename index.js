function getFirstSelector(selector) {
  return document.querySelector(selector)
}

// function nestedTarget(target, nested) {
//   return document.querySelector(target nested)
// }

function increaseRankBy(n) {
  const lis = document.getElementById("app").querySelectorAll("ul.ranked-list li")
  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}
