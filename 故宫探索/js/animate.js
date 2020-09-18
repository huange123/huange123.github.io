// 封装以上代码
// 把写死的值提取出来做参数
// element: 需要做动画的元素（dom对象）
// target： 终点
// 作用：可以让任意元素去任意left位置
function animate(element, target) {
    clearInterval(element.timerId);
    // console.log("timerId的值", timerId);

    // 这是在开启定时器，之前先把上一次开启的给关闭掉
    element.timerId = setInterval(function() {
        // 1. 获取元素的当前位置
        var current = element.offsetLeft;

        var step = current < target ? 10 : -10; // 每次移动的距离
        // console.log(step);
        
        // 判断当前位置是否有超过800，如果超过，说明已经到了终点
        // 让元素停止运动
        if (Math.abs(target - current) < Math.abs(step)) {
            // 到了终点 ==> 停止运动 ==> 清除定时器
            clearInterval(element.timerId);

            // 让元素直接去终点
            element.style.left = target + "px";
        } else {
            // 还没到终点 ==> 继续运动
            // 2. 移动一段距离 10
            current += step;

            // 3. 还需要修改元素的位置
            element.style.left = current + "px";
        }
    }, 16);
}
