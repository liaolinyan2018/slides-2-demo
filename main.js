var n = 1;

$(`.images > img:nth-child(${n})`).addClass('current').siblings().addClass('enter');

setInterval(() =>{
  $(`.images > img:nth-child(${handleN(n)})`).removeClass('current enter').addClass('leave')
    .one('transitionend',(e) => {$(e.currentTarget).removeClass('leave current').addClass('enter');
      });//先离开，然后马上回去排队
  $(`.images > img:nth-child(${handleN(n+1)})`).removeClass('enter leave').addClass('current');
  n+=1;
  },1500)

function handleN(n){ //1 2 3 4
  if(n>4) {
    n=n%4; //1 2 3 0
    if(n===0){
      n = 4;
    }
  }
  return n;
}
