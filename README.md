# slide-2
4张图片的无缝轮播

技术： jQuery/HTML/CSS
项目介绍： 该无缝轮播示例基于jQuery，通过将轮播过程中图片分为三个状态current、leave、enter,使用setInterval定时2秒进行状态切换一次，即第一张图片由current状态切换为leave状态,监听到动画结束后（transitionend），又马上切换为enter状态，移动两次。然后下一张图片由enter状态切换到current状态，依此类推，一直循环下去。JS负责有两个功能，定时 和 切换状态，CSS负责给不同的状态添加对应的样式(transform: translateX(0);),来控制图片的切换方向，使用transition:all 220ms;来控制图片切换时间。
