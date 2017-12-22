function getFirstSelector(selector) {
  return document.querySelector(selector)
}

// function nestedTarget(target, nested) {
//   return document.querySelector(target nested)
// }

function increaseRankBy(n) {
  const lis = document.getElementById("app").querySelectorAll("ul.ranked-list li")
  for (var i = 0; i < const.length; i++) {
    const[i].innerHTML = parseInt(const[i].innerHTML) + n
  }
}
