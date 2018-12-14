/*初始化*/
var n = 1;
$(`.images > img:nth-child(${n})`).addClass('current').siblings().addClass('enter');
//console.log($(`.images > img:nth-child(${n})`)) //这句代码才是打出指定的img
//console.log($('.images > img:nth-child(n)'))//这句话会打出所有img
//console.log()
/*两个不同状态切换间隔时间为2s*/
setInterval(() =>{
  $(`.images > img:nth-child(${x(n)})`).removeClass('current').addClass('leave')
    .one('transitionend',(e) => {$(e.currentTarget).removeClass('leave').addClass('enter');
      });//先离开，然后回去排队
  $(`.images > img:nth-child(${x(n+1)})`).removeClass('enter').addClass('current');
  n++;
  },2000)

function x(n){ //1
  if(n>4) {
    n=n%4; //1 2 3 0
    if(n===0){
      n = 4;
    }
  }
  return n;
}
