let n = 1

_$(n).addClass('current').siblings().addClass('enter')

setInterval(() => {
  // 2s后 current 开始离开, 离开需要时间
  _$(n).removeClass('current enter')
    .addClass('leave')
    .one('transitionend', (e) => {
      $(e.currentTarget).removeClass('leave current').addClass('enter')
    })
  //一旦完全离开，然后马上回去排队
  _$(n + 1).removeClass('enter leave').addClass('current')

  n += 1

}, 2000)

function handleN(n) { //1 2 3 4 5
  return n > 4 ? ((n % 4) === 0 ? 4 : (n % 4)) : n
}
function _$(n) {
  return $(`.images > img:nth-child(${handleN(n)})`)
}